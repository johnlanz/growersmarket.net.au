import { NextApiRequest, NextApiResponse } from 'next';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export { initMiddleware };
