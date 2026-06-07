# VPS Deployment Guide

## Production Build Commands

Run these commands on the VPS from the project directory:

```bash
npm install
npm run lint
npm run build
npm start
```

The app runs on port `3000` by default. Make sure the server uses Node.js 20+ for Next.js 16.

## PM2 Deployment

Install PM2 globally if it is not available:

```bash
npm install -g pm2
```

Start and persist the app:

```bash
pm2 start npm --name mobifonehcm -- start
pm2 save
pm2 startup
```

Useful maintenance commands:

```bash
pm2 status
pm2 logs mobifonehcm
pm2 restart mobifonehcm
```

## Nginx Reverse Proxy Config

Create an Nginx server block for `mobifonehcm.com.vn`:

```nginx
server {
    listen 80;
    server_name mobifonehcm.com.vn www.mobifonehcm.com.vn;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Validate and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## SSL With Certbot

Install Certbot for Nginx, then issue the certificate:

```bash
sudo certbot --nginx -d mobifonehcm.com.vn -d www.mobifonehcm.com.vn
```

Confirm renewal is active:

```bash
sudo certbot renew --dry-run
```

## Environment Variables

No required runtime environment variables are currently defined in the app.

If future API keys or private configuration are added, keep them in `.env.production` on the VPS and never commit secrets to git.

## Sitemap And Robots Verification

After deployment, verify these URLs return HTTP 200:

```text
https://mobifonehcm.com.vn/sitemap.xml
https://mobifonehcm.com.vn/robots.txt
```

Robots should allow crawling and point to:

```text
Sitemap: https://mobifonehcm.com.vn/sitemap.xml
```

The sitemap should include `/`, `/giai-phap`, and all 12 product detail pages. Confirm `/giai-phap/truyen-thanh-thong-minh` is present and no legacy product-12 route is present.

## Google Search Console Checklist

1. Verify the domain property for `mobifonehcm.com.vn`.
2. Submit `https://mobifonehcm.com.vn/sitemap.xml`.
3. Inspect `/`.
4. Inspect `/giai-phap`.
5. Inspect key product pages such as `/giai-phap/mobifone-eoffice`, `/giai-phap/mobifone-ca`, `/giai-phap/mobifone-invoice`, `/giai-phap/cloud-contact-center-3c`, and `/giai-phap/truyen-thanh-thong-minh`.
6. Monitor indexing status.
7. Monitor search queries, impressions, CTR, and pages with coverage warnings.

## Post-Deploy Test Checklist

Check these routes in the browser:

```text
/
/giai-phap
/giai-phap/loa-than-tai-mobifone
/giai-phap/mobifone-ca
/giai-phap/mobifone-ims
/giai-phap/mobifone-eoffice
/giai-phap/smart-sale-1erp
/giai-phap/mobifone-econtract
/giai-phap/mobifone-1pos
/giai-phap/mobifone-invoice
/giai-phap/mobifone-ework
/giai-phap/mobifone-hrm
/giai-phap/cloud-contact-center-3c
/giai-phap/truyen-thanh-thong-minh
/sitemap.xml
/robots.txt
```

Also verify:

- All product cards link internally to `/giai-phap/[slug]`.
- All consultation CTAs open `https://zalo.me/84902931119` in a new tab.
- Canonical URLs use `https://mobifonehcm.com.vn`.
- Open Graph image resolves at `/opengraph-image`.
- There is no legacy product-12 route in sitemap or navigation.
- Mobile layout has no horizontal overflow and the floating Zalo button does not hide primary actions.
