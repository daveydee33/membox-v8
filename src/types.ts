export interface Item {
  related: string[];
  seeAlso: string[];
  tags: string[];
  audios: any[];
  images: string[];
  title: string;
  description: string;
  details: string;
  examples: Example[];
  id: string;
}

interface Example {
  title: string;
  description: string;
}
