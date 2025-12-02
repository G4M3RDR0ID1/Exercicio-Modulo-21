export interface Book {
  _id?: string; // gerado pela API
  title: string;
  author: string;
  status: "Lido" | "Não lido";
}
