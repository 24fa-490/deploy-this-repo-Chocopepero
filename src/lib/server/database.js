
import * as env from '$env/dynamic/private';
import postgres from 'postgres'

// see env variables in .env
import { DATABASE_URL } from env.DATABASE_URL;


const sql = postgres(DATABASE_URL);

export default sql;
