/* eslint-disable node/no-process-env */
import z from "zod";

import tryParseEnv from "./try-parse-evn";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  TURSO_CONNECTION_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),

});

export type Env = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

export default EnvSchema.parse(process.env);
