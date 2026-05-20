# Admin Panel Guide — Ethiopian Diaspora Service

## Access
- **URL:** `https://www.ethiopiandiasporaservice.gov.et/admin`
- **Login:** edseds766@gmail.com / Eds123eds

## Sections

### Dashboard
Shows total counts of news articles and events. Quick-action buttons to add new items.

### Managing News

**Add news:** `/admin/news/new`
- **Title** — required, max 200 characters
- **Description** — brief summary (shows on homepage cards)
- **Content** — full article text (optional, can be added later)
- **Category** — select from dropdown (Policy, Event, Technology, etc.)
- **Date** — defaults to today
- **Image** — **required**. Click "Upload Image" to upload. Supported formats: JPEG, PNG, WebP, GIF. Max size: 10MB.
- **Featured** — check this for articles that should appear in the hero carousel

**Edit news:** Click the pencil icon on any news item in the list

**Delete news:** Click the trash icon (confirmation required)

### Managing Events

Same flow as news, plus a **Location** field for the venue/address.

## Notes

- **Instant publishing:** Changes appear on the live site immediately (no redeploy needed)
- **Image uploads:** Images are stored on Cloudinary. Accepted formats: JPEG, PNG, WebP, GIF. Max 10MB.
- **Seed data:** The website ships with pre-loaded content. Admin-created items appear alongside seed data. If an admin item has the same title as a seed item, the admin version takes precedence.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't log in | Check email/password. After 5 failed attempts, login is blocked for 15 minutes. |
| Image upload fails | Check file type (JPEG/PNG/WebP/GIF) and size (under 10MB). |
| News not showing on front page | Wait a few seconds and refresh. Pages load live data on each visit. |
| "Server misconfigured" error | Contact the developer — environment variables need to be set. |

## Security
- Session expires after 7 days of inactivity
- Always sign out when done (click "Sign Out" in sidebar)
- Do not share the login credentials
