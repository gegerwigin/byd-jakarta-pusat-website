# Hero Slider CMS - Dokumentasi

Sistem Hero Slider yang sepenuhnya CMS-ready dengan kemampuan multi-slide, image carousel, dan konten yang dapat diedit secara penuh.

## 🎯 Fitur Utama

### ✨ **Slide Management**
- **Multi-slide carousel** dengan navigasi arrows & dots
- **Auto-play** dengan pause on hover
- **Smooth transitions** dengan custom duration
- **Responsive design** untuk semua device sizes
- **Custom slide ordering** dan visibility control

### 🖼️ **Image & Background**
- **Dynamic background images** per slide
- **Gradient placeholders** jika image tidak tersedia
- **Custom overlay** dengan adjustable opacity
- **Image positioning** (left, center, right)
- **Error handling** untuk image loading

### 🎨 **Content Customization**
- **Dynamic badges** dengan custom styling
- **Multi-line titles & subtitles** 
- **Feature lists** dengan icons
- **Dual CTA buttons** (primary & secondary)
- **Custom colors & gradients** per element

### ⚙️ **CMS Controls**
- **Slide visibility** toggle on/off
- **Content editing** tanpa coding
- **Button customization** (text, colors, links)
- **Auto-play settings** control
- **Layout positioning** options

## 📁 Struktur File

```
src/
├── types/
│   └── heroCMS.ts           # Interface TypeScript untuk slider
├── data/
│   └── heroSliderContent.ts # CMS data & functions
├── components/
│   └── CMSHeroSlider.tsx    # Komponen slider utama
└── pages/
    └── Index.tsx            # Implementation
```

## 🎛️ CMS Data Structure

### **Slide Configuration**
```typescript
{
  id: 'slide-1',
  title: 'Mobil Listrik Masa Depan',
  subtitle: 'Mulai 300 Jutaan',
  description: 'Rasakan pengalaman berkendara...',
  image: {
    src: '/images/hero-car-1.jpg',
    alt: 'Mobil Listrik Premium',
    position: 'center'
  },
  badge: {
    text: '🔥 PROMO TERBATAS',
    bgColor: 'bg-gradient-to-r from-red-500 to-orange-500',
    textColor: 'text-white',
    isVisible: true
  },
  features: [
    {
      text: 'Cicilan mulai 3 jutaan/bulan',
      icon: '✅',
      isVisible: true
    }
  ],
  ctaButton: {
    text: '🚗 TEST DRIVE GRATIS',
    bgColor: 'bg-gradient-to-r from-red-600 to-orange-500',
    href: '#contact',
    type: 'scroll',
    isVisible: true
  }
}
```

### **Slider Settings**
```typescript
{
  autoPlay: true,
  autoPlayInterval: 5000,     // 5 detik
  showDots: true,
  showArrows: true,
  pauseOnHover: true,
  transitionDuration: 500,
  backgroundOverlay: true,
  overlayOpacity: 0.3
}
```

## 🔧 CMS Functions

### **Content Management**
```typescript
// Update slide content
updateSlide('slide-1', { title: 'New Title' });

// Add new slide
addSlide({
  title: 'New Slide',
  image: { src: '/new-image.jpg', alt: 'New Image' },
  order: 4
});

// Remove slide
removeSlide('slide-2');

// Update CTA button
updateSlideCTA('slide-1', { 
  text: 'New CTA Text',
  bgColor: 'bg-blue-500' 
});

// Update image
updateSlideImage('slide-1', { 
  src: '/new-background.jpg',
  position: 'left' 
});

// Update slider settings
updateSliderSettings({ 
  autoPlayInterval: 8000,
  showArrows: false 
});
```

## 🎨 Customization Options

### **Badge Styling**
- ✅ Custom text & icons
- ✅ Gradient backgrounds
- ✅ Show/hide toggle
- ✅ Custom text colors
- ✅ Pulse animation

### **Typography**
- ✅ Multi-size responsive titles
- ✅ Dynamic subtitles
- ✅ Description text
- ✅ Custom colors per slide

### **CTA Buttons**
- ✅ Primary & secondary buttons
- ✅ Custom text & icons
- ✅ Gradient backgrounds
- ✅ Hover effects
- ✅ Link types: scroll, navigate, external

### **Features List**
- ✅ Icon + text combinations
- ✅ Individual visibility control
- ✅ Custom ordering
- ✅ Animated entrance

