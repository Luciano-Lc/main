"use client";

import { BookValues, bookSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Book } from "@prisma/client";
import Textarea2 from "@/components/ui/textarea2";
import { useFormStatus as useFormStatus } from 'react-dom'

interface BookFormProps {
  action: (formData: FormData) => Promise<void>;
  book?: Book;
}

export default function BookForm({ action, book }: BookFormProps) {
  const { pending } = useFormStatus();
  const form = useForm<BookValues>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: book?.title ?? "",
      author: book?.author ?? "",
      description: book?.description ?? "",
      publishYear: book?.publishYear ?? new Date().getFullYear(),
      price: book?.price ? book.price.toString() : "",
    },
  });

  return (
    <Form {...form}>
      <form action={action} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} name="title" defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input {...field} name="author" defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} name="description" defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="publishYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Publish Year</FormLabel>
              <FormControl>
                <Input {...field} name="publishYear" defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input {...field} name="price" defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton type="submit" loading={pending}>
          {book ? "Update Book" : "Create Book"}
        </LoadingButton>
      </form>
    </Form>
  );
}