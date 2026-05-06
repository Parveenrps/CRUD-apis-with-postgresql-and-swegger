import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
app.use(express.json());

import languageRouter from './routes/language.routes.js';
import countryRoutes from './routes/country.routes.js';
import stateRoutes from './routes/state.routes.js'
import districtRoutes from './routes/district.routes.js'
import swaggerSpec from './config/swagger.js';
import swaggerUi from 'swagger-ui-express'

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
      persistAuthorization: true,
      tryItOutEnabled: true
    }
  })
);

app.use('/api/v1/languages', languageRouter);
app.use('/api/v1/countries', countryRoutes);
app.use('/api/v1/states', stateRoutes);
app.use('/api/v1/districts', districtRoutes)

export default app;