export interface PageProps {
  title: string;
  children?: React.ReactNode;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}