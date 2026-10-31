# Al Ezz Oud — Customer Service Daily Checklist

Static web app (GitHub Pages) backed by Supabase (Auth + Postgres with RLS + Storage).
The page contains no business data; tasks, KPIs and records load only after sign-in.
Access is enforced server-side by Row Level Security; the key in `config.js` is the public anon key.
