export interface IBlogPost {
  id: number;
  title: string;
  body: string;
  tags: Tag[];
  reactions: Reaction;
  views: number;
  userId: number;
}

export interface IBlogPosts {
  posts: IBlogPost[];
  total: number;
  skip: number;
  limit: number;
}

interface Reaction {
  likes: number;
  dislikes: number;
  [key: string]: any;
}

type Tag = string;