### **Navigation**
- ✅ Arrow navigation
- ✅ Dot indicators
- ✅ Slide counter
- ✅ Auto-play controls
- ✅ Pause on hover

## 🎭 Animation System

### **Built-in Animations**
```css
.animate-fade-in         /* Base fade in */
.animate-fade-in-delay   /* Staggered fade in */
.animate-slide-in        /* Slide from left */
.animate-bounce          /* Badge bounce */
```

### **Transition Effects**
- ✅ **Fade transitions** between slides
- ✅ **Staggered content** animation
- ✅ **Hover scale** effects
- ✅ **Smooth navigation** transitions

## 📱 Responsive Features

### **Mobile Optimization**
- ✅ **Touch-friendly** navigation
- ✅ **Responsive typography** (4xl → 7xl)
- ✅ **Stack layout** untuk CTA buttons
- ✅ **Optimized spacing** untuk mobile

### **Desktop Experience**
- ✅ **Full-screen hero** display
- ✅ **Hover interactions** 
- ✅ **Keyboard navigation** support
- ✅ **Mouse control** untuk arrows

## 🚀 Sample Content

### **3 Default Slides:**

1. **Slide 1: "Mobil Listrik Masa Depan"**
   - Focus: Harga & promosi
   - CTA: Test Drive Gratis
   - Features: Cicilan, garansi, hemat BBM

2. **Slide 2: "Teknologi Terdepan"** 
   - Focus: AI & teknologi
   - CTA: Lihat Spesifikasi
   - Features: Autopilot, smart charging

3. **Slide 3: "Ramah Lingkungan"**
   - Focus: Eco-friendly
   - CTA: Jadi Bagian Perubahan
   - Features: Zero emission, solar ready

## ⚡ Performance

### **Optimizations**
- ✅ **Lazy loading** ready
- ✅ **Conditional rendering** 
- ✅ **Efficient re-renders**
- ✅ **Memory cleanup** pada unmount
- ✅ **Error boundaries** untuk images

### **Loading States**
- ✅ **Graceful fallbacks** untuk missing images
- ✅ **Gradient placeholders**
- ✅ **Smooth transitions**

## 🎯 Cara Edit Content CMS

### **1. Edit Slide Content**
```typescript
// File: src/data/heroSliderContent.ts
// Cari slide yang ingin diedit:
{
  id: 'slide-1',
  title: 'EDIT TITLE DI SINI',           // ← Edit title
  subtitle: 'EDIT SUBTITLE DI SINI',     // ← Edit subtitle
  badge: {
    text: 'EDIT BADGE TEXT',             // ← Edit badge
    bgColor: 'bg-red-500'                // ← Edit colors
  }
}
```

### **2. Edit CTA Buttons**
```typescript
ctaButton: {
  text: 'EDIT BUTTON TEXT',              // ← Edit button text
  bgColor: 'bg-blue-500',                // ← Edit background
  href: '#section-id',                   // ← Edit link target
  type: 'scroll'                         // ← scroll/navigate/external
}
```

### **3. Edit Images**
```typescript
image: {
  src: '/path/to/new-image.jpg',         // ← Ganti image path
  alt: 'Description for image',          // ← Edit alt text
  position: 'center'                     // ← left/center/right
}
```

### **4. Edit Slider Settings**
```typescript
settings: {
  autoPlay: true,                        // ← true/false
  autoPlayInterval: 5000,                // ← Milliseconds
  showDots: true,                        // ← Show/hide dots
  showArrows: true                       // ← Show/hide arrows
}
```

## 🛡️ Error Handling

- ✅ **Image loading errors** → show gradient fallback
- ✅ **Missing content** → graceful degradation  
- ✅ **Empty slides array** → return null
- ✅ **Invalid navigation** → prevent crashes

## 🔄 Future Enhancements

- [ ] **Video backgrounds** support
- [ ] **Parallax effects** 
- [ ] **3D transitions**
- [ ] **Lazy loading** images
- [ ] **Accessibility** improvements
- [ ] **Analytics** tracking
- [ ] **A/B testing** support
- [ ] **Drag & drop** slide reordering

## ✅ Status: Production Ready!

Hero Slider CMS sudah **100% siap pakai** dengan:
- 🎯 **3 slide default** dengan konten lengkap
- 🎨 **Full customization** tanpa coding
- 📱 **Responsive design** 
- ⚡ **Smooth animations**
- 🔧 **Easy content management**

**Tinggal edit konten di `heroSliderContent.ts` dan siap deploy!** 🚀 