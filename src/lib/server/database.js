const DATABASE_URL = process.env.DATABASE_URL;

// Use it for initializing PostgreSQL connection
import postgres from 'postgres';

const sql = postgres(DATABASE_URL); // Initialize PostgreSQL connection using DATABASE_URL

export default sql;
