import * as Joi from 'joi';

export const validationSchema = Joi.object({
  // Self
  NODE_ENV: Joi.string()
    .valid('development', 'homolog', 'staging', 'production', 'test')
    .default('production'),
  PORT: Joi.any().default(process.env.PORT || 3333),
  ADDRESS: Joi.string().hostname().default('0.0.0.0'),
  // Pagination
  PAGINATION_PAGE: Joi.number().default(1),
  PAGINATION_PAGE_SIZE: Joi.number().default(10),
  // Prisma
  PRISMA_DATABASE_URL: Joi.string().required(),
});
