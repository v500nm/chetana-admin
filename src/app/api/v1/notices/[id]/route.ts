import { ApiHandler } from "@/lib/api-handler";

const handler = new ApiHandler("notices", "id");

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  return await handler.getOne(resolvedParams.id);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  return await handler.update(resolvedParams.id, req);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  return await handler.delete(resolvedParams.id);
}
