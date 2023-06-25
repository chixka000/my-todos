import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: 'Method not allowed' });
  }
}