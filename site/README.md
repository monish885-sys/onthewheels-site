# OnTheWheels — studio + brand portals

Astro static site for OnTheWheels Hospitality LLP (Hyderabad).

## Live now (free Vercel)

| Audience | Share this |
|----------|------------|
| Studio / partners / hires | https://onthewheels-site.vercel.app/ |
| Cultural Crossroads clients | https://onthewheels-site.vercel.app/cc |
| 18g clients / waitlist | https://onthewheels-site.vercel.app/18g |

After `onthewheels.in` DNS is live, use the same paths on that host instead.

## Share the right link

Clients should not need the full studio. Use **portals**:

| Audience | Share this | What they see |
|----------|------------|---------------|
| Studio / partners / hires | `/` | OnTheWheels home, about, why, future, doors |
| Cultural Crossroads clients | **`/cc`** | CC-only chrome — about, weddings→colleges→corporates, rentals, contact. No 18g, no careers, no studio nav. |
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

1. Buy **`onthewheels.in`** on [Porkbun](https://porkbun.com/checkout/search?q=onthewheels.in) (~$7.83/yr). Registrant = **OnTheWheels Hospitality LLP** with a real address (NIXI can suspend bad WHOIS). Skip hosting/email upsells.
2. At Porkbun → domain → **Nameservers**, set:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Domains are already attached on Vercel (`onthewheels.in` + `www`). Wait for SSL (minutes–48h).
4. Check: `npx vercel domains verify onthewheels.in`

## Contact (interim)

- Email: `onthewheels2k26@gmail.com`
- Phone: `96407 35454`
- Instagram: set in `src/data/site.ts` when ready

## Open fields before custom-domain launch

1. Finish Porkbun purchase + nameservers (above)
2. Instagram handles
3. Confirm public email/phone
4. Optional: `cc.` / `18g.` subdomains → portal paths
5. Gallery rights for CC stills

**Not required:** auth, payments, CMS (mailto is v1).
