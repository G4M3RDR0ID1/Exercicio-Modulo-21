import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Book } from "./types/Book";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

const API_URL = "https://crudcrud.com/api/fbe11c23094e4cbdb00afb2e048f1a3e/livros";

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get<Book[]>(API_URL);
      setBooks(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros", error);
    }
  };

  const addBook = async (book: Book) => {
    try {
      const response = await axios.post<Book>(API_URL, book);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar livro", error);
    }
  };

  const deleteBook = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks(books.filter((b) => b._id !== id));
    } catch (error) {
      console.error("Erro ao remover livro", error);
    }
  };

  const toggleStatus = async (id: string, status: "Lido" | "Não lido") => {
  try {
    const book = books.find((b) => b._id === id);
    if (!book) return;

    const { _id, ...bookWithoutId } = book;
    const updatedBook = { ...bookWithoutId, status };

    await axios.put(`${API_URL}/${id}`, updatedBook);

    setBooks(books.map((b) => (b._id === id ? { ...b, status } : b)));
  } catch (error) {
    console.error("Erro ao atualizar status", error);
  }
};


  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Catálogo de Livros</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} onToggleStatus={toggleStatus} />
    </div>
  );
};

export default App;
