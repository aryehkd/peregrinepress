# Webfonts

**Add your title font here:**

1. Unzip your webfont download.
2. Copy the font file(s) into this folder (`public/fonts/`).  
   You want the **.woff2** file (best) or **.woff**.
3. Rename the file to `title.woff2` (or `title.woff`), **or** open `src/app/globals.css` and update the `url('/fonts/...')` in the `@font-face` rule to match your filename.
4. In `globals.css`, set the `font-family` in that `@font-face` to your font’s real name (often in the zip’s CSS or font info).

After that, all headings and titles that use `font-serif` will use this font.
