import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { labResultValidationSchema } from 'validationSchema/lab-results';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.lab_result
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getLabResultById();
    case 'PUT':
      return updateLabResultById();
    case 'DELETE':
      return deleteLabResultById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLabResultById() {
    const data = await prisma.lab_result.findFirst(convertQueryToPrismaUtil(req.query, 'lab_result'));
    return res.status(200).json(data);
  }

  async function updateLabResultById() {
    await labResultValidationSchema.validate(req.body);
    const data = await prisma.lab_result.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteLabResultById() {
    const data = await prisma.lab_result.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
