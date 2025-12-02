import React, { useState } from "react";
import { Book } from "../types/Book";

interface BookFormProps {
  onAdd: (book: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<"Lido" | "Não lido">("Não lido");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ title, author, status });
    setTitle("");
    setAuthor("");
    setStatus("Não lido");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as "Lido" | "Não lido")}>
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default BookForm;
