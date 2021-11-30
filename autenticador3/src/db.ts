import { Pool } from 'pg';

const connectionString = 'postgres://ylldhajf:ADSLl7YvxyVWxjLnQg7kRmow_2v-wBaj@kesavan.db.elephantsql.com/ylldhajf';
const db = new Pool({ connectionString });

export default db;