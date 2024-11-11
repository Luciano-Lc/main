// actions.ts
'use server'

import { updateBook } from "../../actions";

export async function updateBookAction(id: string, values: any) {
  await updateBook(id, values);
}