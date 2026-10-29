# OnTheWheels — studio + brand portals

Astro static site for OnTheWheels Hospitality LLP (Hyderabad).

## Share the right link

Clients should not need the full studio. Use **portals**:

| Audience | Share this | What they see |
|----------|------------|---------------|
| Studio / partners / hires | `/` | OnTheWheels home, about, why, future, doors |
| Cultural Crossroads clients | **`/cc`** | CC-only chrome — about, weddings→colleges→corporates, rentals, contact. No 18g, no careers, no studio nav. |
| 18g clients / waitlist | **`/18g`** | 18g-only chrome — truck route + contact. No CC, no careers. |

Examples after you deploy `https://yourdomain.com`:

- CC host: `https://yourdomain.com/cc`
- 18g: `https://yourdomain.com/18g`

### Optional custom domains later

Point vanity hosts at the same Vercel project, then redirect:

- `cc.yourdomain.com` → `https://yourdomain.com/cc`
- `18g.yourdomain.com` → `https://yourdomain.com/18g`

No login required — separate URLs are enough for v1 client sharing.

## Routes

| Path | Role |
|------|------|
| `/` | Studio (OTW nav) |
| `/cc` | **CC portal** |
| `/18g` | **18g portal** |
| `/careers` | Studio careers |
| `/ventures` | Redirects → `/cc` |

## Develop

```bash
cd site
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Deploy

Vercel project root = `site/`. Build `npm run build`, output `dist`.

## Contact (interim)

- Email: `onthewheels2k26@gmail.com`
- Phone: `96407 35454`
- Instagram: set in `src/data/site.ts` when ready

## Open fields before public launch

1. Domain + DNS
2. Instagram handles
3. Confirm public email/phone
4. Optional: `cc.` / `18g.` subdomains → portal paths
5. Gallery rights for CC stills

**Not required:** auth, payments, CMS (mailto is v1).
