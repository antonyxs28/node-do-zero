import { sql } from "./db.js";

const tables = await sql`SELECT * FROM videos`;

console.log(tables);
process.exit(); 