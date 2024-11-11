import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import BookForm from "../../BookForm";
import { updateBookAction } from "./actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function UpdateBookPage({
  params: { id },
}: {
  params: { id: string };
}) {
  let error = null;
  let book = null;

  try {
    const { user } = await validateRequest();
    if (!user) {
      error = "You must be logged in to edit books";
      return;
    }

    book = await prisma.book.findUnique({
      where: { id },
    });

    if (!book) {
      error = "Book not found";
      return;
    }

    if (book.userId !== user.id) {
      error = "You don't have permission to edit this book";
      return;
    }
  } catch (e) {
    error = "An error occurred while loading the book";
  }

  const boundAction = updateBookAction.bind(null, id);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6 flex items-center gap-2 hover:gap-3 transition-all"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Books
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Book</CardTitle>
        </CardHeader>
        <CardContent>
          {error ? (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <BookForm  action={boundAction} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}