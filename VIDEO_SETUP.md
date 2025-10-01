# Video Hero Background Setup

This project now includes a custom `VideoHero` component that adds background video support to your homepage hero section.

## Required Files

To complete the setup, you need to add the following files to your `public` directory:

### 1. Background Video
**Location:** `public/videos/hero-background.mp4`

**Recommended specs:**
- Format: MP4 (H.264 codec for best browser compatibility)
- Resolution: 1920x1080 (Full HD) or 1280x720 (HD)
- Duration: 10-30 seconds (it will loop automatically)
- File size: Under 5MB for optimal loading performance
- Aspect ratio: 16:9 (widescreen)

**Content suggestions for Origin Stories theme:**
- Time-lapse of innovation (sketches to finished products)
- Abstract technology/innovation visuals
- Subtle motion graphics related to storytelling
- Montage of historical innovation moments (if copyright allows)

### 2. Fallback Image
**Location:** `public/images/hero-fallback.jpg`

**Recommended specs:**
- Format: JPG or PNG
- Resolution: 1920x1080 or similar widescreen resolution
- File size: Under 500KB for optimal loading
- Content: Should complement the video theme

## Adding Your Files

1. **Add your video file:**
   ```bash
   # Place your video file here:
   public/videos/hero-background.mp4
   ```

2. **Add your fallback image:**
   ```bash
   # Place your fallback image here:
   public/images/hero-fallback.jpg
   ```

## Video Optimization Tips

### For MP4 files:
```bash
# If you have ffmpeg installed, you can optimize your video:
ffmpeg -i input-video.mov -c:v libx264 -crf 28 -c:a aac -b:a 128k -movflags +faststart public/videos/hero-background.mp4
```

### Online optimization tools:
- [CloudConvert](https://cloudconvert.com/mp4-converter)
- [Online-Convert](https://video.online-convert.com/convert-to-mp4)
- [Compressor.io](https://compressor.io/)

## Customization

### Changing video source:
Edit `app/pages/index.vue` and modify the `video-src` prop:

```vue
<VideoHero
  video-src="/videos/your-custom-video.mp4"
  ...
/>
```

### Adjusting overlay opacity:
Edit `app/components/VideoHero.vue` and modify the overlay class:

```vue
<!-- Change bg-black/40 to adjust opacity (0-100) -->
<div class="absolute inset-0 bg-black/30" />
```

### Mobile considerations:
The component includes mobile-friendly settings:
- `playsinline` attribute for iOS compatibility
- Graceful fallback when autoplay is blocked
- Fallback image display during video loading

## Troubleshooting

### Video not playing:
1. Check file path is correct
2. Ensure video file is under 5MB
3. Verify MP4 format with H.264 codec
4. Test in different browsers

### Performance issues:
1. Reduce video file size
2. Lower resolution if needed
3. Shorter duration (10-15 seconds ideal)
4. Consider using WebM format alongside MP4 for better compression

### Mobile autoplay:
- Many mobile browsers block autoplay by default
- The video will still display but may be paused
- This is normal behavior and handled gracefully by the component