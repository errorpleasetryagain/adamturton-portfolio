# CV PDF Export Instructions

## Overview

The CV page at `/cv` serves a PDF version of Adam's CV for traditional recruiters and application systems that require file uploads.

**Current CV Source:** `~/Documents/Adam_Turton_Technology_Operations_Manager_CV.pdf.pages`

**Public PDF Location:** `/public/adam-turton-cv.pdf`

---

## Exporting CV from Apple Pages to PDF

### Method 1: Direct Export (Recommended)

1. **Open the CV in Pages**
   - Navigate to `~/Documents/`
   - Double-click `Adam_Turton_Technology_Operations_Manager_CV.pdf.pages`

2. **Export to PDF**
   - Go to `File` → `Export To` → `PDF...`
   - In the export dialog:
     - **Image Quality:** Best
     - **Include:** All pages
   - Click `Next...`

3. **Save the PDF**
   - Filename: `adam-turton-cv.pdf`
   - Location: Save to Desktop temporarily
   - Click `Export`

4. **Copy to Portfolio**
   ```bash
   cp ~/Desktop/adam-turton-cv.pdf /Users/adamturton/portfolio/public/adam-turton-cv.pdf
   ```

5. **Verify the file**
   ```bash
   ls -lh /Users/adamturton/portfolio/public/adam-turton-cv.pdf
   ```

---

### Method 2: Command Line Export (if Pages CLI is available)

```bash
# Export using Pages command line (macOS only)
osascript -e 'tell application "Pages" to export document 1 to file "/Users/adamturton/Desktop/adam-turton-cv.pdf" as PDF'
```

Then copy to the public folder:
```bash
cp ~/Desktop/adam-turton-cv.pdf /Users/adamturton/portfolio/public/adam-turton-cv.pdf
```

---

### Method 3: Using the cv_extract Folder

If you've already extracted the Pages document:

1. The extracted contents are at `~/Documents/cv_extract/`
2. Use a conversion tool like `pandoc` or open in Pages and export

---

## File Requirements

- **Format:** PDF (Portable Document Format)
- **Filename:** `adam-turton-cv.pdf` (lowercase, hyphenated)
- **Location:** `/Users/adamturton/portfolio/public/adam-turton-cv.pdf`
- **Size:** Keep under 2MB for fast loading
- **Pages:** 2 pages maximum (recruiter attention span)

---

## Updating the CV

When the CV content changes:

1. **Edit in Pages**
   - Open `Adam_Turton_Technology_Operations_Manager_CV.pdf.pages`
   - Make your changes
   - Save (`Cmd + S`)

2. **Re-export to PDF**
   - Follow Method 1 above
   - Overwrite the existing PDF in `/public/`

3. **Update the CV page if needed**
   - Edit `/src/app/cv/page.tsx` if highlights or experience preview need updating
   - Update the "Updated [Date]" text in the download section

4. **Commit changes**
   ```bash
   cd /Users/adamturton/portfolio
   git add public/adam-turton-cv.pdf src/app/cv/page.tsx
   git commit -m "Update CV PDF and page"
   git push
   ```

---

## Troubleshooting

### PDF not downloading
- Check that the file exists: `ls -lh public/adam-turton-cv.pdf`
- Verify the filename matches exactly (case-sensitive)
- Clear browser cache and redeploy to Vercel

### File too large
- Open in Preview.app
- Go to `File` → `Export...`
- Choose `Quartz Filter` → `Reduce File Size`
- Save and replace in `/public/`

### Pages document won't open
- Ensure you're on macOS with Pages installed
- Try opening via iCloud.com if local Pages fails
- Consider maintaining a plain PDF version as backup

---

## Alternative: Generate PDF from HTML

If Pages is unavailable, you can generate a PDF from the CV page itself:

1. Open the CV page in a browser
2. Use browser's Print function (`Cmd + P`)
3. Select "Save as PDF" as the destination
4. Save to `/public/adam-turton-cv.pdf`

Note: This will look different from the Pages-designed CV.

---

## Last Updated

**PDF Version:** March 2025  
**Page Last Updated:** June 2026

---

## Quick Reference

```bash
# Check if PDF exists
ls -lh /Users/adamturton/portfolio/public/adam-turton-cv.pdf

# Copy new PDF after export
cp ~/Desktop/adam-turton-cv.pdf /Users/adamturton/portfolio/public/

# Verify deployment (after git push)
vercel --prod
```
