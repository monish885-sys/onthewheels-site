# OnTheWheels — studio + brand portals

Astro static site for OnTheWheels Hospitality LLP (Hyderabad).

## Live now (free Vercel)

| Audience | Share this |
|----------|------------|
| Studio / partners / hires | https://onthewheels-site.vercel.app/ |
| Cultural Crossroads clients | https://onthewheels-site.vercel.app/cc |
| 18g clients / waitlist | https://onthewheels-site.vercel.app/18g |

**Use the `.vercel.app` links above until DNS is fixed.**  
`onthewheels.in` is attached on Vercel but nameservers are still third-party / not resolving for many resolvers — the custom domain will look “down” even though the deploy is healthy. Point registrar NS to `ns1.vercel-dns.com` + `ns2.vercel-dns.com`, then wait for propagation.

## Share the right link

Clients should not need the full studio. Use **portals**:

| Audience | Share this | What they see |
|----------|------------|---------------|
| Studio / partners / hires | `/` | OnTheWheels home, about, why, future, doors |
| Cultural Crossroads clients | **`/cc`** | CC-only chrome — about, nights timeline (event posts), contact. No catalogue on this page. |
| CC Rentals clients | **`/cc/rentals`** | Catalogue only — premium pieces, filters, count request. |
| 18g clients / waitlist | **`/18g`** | 18g-only chrome — truck route + contact. No CC, no careers. |

### Optional vanity hosts later

Same Vercel project — free redirects:

- `cc.onthewheels.in` → `/cc`
- `18g.onthewheels.in` → `/18g`

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

- GitHub: https://github.com/monish885-sys/onthewheels-site
- Vercel project: `onthewheels-site` (Hobby / free)
- From this folder: `npx vercel --prod`

To auto-deploy on git push: install the [Vercel GitHub App](https://github.com/apps/vercel) for `monish885-sys/onthewheels-site`, then set **Root Directory** to `site` in project settings.

## Buy domain + DNS (one name only)

1. Buy **`onthewheels.in`** on [BigRock](https://www.bigrock.in/domain-registration/search.php?query=onthewheels.in) (INR / UPI — Indian registrar). Registrant = **OnTheWheels Hospitality LLP** with a real address (NIXI can suspend bad WHOIS). Skip hosting/email/SSL upsells — domain only.
2. In BigRock → domain → **Name Servers** (custom), set:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Domains are already attached on Vercel (`onthewheels.in` + `www`). Wait for SSL (minutes–48h).
4. Check: `npx vercel domains verify onthewheels.in`

## Contact (interim)

- Email: `onthewheels2k26@gmail.com`
- Phone: `96407 35454`
- CC Instagram: [@cultural.crossroads](https://www.instagram.com/cultural.crossroads/) (wired on `/cc`)
- Rentals IG: same grid for now — `@cc.rentals` is taken by an unrelated Melbourne account

### Adding more IG nights to the timeline

1. Export good-looking stills into `public/assets/events/<slug>/`
2. Add a beat in `src/data/cc-catalogue.ts` → `eventBeats`
3. Redeploy

Rentals catalogue is driven by `rentalItems` in the same file (from CC Rentals stock IG posts).

## Open fields before custom-domain launch

1. Finish Porkbun purchase + nameservers (above)
2. Claim a free rentals handle if you want it separate from `@cultural.crossroads`
3. Confirm public email/phone
4. Optional: `cc.` / `18g.` subdomains → portal paths
5. More event stills from IG into the timeline data file

**Not required:** auth, payments, CMS (mailto is v1).
