import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  port: string | number;
  secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'secret'
};

const production: IConfig = {
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'secret'
};

const test: IConfig = {
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'secret'
};

const config: {
  [name: string]: IConfig;
} = {
  test,
  development,
  production
};

export default config[NODE_ENV];
