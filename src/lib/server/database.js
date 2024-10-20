
import postgres from 'postgres'

// see env variables in .env
import { DATABASE_URL } from '$env/dynamic/private';


const sql = postgres(DATABASE_URL);

export default sql;
