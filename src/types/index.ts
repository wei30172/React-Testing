export type TodoType = {
  userId?: number;
  _id: number;
  title: string;
  completed: boolean;
};

export type PostType = {
  userId?: number;
  id: number;
  title: string;
  body: string;
};
