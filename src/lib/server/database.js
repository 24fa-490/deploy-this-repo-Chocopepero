import * as env from '$env/dynamic/private'; // Import all dynamic environment variables

const DATABASE_URL = env.DATABASE_URL; // Access the DATABASE_URL from the environment

// Use it for initializing PostgreSQL connection
import postgres from 'postgres';

const sql = postgres(DATABASE_URL); // Initialize PostgreSQL connection using DATABASE_URL

export default sql;
