export type KnowledgeView = 'list' | 'map';

export interface KnowledgeItem {
  id: string;
  title: string;
  summary: string;
  url?: string;
  tags?: string[];
}

export interface KnowledgeCategory {
  key: string; // e.g., 'frontend'
  title: string;
  description: string;
  items: KnowledgeItem[];
}

