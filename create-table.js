import { sql } from "./db.js";

// await sql`drop table if exists videos;`
// console.log("Tabela deletada com sucesso!");

await sql`
  CREATE TABLE IF NOT EXISTS videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL
  );
`;

console.log("Tabela criada com sucesso!");
process.exit();