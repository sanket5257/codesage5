# Assets Directory

This directory contains all static assets for the CodeSage website.

## Directory Structure

```
public/
├── images/          # Image files (PNG, JPG, SVG, WebP)
├── icons/           # Icon files and favicons
├── videos/          # Video files (MP4, WebM)
└── assets/          # Other assets (fonts, documents, etc.)
```

## Usage

### Images
Place your images in the `/public/images/` directory and reference them like:
```jsx
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg" 
  alt="Description" 
  width={400} 
  height={300} 
/>
```

### Icons
Place your icons in the `/public/icons/` directory and reference them like:
```jsx
<img src="/icons/your-icon.svg" alt="Icon" />
```

### Videos
Place your videos in the `/public/videos/` directory and reference them like:
```jsx
<video src="/videos/your-video.mp4" controls />
```

## Optimization Tips

1. **Images**: Use WebP format when possible for better compression
2. **Icons**: Use SVG format for scalable vector graphics
3. **Videos**: Compress videos and provide multiple formats for browser compatibility
4. **File naming**: Use descriptive, lowercase names with hyphens (e.g., `hero-background.jpg`)

## Next.js Image Optimization

Next.js automatically optimizes images when using the `Image` component:
- Automatic WebP conversion
- Lazy loading
- Responsive images
- Blur placeholder support