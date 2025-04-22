import * as dotenv from 'dotenv';
import * as joi from 'joi';

dotenv.config();

interface EnvVars {
  PORT: number;
  MS_USER_HOST: string;
  MS_USER_PORT: number;
  MS_PRODUCT_HOST: string;
  MS_PRODUCT_PORT: number;
  MS_INVOICE_HOST: string;
  MS_INVOICE_PORT: number;
}

const schema = joi.object({
  PORT: joi.number().required(),
  MS_USER_HOST: joi.string().required(),
  MS_USER_PORT: joi.number().required(),
  MS_PRODUCT_HOST: joi.string().required(),
  MS_PRODUCT_PORT: joi.number().required(),
  MS_INVOICE_HOST: joi.string().required(),
  MS_INVOICE_PORT: joi.number().required(),
}).unknown(true);

const { error, value } = schema.validate(process.env);
if (error) throw new Error(`Config validation error: ${error.message}`);

const env: EnvVars = value;
export const envs = {
  PORT: env.PORT,
  MS: {
    USER: { host: env.MS_USER_HOST, port: env.MS_USER_PORT },
    PRODUCT: { host: env.MS_PRODUCT_HOST, port: env.MS_PRODUCT_PORT },
    INVOICE: { host: env.MS_INVOICE_HOST, port: env.MS_INVOICE_PORT },
  },
};