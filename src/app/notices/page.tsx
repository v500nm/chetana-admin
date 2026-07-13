import { query } from "@/lib/db"
import { NoticeForm } from "./NoticeForm"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { deleteNotice } from "./actions"
import { Trash } from "lucide-react"

export default async function NoticesPage() {
  let notices: any[] = [];
  try {
    const res = await query('SELECT * FROM "Notice" ORDER BY "createdAt" DESC');
    notices = res.rows;
  } catch (error) {
    console.error("Failed to fetch notices:", error);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Notices & Announcements</h2>
        <NoticeForm />
      </div>
      
      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                  No notices found.
                </TableCell>
              </TableRow>
            ) : (
              notices.map((notice) => (
                <TableRow key={notice.id}>
                  <TableCell className="font-medium">{notice.title}</TableCell>
                  <TableCell className="max-w-[300px] truncate">{notice.content || "-"}</TableCell>
                  <TableCell>{new Date(notice.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <form action={async () => {
                      "use server";
                      await deleteNotice(notice.id)
                    }}>
                      <Button variant="ghost" size="icon" type="submit">
                        <Trash className="h-4 w-4 text-destructive" />
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
