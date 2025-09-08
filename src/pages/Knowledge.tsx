import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { knowledgeCategories } from '../data/knowledge';
import type { KnowledgeCategory, KnowledgeItem, KnowledgeView } from '../types/Knowledge';

type TabKey = KnowledgeCategory['key'] | 'all';

function normalize(s: string) {
  return s.toLowerCase();
}

function matches(item: KnowledgeItem, q: string) {
  const n = normalize(q);
  if (!n) return true;
  return (
    normalize(item.title).includes(n) ||
    normalize(item.summary).includes(n) ||
    (item.tags ?? []).some((t) => normalize(t).includes(n))
  );
}

function useDeepLinking() {
  const [params, setParams] = useSearchParams();
  const initialView = (params.get('view') === 'map' ? 'map' : 'list') as KnowledgeView;
  const initialTab = (params.get('tab') ?? 'all') as TabKey;
  const initialQ = params.get('q') ?? '';

  const setParam = (key: string, value: string) => {
    const p = new URLSearchParams(params);
    if (value) p.set(key, value); else p.delete(key);
    setParams(p, { replace: true });
  };

  return {
    params,
    initialView,
    initialTab,
    initialQ,
    setParam,
  };
}

const allTabs: { key: TabKey; label: string }[] = [
  { key: 'all', label: 'All' },
  ...knowledgeCategories.map((c) => ({ key: c.key as TabKey, label: c.title })),
];

