import React from "react";
import type { Book } from "../types/Book";
import BookItem from "./BookItem";

interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
  onToggleStatus?: (id: string, status: "Lido" | "Não lido") => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete, onToggleStatus }) => {
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book._id}
          book={book}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </ul>
  );
};

export default BookList;
