import express from 'express';
import helmet from 'helmet';
import { mainRouter } from './router/main.route';
import cors from 'cors';

const app = express()
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization",]
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))


app.use(mainRouter)

const PORT = process.env.PORT || 8080;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Servido rodando em ${BASE_URL}`);
})

