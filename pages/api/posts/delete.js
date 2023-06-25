import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        const post = await prisma.post.delete({
            where: { id: Number(id) },
        });
        res.json(post);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}