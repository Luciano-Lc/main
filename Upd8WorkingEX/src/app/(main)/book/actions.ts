"use server";

import { BookValues } from "@/lib/validation";
import prisma from "@/lib/prisma";
import { validateRequest } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import { updateBook } from "./actions";

export async function createBook(values: BookValues) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized");

  const book = await prisma.book.create({
    data: {
      ...values,
      userId: user.id,
    },
  });

  revalidatePath("/book");
  redirect("/book");
}

export async function updateBookAction(id: string, formData: FormData) {
  const values = {
    title: formData.get('title') as string,
    author: formData.get('author') as string,
    description: formData.get('description') as string,
    publishYear: parseInt(formData.get('publishYear') as string),
    price: parseFloat(formData.get('price') as string),
  };

  await updateBook(id, values);
}

export async function updateBook(bookId: string, values: BookValues) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized");

  const book = await prisma.book.findUnique({
    where: { id: bookId },
  });

  if (!book || book.userId !== user.id) {
    throw new Error("Not found");
  }

  await prisma.book.update({
    where: { id: bookId },
    data: values,
  });

  revalidatePath("/book");
  redirect("/book");
}

export async function deleteBook(bookId: string) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized");

  const book = await prisma.book.findUnique({
    where: { id: bookId },
  });

  if (!book || book.userId !== user.id) {
    throw new Error("Not found");
  }

  await prisma.book.delete({
    where: { id: bookId },
  });

  revalidatePath("/book");
  redirect("/book");
}
