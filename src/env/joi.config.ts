import * as Joi from 'joi';

export interface EnvironmentSetup {
  APP_PORT: number;
  APP_NAME: string;
  METRICS_PORT: string;
  DATABASE_URL: string;
  RABBIT_URI: string;
}

export const JoiValidationSchema = Joi.object<EnvironmentSetup>({
  // --------------------------------------------------------------
  APP_PORT: Joi.number().required().min(1).max(65535),
  APP_NAME: Joi.string().required(),
  // --------------------------------------------------------------
  METRICS_PORT: Joi.number().required().min(1).max(65535),
  // --------------------------------------------------------------
  DATABASE_URL: Joi.string().required(),
  // --------------------------------------------------------------
  RABBIT_URI: Joi.string().required(),
});
