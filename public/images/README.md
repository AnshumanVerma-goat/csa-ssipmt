# Image Assets

This folder contains all images for the CSA SSIPMT website.

## Folder Structure

```
public/images/
├── institute/       # Institute building photos, campus images
├── events/         # Event photos and banners
├── gallery/        # Gallery images from various activities
└── faculty/        # Faculty member photos
```

## How to Add Images

1. **Institute Photos**: Place main building, campus, or lab photos in `institute/`
   - Example: `college-building.jpg`, `computer-lab.jpg`, `campus-front.jpg`

2. **Event Images**: Add event banners and photos in `events/`
   - Example: `tech-fest-2025.jpg`, `coding-competition.jpg`

3. **Gallery Photos**: Add gallery images in `gallery/`
   - Example: `workshop-ml.jpg`, `prize-distribution.jpg`

4. **Faculty Photos**: Add faculty member photos in `faculty/`
   - Example: `dr-john-doe.jpg`, `prof-jane-smith.jpg`

## Usage in Code

```tsx
// Institute photo
<img src="/images/institute/college-building.jpg" alt="SSIPMT Building" />

// Event photo
<img src="/images/events/tech-fest-2025.jpg" alt="Tech Fest 2025" />

// Gallery photo
<img src="/images/gallery/workshop-ml.jpg" alt="ML Workshop" />

// Faculty photo
<img src="/images/faculty/dr-john-doe.jpg" alt="Dr. John Doe" />
```

## Recommended Image Formats

- **Format**: JPG for photos, PNG for logos/graphics with transparency
- **Size**: Max 2MB per image for optimal loading
- **Dimensions**: 
  - Hero images: 1920x1080px
  - Card images: 800x600px
  - Faculty photos: 400x400px (square)
  - Thumbnails: 300x200px

## Image Optimization

Before uploading, optimize images using:
- [TinyPNG](https://tinypng.com/) - For compression
- [Squoosh](https://squoosh.app/) - For format conversion
- Online tools to reduce file size without quality loss
