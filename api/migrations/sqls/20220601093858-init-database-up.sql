CREATE TABLE "users" (
  "id" serial8 PRIMARY KEY,
  "uid" uuid NOT NULL DEFAULT gen_random_uuid(),
  "name" VARCHAR NOT NULL,
  "email" VARCHAR NOT NULL,
  "password" VARCHAR NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL,
  "updated_at" TIMESTAMPTZ NOT NULL
);

CREATE UNIQUE INDEX users_unique_uid_idx on users(uid);
CREATE UNIQUE INDEX users_unique_lower_email_idx on users(lower(email));