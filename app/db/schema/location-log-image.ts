import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { locationLog } from "./location-log";

export const locationLogImage = sqliteTable("locationLogImage", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  locationLogId: int().notNull().references(() => locationLog.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
