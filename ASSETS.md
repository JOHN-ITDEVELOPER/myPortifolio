# Assets Manifest

This file documents all required assets for the John Njenga portfolio website.

## Directory Structure

```
assets/
├── John_Njenga_CV.pdf              [CV Download]
├── john-profile.jpg                [Profile Photo]
├── kenswed-dashboard.png           [Project 1 Image]
├── password-manager.png            [Project 2 Image]
├── atm-system.png                  [Project 3 Image]
├── mtaanifix.png                   [Project 4 Image]
├── speedtest.png                   [Project 5 Image]
├── client-portfolio.png            [Project 6 Image]
└── ai-attendance.png               [Project 7 Image]
```

## File Specifications

### Documents

**File**: `John_Njenga_CV.pdf`
- **Type**: PDF Document
- **Purpose**: CV download from hero and contact sections
- **Size**: Recommended < 5MB
- **Content**: Resume/CV with work experience, education, skills
- **Status**: ⚠️ Placeholder – Replace with actual CV

### Profile Photo

**File**: `john-profile.jpg`
- **Type**: JPEG Image (or PNG)
- **Purpose**: Hero section profile image
- **Dimensions**: Minimum 300×300px (square)
- **Size**: < 200KB
- **Content**: Professional headshot/photo
- **Status**: ⚠️ Placeholder – Add profile photo
- **Notes**: Displayed as circular image with pink border

### Project Images

**File**: `kenswed-dashboard.png`
- **Type**: PNG Image (or JPEG)
- **Purpose**: Kenswed — School Management System project thumbnail
- **Dimensions**: 600×400px recommended
- **Size**: < 500KB
- **Content**: Screenshot of dashboard, admin interface, or results entry
- **Status**: ⚠️ Placeholder – Add project screenshot
- **Notes**: Used in project card and modal

**File**: `password-manager.png`
- **Type**: PNG Image (or JPEG)
- **Purpose**: Password Manager desktop app project thumbnail
- **Dimensions**: 600×400px recommended
- **Size**: < 500KB
- **Content**: Screenshot of application window with UI
- **Status**: ⚠️ Placeholder – Add project screenshot
- **Notes**: Used in project card and modal

**File**: `atm-system.png`
- **Type**: PNG Image (or JPEG)
- **Purpose**: ATM System project thumbnail
- **Dimensions**: 600×400px recommended
- **Size**: < 500KB
- **Content**: Screenshot of ATM application interface
- **Status**: ⚠️ Placeholder – Add project screenshot
- **Notes**: Used in project card and modal

**File**: `mtaanifix.png`
- **Type**: PNG Image (or JPEG)
- **Purpose**: MtaaniFix marketplace prototype project thumbnail
- **Dimensions**: 600×400px recommended
- **Size**: < 500KB
- **Content**: Screenshot of marketplace interface/landing page (Laravel + Blade)
- **Status**: ⚠️ Placeholder – Add project screenshot
- **Notes**: Used in project card and modal

**File**: `speedtest.png`
- **Type**: PNG Image (or JPEG)
- **Purpose**: Speed Test application project thumbnail
- **Dimensions**: 600×400px recommended
- **Size**: < 500KB
- **Content**: Screenshot of speed test interface with results
- **Status**: ⚠️ Placeholder – Add project screenshot
- **Notes**: Used in project card and modal

**File**: `client-portfolio.png`
- **Type**: PNG Image (or JPEG)
- **Purpose**: Client Portfolio Website project thumbnail
- **Dimensions**: 600×400px recommended
- **Size**: < 500KB
- **Content**: Screenshot of portfolio website homepage
- **Status**: ⚠️ Placeholder – Add project screenshot
- **Notes**: Used in project card and modal

**File**: `ai-attendance.png`
- **Type**: PNG Image (or JPEG)
- **Purpose**: AI Attendance System project thumbnail
- **Dimensions**: 600×400px recommended
- **Size**: < 500KB
- **Content**: Screenshot of facial recognition interface (React + TypeScript)
- **Status**: ⚠️ Placeholder – Add project screenshot
- **Notes**: Used in project card and modal

## Image Guidelines

### Quality
- Resolution: Minimum 600×400px for project cards
- Quality: Balanced (80% compression OK)
- Format: PNG for screenshots, JPEG for photos
- File Size: < 500KB each (aim for 100-300KB)

### Optimization
Use one of these tools to compress images:
- **Online**: [TinyPNG.com](https://tinypng.com), [Imagemin.io](https://imagemin.io)
- **CLI**: ImageMagick, pngquant, jpegoptim
- **VS Code**: Compress Images extension

### Usage
Images are referenced in two places:
1. `index.html` (project cards, hero section)
2. `index.js` (modal, automatically loads from data object)

All images use `loading="lazy"` for performance (except hero profile which uses `loading="eager"`).

## Adding New Assets

### Steps:
1. Add file to `assets/` folder
2. Update path in `index.html` if adding new section
3. Update `index.js` if adding new project
4. Test image loads in browser (F12 → Network tab)
5. Update this manifest

### Example (Adding 5th project):
```html
<!-- In index.html -->
<img src="assets/new-project.png" alt="Description" loading="lazy">

<!-- In index.js -->
newProject: {
    title: 'Project Name',
    image: 'assets/new-project.png',
    // ... other data
}
```

## Placeholder Status

❌ **Still Need**:
- [ ] `John_Njenga_CV.pdf` – Real CV file
- [ ] `john-profile.jpg` – Real profile photo (300×300px min)
- [ ] `kenswed-dashboard.png` – Real project screenshot
- [ ] `password-manager.png` – Real project screenshot
- [ ] `atm-system.png` – Real project screenshot
- [ ] `mtaanifix.png` – Real project screenshot
- [ ] `speedtest.png` – Real project screenshot
- [ ] `client-portfolio.png` – Real project screenshot
- [ ] `ai-attendance.png` – Real project screenshot

✅ **Ready**:
- [x] Directory structure
- [x] File placeholders
- [x] HTML references
- [x] JS data structure

## File Size Summary

| File | Size | Type |
|------|------|------|
| John_Njenga_CV.pdf | varies | Document |
| john-profile.jpg | ~150KB | Image |
| kenswed-dashboard.png | ~200KB | Image |
| password-manager.png | ~200KB | Image |
| atm-system.png | ~200KB | Image |
| mtaanifix.png | ~200KB | Image |
| speedtest.png | ~200KB | Image |
| client-portfolio.png | ~200KB | Image |
| ai-attendance.png | ~200KB | Image |
| **Total** | **~1.7MB** | - |

## CDN Alternatives (Optional)

If you don't want to host images locally, consider:
- **GitHub**: Push to repo, use raw GitHub URL
- **Cloudinary**: Free image hosting + optimization
- **Imgur**: Quick image hosting (no auth required)
- **AWS S3**: Scalable, pay-per-use

Example CDN URL in HTML:
```html
<img src="https://your-cdns3.com/kenswed-dashboard.png" alt="...">
```

## Backup & Recovery

### Keep Backup Copies
- Store high-res originals elsewhere (Google Drive, OneDrive)
- Maintain version control via Git
- Tag releases with assets snapshot

### Git Tracking
Since images can be large, consider:
```bash
# Using Git LFS for large files
git lfs track "assets/*.png"
```

## Contact & Attribution

If using external placeholder images temporarily:
- Credit the source in README
- Replace with original content before deployment
- Ensure license compliance

**Creator**: John Njenga  
**Portfolio**: https://johnnjenga-portfolio.com  
**Last Updated**: February 12, 2026
