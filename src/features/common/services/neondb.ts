import { neon } from "@neondatabase/serverless";

export const NeonDBInstance = () => {
  const databaseUrl = process.env.NEON_DATABASE_URL;
  const sql = neon(databaseUrl);

  return sql;
};
