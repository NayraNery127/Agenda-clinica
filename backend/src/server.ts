import express from 'express';
import cors from 'cors';
import appointmentsRouter from './routes/appointments';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', appointmentsRouter);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT ?? 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

export default app;
