// app/book/create/page.tsx
"use client";

import { createBook } from "@/app/(main)/book/actions";
import BookForm from "@/app/(main)/book/BookForm"; // adjust path
import { BookValues } from "@/lib/validation";

export default function CreateBookPage() {
  const handleSubmit = async (data: BookValues) => {
    // Make sure data is a plain object
    const plainData = {
      title: data.title,
      author: data.author,
      description: data.description,
      publishYear: data.publishYear,
      price: data.price
    };
    
    await createBook(plainData);
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}