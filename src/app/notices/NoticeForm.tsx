"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createNotice } from "./actions"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Notice"}
    </Button>
  )
}

export function NoticeForm() {
  const [open, setOpen] = useState(false)

  async function action(formData: FormData) {
    const res = await createNotice(formData)
    if (res?.error) {
      toast.error(res.error)
    } else {
      toast.success("Notice created successfully")
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button>Add Notice</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Notice</DialogTitle>
        </DialogHeader>
        <form action={action} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" required placeholder="Enter notice title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" placeholder="Enter notice details (optional)" />
          </div>
          <SubmitButton />
        </form>
      </DialogContent>
    </Dialog>
  )
}
