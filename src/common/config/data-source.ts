import { DataSource, DataSourceOptions } from 'typeorm';

import TypeOrmConfig from '@bookstore/common/config/typeorm.config';
import { join } from 'path';

const dataSource = new DataSource({
  ...(TypeOrmConfig() as DataSourceOptions),
  migrations: [join(__dirname, '../migrations/*.ts')],
  entities: ['../../**/adapter/out/persistence/*.schema.ts'],
});

export default dataSource;
