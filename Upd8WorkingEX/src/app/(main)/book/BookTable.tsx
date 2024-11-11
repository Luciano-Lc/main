import { Book } from "@prisma/client";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import Link from "next/link";

interface BookTableProps {
  books: Book[];
}

export default function BookTable({ books }: BookTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>
              <Link href={`/book/${book.id}`} className="text-blue-600 hover:underline mr-4">
                View
              </Link>
              <Link href={`/book/${book.id}/update`} className="text-blue-600 hover:underline">
                Edit
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
