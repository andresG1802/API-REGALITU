import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

export const getGroupByUserAdminId = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const groups = await prisma.group.findMany({
        where: { adminUserId: id}
    });

    if (!groups){
        return res.status(401).json({ error: 'grupos administrados no encontrados'});
    }
    else {
        return res.status(200).json({groups});
    }
}