const ViewToggle: React.FC<{
  view: KnowledgeView;
  onChange: (v: KnowledgeView) => void;
}> = ({ view, onChange }) => {
  return (
    <div role="tablist" aria-label="View mode" className="inline-flex border rounded-md overflow-hidden shadow-sm">
      {(['list', 'map'] as KnowledgeView[]).map((v) => (
        <button
          key={v}
          role="tab"
          aria-selected={view === v}
          className={`px-3 py-1 text-sm font-medium ${view === v ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => onChange(v)}
        >
          {v === 'list' ? 'List' : 'Mind-Map'}
        </button>
      ))}
    </div>
  );
};

const CategoryPills: React.FC<{
  tab: TabKey;
  onChange: (t: TabKey) => void;
}> = ({ tab, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categories">
      {allTabs.map((t) => (
        <button
          key={t.key}
          role="tab"
          aria-selected={tab === t.key}
          onClick={() => onChange(t.key)}
          className={`px-3 py-1 rounded-full border text-sm ${tab === t.key ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-400' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

const KnowledgeListView: React.FC<{
  categories: KnowledgeCategory[];
}> = ({ categories }) => {
  return (
    <div className="space-y-8">
      {categories.map((cat) => (
        <section key={cat.key} id={`cat-${cat.key}`} aria-labelledby={`h-${cat.key}`} className="scroll-mt-24">
          <header className="mb-2 flex items-baseline gap-3">
            <h3 id={`h-${cat.key}`} className="text-xl font-semibold text-blue-700 dark:text-blue-300">{cat.title}</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">{cat.items.length} items</span>
          </header>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cat.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.items.map((it) => (
              <article key={it.id} className="border rounded-lg p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm" tabIndex={0}>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">{it.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{it.summary}</p>
                {it.tags && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {it.tags.map((tg) => (
                      <span key={tg} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        {tg}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

// Lightweight SVG mind-map with pan/zoom and highlight
const KnowledgeMindMap: React.FC<{
  categories: KnowledgeCategory[];
  highlighted?: string | null; // category key
}> = ({ categories, highlighted }) => {
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragging = useRef<{ x: number; y: number } | null>(null);

  const size = { w: 1200, h: 800 };
  const cx = size.w / 2;
  const cy = size.h / 2;
  const catRadius = 220;
  const itemRadius = 380;

  type Node = { id: string; x: number; y: number; type: 'category' | 'item'; parent?: string; label: string };
  const nodes: Node[] = [];
  const edges: { from: string; to: string }[] = [];

  categories.forEach((cat, idx) => {
    const angle = (idx / categories.length) * Math.PI * 2;
    const x = cx + catRadius * Math.cos(angle);
    const y = cy + catRadius * Math.sin(angle);
    nodes.push({ id: `cat-${cat.key}`, x, y, type: 'category', label: cat.title });
    cat.items.forEach((it, i) => {
      const spread = Math.max(1, cat.items.length - 1);
      const offset = (i / spread - 0.5) * (Math.PI / 3); // spread items around category
      const ix = cx + itemRadius * Math.cos(angle + offset);
      const iy = cy + itemRadius * Math.sin(angle + offset);
      nodes.push({ id: `item-${it.id}`, x: ix, y: iy, type: 'item', parent: `cat-${cat.key}`, label: it.title });
      edges.push({ from: `cat-${cat.key}`, to: `item-${it.id}` });
    });
  });

  const onWheel: React.WheelEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault();
    const delta = -e.deltaY; // up to zoom in
    const factor = delta > 0 ? 1.1 : 0.9;
    setScale((s) => Math.min(3, Math.max(0.4, s * factor)));
  };

  const onMouseDown: React.MouseEventHandler<SVGSVGElement> = (e) => {
    dragging.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };
  const onMouseMove: React.MouseEventHandler<SVGSVGElement> = (e) => {
    if (dragging.current) {
      setPan({ x: e.clientX - dragging.current.x, y: e.clientY - dragging.current.y });
    }
  };
  const onMouseUp = () => (dragging.current = null);
  const onMouseLeave = () => (dragging.current = null);

  const reset = () => { setScale(1); setPan({ x: 0, y: 0 }); };

  return (
    <div className="relative border rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700" aria-label="Mind map canvas">
      <div className="absolute top-2 left-2 flex gap-2 z-10">
        <button onClick={() => setScale((s) => Math.min(3, s * 1.1))} className="px-2 py-1 text-sm rounded bg-gray-100 dark:bg-gray-800">+</button>
        <button onClick={() => setScale((s) => Math.max(0.4, s * 0.9))} className="px-2 py-1 text-sm rounded bg-gray-100 dark:bg-gray-800">-</button>
        <button onClick={reset} className="px-2 py-1 text-sm rounded bg-gray-100 dark:bg-gray-800">Reset</button>
      </div>
      <svg
        role="img"
        aria-describedby="map-fallback"
        width="100%"
        height="640"
        viewBox={`0 0 ${size.w} ${size.h}`}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        className="touch-pan-y"
      >
        <rect width={size.w} height={size.h} fill="transparent" />
        <g transform={`translate(${pan.x},${pan.y}) scale(${scale})`}>
          {edges.map((e) => {
            const from = nodes.find((n) => n.id === e.from)!;
            const to = nodes.find((n) => n.id === e.to)!;
            const muted = highlighted && from.id !== `cat-${highlighted}`;
            return (
              <line
                key={`${e.from}-${e.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={muted ? '#9ca3af' : '#60a5fa'}
                strokeWidth={muted ? 1 : 2}
                strokeOpacity={muted ? 0.5 : 0.9}
              />
            );
          })}
          {nodes.map((n) => {
            const isCat = n.type === 'category';
            const isHighlighted = highlighted && n.id === `cat-${highlighted}`;
            const muted = highlighted && n.parent && n.parent !== `cat-${highlighted}`;
            return (
              <g key={n.id} transform={`translate(${n.x},${n.y})`}>
                <circle r={isCat ? 48 : 28} fill={isCat ? (isHighlighted ? '#2563eb' : '#3b82f6') : '#e5e7eb'} stroke="#1f2937" strokeWidth={isCat ? 0 : 0} opacity={muted ? 0.4 : 1} />
                <text
                  x={0}
                  y={0}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: isCat ? 12 : 10, fill: isCat ? 'white' : '#111827' }}
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      {/* Accessible fallback list of visible content */}
      <div id="map-fallback" className="sr-only" aria-live="polite">
        {categories.map((c) => (
          <div key={c.key}>
            <div>{c.title} — {c.items.length} items</div>
            <ul>
              {c.items.map((i) => (
                <li key={i.id}>{i.title}: {i.summary}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const Knowledge: React.FC = () => {
  const { initialView, initialTab, initialQ, setParam } = useDeepLinking();
  const [view, setView] = useState<KnowledgeView>(initialView);
  const [tab, setTab] = useState<TabKey>(initialTab);
  const [q, setQ] = useState(initialQ);

  // sync URL on changes
  useEffect(() => { setParam('view', view); }, [view]);
  useEffect(() => { setParam('tab', tab === 'all' ? '' : String(tab)); }, [tab]);
  useEffect(() => { setParam('q', q); }, [q]);

  const filtered = useMemo(() => {
    const cats = knowledgeCategories
      .filter((c) => tab === 'all' || c.key === tab)
      .map((c) => ({
        ...c,
        items: c.items.filter((it) => matches(it, q) || normalize(c.title).includes(normalize(q)) || normalize(c.description).includes(normalize(q))),
      }))
      .filter((c) => c.items.length > 0 || normalize(c.title).includes(normalize(q)) || normalize(c.description).includes(normalize(q)));
    return cats;
  }, [tab, q]);

  const highlightedCategory = tab !== 'all' ? String(tab) : null;

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Helmet>
        <title>Knowledge Hub | Curated Notes & Tips</title>
        <meta name="description" content="Curated notes & tips for fast learning and interviews across Frontend, Backend, System Design, and DevOps." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Knowledge Hub</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Curated notes & tips for fast learning and interviews.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-4">
          <div className="flex-1">
            <label htmlFor="k-search" className="sr-only">Search knowledge</label>
            <input
              id="k-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by title, summary, or tags..."
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
            />
          </div>
          <ViewToggle view={view} onChange={setView} />
        </div>

        <CategoryPills tab={tab} onChange={setTab} />

        <div className="mt-6">
          {view === 'list' ? (
            <KnowledgeListView categories={filtered} />
          ) : (
            <KnowledgeMindMap categories={filtered} highlighted={highlightedCategory} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Knowledge;
