/* eslint-disable node/no-process-env */
import z from "zod";

import tryParseEnv from "./try-parse-evn";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),

});

export type Env = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

export default EnvSchema.parse(process.env);
