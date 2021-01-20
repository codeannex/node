import { Request, Response } from 'express';

const example = (express: any, ioc: any) => {
  let router = express.Router();

  return router.post(
    '/example', 
    async (req: Request, res: Response) => {
      const data = await ioc.Example.create();

      res.status(201).send(data);
    }
  );
}; 

export default example;
