import { drizzle } from "drizzle-orm/libsql";

import env from "~/lib/env";

import * as schema from "./schema";

export const db = drizzle({ connection: {
  url: env.TURSO_CONNECTION_URL,
  authToken: env.TURSO_AUTH_TOKEN,
}, casing: "snake_case", schema });

export default db;
