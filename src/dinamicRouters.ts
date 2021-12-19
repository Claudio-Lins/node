import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

server.get('/noticias/:slug', (req: Request, res: Response) => {
  let slug = req.params.slug
  res.send(`Notícia: ${slug}`);
});

server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
  let origem = req.params.origem
  let destino = req.params.destino
  // let {origem, destino} = req.params
  res.send(`Procurando voos de: ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});

server.listen(3000, () => {
  try {
    console.log('Server is running on port 3000');
  } catch (error) {
    console.log(error);
  }
});
