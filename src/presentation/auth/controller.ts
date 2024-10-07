import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

export const loginUser = async (req: Request, res: Response) => {
    const { id, password } = req.body;

    const user = await prisma.user.findFirst({
        where: { id, password }
    });

    if (!user)
    {
        return res.status(401).json({ error: 'Usuario no reconocido'});
    }
    else
    {
        return res.status(200).json({user});
    }
}