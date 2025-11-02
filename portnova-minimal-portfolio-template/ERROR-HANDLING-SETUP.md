# Error Page Setup Guide

## Files Created

1. **404.html** - Page Not Found error
2. **500.html** - Server Error page
3. **.htaccess** - Apache server configuration
4. **web.config** - IIS server configuration

## How It Works

### For Apache Servers (Most Common)
The `.htaccess` file automatically redirects:
- Missing pages → 404.html
- Server errors → 500.html

### For IIS/Windows Servers
The `web.config` file handles error redirects.

### For Local Testing
When testing locally, you need to:
1. Use a local server (not just opening HTML files)
2. Try accessing a non-existent page like: `http://localhost/nonexistent.html`

## Testing Error Pages

### Test 404 Error:
1. Start a local server in the project directory
2. Navigate to: `http://localhost:8000/fake-page.html`
3. Should show 404.html

### Test 500 Error:
1. Manually navigate to: `http://localhost:8000/500.html`
2. Or configure server to trigger 500 errors

## Local Server Options

### Python (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Node.js (http-server)
```bash
npm install -g http-server
http-server -p 8000
```

### PHP
```bash
php -S localhost:8000
```

### VS Code Extension
Install "Live Server" extension and click "Go Live"

## Deployment Notes

### When deploying to:

**Apache Hosting:**
- Upload `.htaccess` file
- Ensure mod_rewrite is enabled
- Error pages work automatically

**IIS Hosting:**
- Upload `web.config` file
- Error pages work automatically

**Nginx:**
Create nginx.conf with:
```nginx
error_page 404 /404.html;
error_page 500 /500.html;
```

**Static Hosts (Netlify, Vercel, GitHub Pages):**
Create `_redirects` or `netlify.toml`:
```
/* /404.html 404
```

## Verifying Setup

1. Check that 404.html and 500.html exist
2. Verify .htaccess or web.config is uploaded
3. Test by accessing non-existent URLs
4. Confirm error pages display correctly

## Common Issues

**Issue:** Error pages not showing
**Solution:** 
- Check server configuration
- Verify file paths are correct
- Ensure error pages are in root directory

**Issue:** Styling not loading on error pages
**Solution:**
- Use absolute paths: `/css/style.css`
- Or relative paths: `./css/style.css`

**Issue:** 404 shows default server page
**Solution:**
- Check .htaccess is uploaded
- Verify server supports custom error pages
- Contact hosting provider

## Footer Styling Fixed

The footer links (Privacy Policy | Terms | Cookies) now match the copyright text styling with proper hover effects.
