import type { KnowledgeCategory } from "../types/Knowledge";

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    key: "frontend",
    title: "Frontend",
    description: "UI frameworks, performance, accessibility, and patterns.",
    items: [
      {
        id: "fe-react-performance",
        title: "React performance essentials",
        summary: "Memoization, Suspense boundaries, and avoiding unnecessary renders.",
        tags: ["react", "performance", "memo"],
      },
      {
        id: "fe-a11y-checklist",
        title: "Accessibility checklist",
        summary: "Landmarks, focus management, ARIA patterns, and color contrast.",
        tags: ["a11y", "wcag", "aria"],
      },
      {
        id: "fe-bundling-strategies",
        title: "Bundling and code-splitting",
        summary: "Route-based chunks, critical path, and preloading.",
        tags: ["bundling", "vite", "webpack"],
      },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    description: "APIs, microservices, messaging, and data consistency.",
    items: [
      {
        id: "be-rest-graphql",
        title: "REST vs GraphQL",
        summary: "Trade-offs, schema evolution, caching, and tooling.",
        tags: ["api", "graphql", "rest"],
      },
      {
        id: "be-idempotency",
        title: "Idempotent APIs",
        summary: "Safety against retries with keys and state machines.",
        tags: ["idempotency", "http", "retries"],
      },
      {
        id: "be-kafka-basics",
        title: "Kafka essentials",
        summary: "Partitions, ordering, compaction, and consumer groups.",
        tags: ["kafka", "eventing", "stream"],
      },
    ],
  },
  {
    key: "system-design",
    title: "System Design",
    description: "Scalability, availability, and architectural trade-offs.",
    items: [
      {
        id: "sd-caching",
        title: "Caching strategies",
        summary: "CDN, application cache, TTL, and invalidation tactics.",
        tags: ["cache", "cdn", "redis"],
      },
      {
        id: "sd-consistency",
        title: "Consistency models",
        summary: "Strong vs eventual, read-your-writes, and monotonic reads.",
        tags: ["consistency", "cap", "db"],
      },
      {
        id: "sd-rate-limits",
        title: "Rate limiting",
        summary: "Fixed window, leaky bucket, token bucket, and fairness.",
        tags: ["limits", "quota", "api"],
      },
    ],
  },
  {
    key: "devops",
    title: "DevOps & Cloud",
    description: "CI/CD, containers, Kubernetes, and IaC.",
    items: [
      {
        id: "do-ci-cd",
        title: "CI/CD pipelines",
        summary: "Branch strategies, test gates, and progressive delivery.",
        tags: ["ci", "cd", "deploy"],
      },
      {
        id: "do-k8s-basics",
        title: "Kubernetes basics",
        summary: "Pods, services, readiness, and rolling updates.",
        tags: ["kubernetes", "k8s", "containers"],
      },
      {
        id: "do-observability",
        title: "Observability",
        summary: "Logs, metrics, traces, SLOs and alerting hygiene.",
        tags: ["otel", "prometheus", "slo"],
      },
    ],
  },
  {
    key: "interview",
    title: "Interview Tips",
    description: "Preparation, communication, and practical coding tips.",
    items: [
      {
        id: "iv-struct",
        title: "Structured answers",
        summary: "Use frameworks like STAR and summarize trade-offs.",
        tags: ["communication", "behavioral"],
      },
      {
        id: "iv-complexity",
        title: "Complexity talk-through",
        summary: "Explain time/space trade-offs and constraints upfront.",
        tags: ["dsa", "complexity"],
      },
      {
        id: "iv-systems",
        title: "System design tips",
        summary: "Clarify requirements, estimates, and propose phased designs.",
        tags: ["system-design", "estimations"],
      },
    ],
  },
];

