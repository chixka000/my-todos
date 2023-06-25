import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const post = await prisma.post.create({
      data: req.body,
    });
    res.json(post);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}