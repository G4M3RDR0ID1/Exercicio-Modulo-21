import React from "react";
import type { Book } from "../types/Book";

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
  onToggleStatus?: (id: string, status: "Lido" | "Não lido") => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onDelete, onToggleStatus }) => {
  return (
    <li className="book-item">
      <div className="info">
        <strong>{book.title}</strong> - {book.author}
      </div>
      <div className="actions">
  <span className="status">{book.status}</span>
  <button className="remove-btn" onClick={() => book._id && onDelete(book._id)}>Remover</button>
  {onToggleStatus && (
    <button
      className="toggle-btn"
      onClick={() =>
        book._id &&
        onToggleStatus(book._id, book.status === "Lido" ? "Não lido" : "Lido")
      }
    >
      Alternar Status
    </button>
  )}
</div>

    </li>
  );
};

export default BookItem;
