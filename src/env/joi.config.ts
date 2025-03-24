import * as Joi from 'joi';

export interface EnvironmentSetup {
  PORT: number;
  APP_NAME: string;
  METRICS_PORT: number;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_SYNC: boolean;
  DB_LOGGING: boolean;
  RABBIT_URI: string;
  RABBIT_USERS_EXCHANGE: string;
  RABBIT_USERS_EXCHANGE_TYPE: string;
  RABBIT_USER_CREATED_QUEUE: string;
  RABBIT_USER_CREATED_RK: string;
  RABBIT_USER_UPDATED_QUEUE: string;
  RABBIT_USER_UPDATED_RK: string;
  RABBIT_USER_ENABLED_QUEUE: string;
  RABBIT_USER_ENABLED_RK: string;
  RABBIT_USER_DISABLED_QUEUE: string;
  RABBIT_USER_DISABLED_RK: string;
  RABBIT_USER_DELETED_QUEUE: string;
  RABBIT_USER_DELETED_RK: string;
  RABBIT_USER_REGISTERED_QUEUE: string;
  RABBIT_USER_REGISTERED_RK: string;
  RABBIT_USER_VERIFIED_QUEUE: string;
  RABBIT_USER_VERIFIED_RK: string;
  RABBIT_USER_UNVERIFIED_QUEUE: string;
  RABBIT_USER_UNVERIFIED_RK: string;
  RABBIT_USER_LOGGED_QUEUE: string;
  RABBIT_USER_LOGGED_RK: string;
}

const {
  PORT,
  APP_NAME,
  METRICS_PORT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_SYNC,
  DB_LOGGING,
  RABBIT_URI,
  RABBIT_USERS_EXCHANGE,
  RABBIT_USERS_EXCHANGE_TYPE,
  RABBIT_USER_CREATED_QUEUE,
  RABBIT_USER_CREATED_RK,
  RABBIT_USER_UPDATED_QUEUE,
  RABBIT_USER_UPDATED_RK,
  RABBIT_USER_ENABLED_QUEUE,
  RABBIT_USER_ENABLED_RK,
  RABBIT_USER_DISABLED_QUEUE,
  RABBIT_USER_DISABLED_RK,
  RABBIT_USER_DELETED_QUEUE,
  RABBIT_USER_DELETED_RK,
  RABBIT_USER_REGISTERED_QUEUE,
  RABBIT_USER_REGISTERED_RK,
  RABBIT_USER_VERIFIED_QUEUE,
  RABBIT_USER_VERIFIED_RK,
  RABBIT_USER_UNVERIFIED_QUEUE,
  RABBIT_USER_UNVERIFIED_RK,
  RABBIT_USER_LOGGED_QUEUE,
  RABBIT_USER_LOGGED_RK,
} = process.env;

export const environment = () => ({
  PORT,
  APP_NAME,
  METRICS_PORT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_SYNC,
  DB_LOGGING,
  RABBIT_URI,
  RABBIT_USERS_EXCHANGE,
  RABBIT_USERS_EXCHANGE_TYPE,
  RABBIT_USER_CREATED_QUEUE,
  RABBIT_USER_CREATED_RK,
  RABBIT_USER_UPDATED_QUEUE,
  RABBIT_USER_UPDATED_RK,
  RABBIT_USER_ENABLED_QUEUE,
  RABBIT_USER_ENABLED_RK,
  RABBIT_USER_DISABLED_QUEUE,
  RABBIT_USER_DISABLED_RK,
  RABBIT_USER_DELETED_QUEUE,
  RABBIT_USER_DELETED_RK,
  RABBIT_USER_REGISTERED_QUEUE,
  RABBIT_USER_REGISTERED_RK,
  RABBIT_USER_VERIFIED_QUEUE,
  RABBIT_USER_VERIFIED_RK,
  RABBIT_USER_UNVERIFIED_QUEUE,
  RABBIT_USER_UNVERIFIED_RK,
  RABBIT_USER_LOGGED_QUEUE,
  RABBIT_USER_LOGGED_RK,
});

export const JoiValidationSchema = Joi.object<EnvironmentSetup>({
  // --------------------------------------------------------------
  PORT: Joi.number().required().min(1).max(65535),
  APP_NAME: Joi.string().required(),
  METRICS_PORT: Joi.number().required().min(1).max(65535),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required().min(1).max(65535),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_SYNC: Joi.boolean().truthy('true').falsy('false').sensitive().required(),
  DB_LOGGING: Joi.boolean()
    .truthy('true')
    .falsy('false')
    .sensitive()
    .required(),
  RABBIT_URI: Joi.string().required(),
  RABBIT_USERS_EXCHANGE: Joi.string().required(),
  RABBIT_USERS_EXCHANGE_TYPE: Joi.string().required(),
  RABBIT_USER_CREATED_QUEUE: Joi.string().required(),
  RABBIT_USER_CREATED_RK: Joi.string().required(),
  RABBIT_USER_UPDATED_QUEUE: Joi.string().required(),
  RABBIT_USER_UPDATED_RK: Joi.string().required(),
  RABBIT_USER_ENABLED_QUEUE: Joi.string().required(),
  RABBIT_USER_ENABLED_RK: Joi.string().required(),
  RABBIT_USER_DISABLED_QUEUE: Joi.string().required(),
  RABBIT_USER_DISABLED_RK: Joi.string().required(),
  RABBIT_USER_DELETED_QUEUE: Joi.string().required(),
  RABBIT_USER_DELETED_RK: Joi.string().required(),
  RABBIT_USER_REGISTERED_QUEUE: Joi.string().required(),
  RABBIT_USER_REGISTERED_RK: Joi.string().required(),
  RABBIT_USER_VERIFIED_QUEUE: Joi.string().required(),
  RABBIT_USER_VERIFIED_RK: Joi.string().required(),
  RABBIT_USER_UNVERIFIED_QUEUE: Joi.string().required(),
  RABBIT_USER_UNVERIFIED_RK: Joi.string().required(),
  RABBIT_USER_LOGGED_QUEUE: Joi.string().required(),
  RABBIT_USER_LOGGED_RK: Joi.string().required(),
});
