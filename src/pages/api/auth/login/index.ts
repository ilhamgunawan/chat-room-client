import type { NextApiRequest, NextApiResponse } from 'next';

import { USERS } from '@/data/user';

const message = {
  notFound: 'Not found',
  userPasswordNotMatch: 'User or password not match',
  unauthorized: 'Unauthorized',
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { body } = req;
      if (body.username && body.password) {
        const { username, password } = body;

        const user = USERS.find((u) => u.username === username);

        if (user) {
          if (user.password === password) {
            res.status(200).send({ data: user });
          } else {
            throw new Error(message.userPasswordNotMatch);
          }
        } else {
          throw new Error(message.userPasswordNotMatch);
        }
      } else {
        throw new Error(message.userPasswordNotMatch);
      }
    } else {
      throw new Error(message.notFound);
    }
  } catch (err) {
    if (err instanceof Error) {
      const errMessage = err?.message || message.unauthorized;
      const status = (() => {
        if (
          errMessage === message.unauthorized ||
          errMessage === message.userPasswordNotMatch
        ) {
          return 403;
        }

        if (errMessage === message.notFound) {
          return 404;
        }

        return 500;
      })();
      res.status(status).send({ message: errMessage });
    }
    res.status(404).send({ message: message.notFound });
  }
}
