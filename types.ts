export interface Category {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  category_id: number;
  authors: string[];
  cover_url: string;
  description: string;
  sections: Section[];
  audio_length: number;
}

export interface Section {
  title: string;
  content: string;
}
