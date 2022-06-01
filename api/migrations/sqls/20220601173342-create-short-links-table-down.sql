DROP INDEX IF EXISTS short_links_user_id_idx;
ALTER TABLE short_links DROP CONSTRAINT IF EXISTS short_links_user_id_fkey;
DROP TABLE IF EXISTS short_links;
