import React from "react";
import type { Book } from "../types/Book";

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
  onToggleStatus?: (id: string, status: "Lido" | "Não lido") => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onDelete, onToggleStatus }) => {
  return (
    <li>
      <strong>{book.title}</strong> - {book.author} ({book.status})
      <button onClick={() => book._id && onDelete(book._id)}>Remover</button>
      {onToggleStatus && (
        <button
          onClick={() =>
            book._id && onToggleStatus(book._id, book.status === "Lido" ? "Não lido" : "Lido")
          }
        >
          Alternar Status
        </button>
      )}
    </li>
  );
};

export default BookItem;
