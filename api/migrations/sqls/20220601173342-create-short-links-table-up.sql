CREATE TABLE "short_links" (
  "id" serial8 PRIMARY KEY,
  "short_url" VARCHAR NOT NULL,
  "original_url" VARCHAR NOT NULL,
  "user_id" int8 NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL,
  "updated_at" TIMESTAMPTZ NOT NULL
);

ALTER TABLE short_links ADD CONSTRAINT short_links_user_id_fkey FOREIGN KEY (user_id) references users(id);
CREATE INDEX short_links_user_id_idx ON short_links(user_id);
