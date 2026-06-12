# Sound Thesis — Cloudflare Pages Deployment

This is a static-export Next.js site optimized for Cloudflare Pages.

## Build settings (Cloudflare Pages dashboard)

- **Framework preset:** Next.js (static)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Root directory:** `site` (or the folder containing this README)

## Contact form / KV storage

Form submissions are saved to a Cloudflare KV namespace via the Pages Function in `functions/api/contact.ts`.

### One-time setup

1. In the Cloudflare dashboard, create a KV namespace (e.g. `CONTACT_SUBMISSIONS`).
2. Go to **Workers & Pages → your project → Settings → Functions → KV namespace bindings**.
3. Add a binding:
   - **Variable name:** `CONTACT_SUBMISSIONS`
   - **KV namespace:** the namespace you just created
4. Optionally update `wrangler.toml` with the namespace ID for local development.

### How it works

- The contact form posts to `/api/contact`.
- The function validates the fields, checks a honeypot, and stores the submission as JSON in KV.
- The key format is `submission:<ISO8601-timestamp>:<uuid>`.
- After a successful save, the user is redirected to `/contact/thanks/`.

You can view/export submissions in the dashboard under **Workers & Pages → your project → KV** or via Wrangler:

```bash
npx wrangler kv:key list --binding CONTACT_SUBMISSIONS
```

## Environment notes

- `next.config.ts` uses `output: "export"` so the site is fully static.
- Images are unoptimized for static export.
- `trailingSlash: true` keeps URLs consistent (`/contact/` instead of `/contact`).
