import { ApiHandler } from "@/lib/api-handler";

const handler = new ApiHandler("courses", "id");

export async function GET(req: Request) {
  return await handler.getAll(req);
}

export async function POST(req: Request) {
  return await handler.create(req);
}
