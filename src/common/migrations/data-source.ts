import { DataSource, DataSourceOptions } from 'typeorm';

import TypeOrmConfig from '@bookstore/common/config/typeorm.config';

const dataSource = new DataSource({
  ...(TypeOrmConfig() as DataSourceOptions),
  migrations: ['./{!data-source}.ts'],
});

export default dataSource;
