"use server"

import { query } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { randomUUID } from "crypto"

export async function createNotice(formData: FormData) {
  const title = formData.get("title") as string
  const content = formData.get("content") as string
  
  if (!title) {
    return { error: "Title is required" }
  }

  try {
    const id = randomUUID()
    await query(
      'INSERT INTO "Notice" (id, title, content, date, "createdAt", "updatedAt") VALUES ($1, $2, $3, NOW(), NOW(), NOW())',
      [id, title, content]
    )
    revalidatePath("/notices")
    revalidatePath("/")
    return { success: true }
  } catch (e) {
    console.error(e)
    return { error: "Failed to create notice" }
  }
}

export async function deleteNotice(id: string) {
  try {
    await query('DELETE FROM "Notice" WHERE id = $1', [id])
    revalidatePath("/notices")
    revalidatePath("/")
    return { success: true }
  } catch (e) {
    console.error(e)
    return { error: "Failed to delete notice" }
  }
}
