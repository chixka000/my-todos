import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT' || req.method === 'PATCH') {
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(post);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}