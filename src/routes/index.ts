import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('home')
});

router.get('/contato', (req: Request, res: Response) => {
  res.send('Formulário de contato!');
});

router.get('/sobre', (req: Request, res: Response) => {
  res.send('Página sobre!');
});


export default router;