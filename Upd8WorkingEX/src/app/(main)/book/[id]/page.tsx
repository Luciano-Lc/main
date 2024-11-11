import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { updateBookAction } from "./actions";
import BookForm from "@/app/(main)/book/BookForm";

export default async function UpdateBookPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized");

  const book = await prisma.book.findUnique({
    where: { id },
  });

  if (!book || book.userId !== user.id) {
    throw new Error("Not found");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
      <BookForm book={book} action={updateBookAction.bind(null, id)} />
    </div>
  );
}