# 🎨 SCDP UI/UX Mockup Guide

## 📐 Design Philosophy

### Core Principles
1. **Command Center Aesthetic** - เน้นความเป็นระบบควบคุมแบบมืออาชีพ
2. **Glassmorphism Design** - ใช้เอฟเฟกต์แก้วเบลอสมัยใหม่
3. **Dark Theme** - โทนสีเข้มเพื่อลดความเมื่อยล้าของดวงตา
4. **Real-time Focus** - เน้นการแสดงข้อมูลแบบเรียลไทม์
5. **Information Density** - แสดงข้อมูลได้มากแต่ไม่รกตา

---

## 🎨 Visual Design System

### 1. Color System

#### Primary Colors
```css
/* Blue Gradient - Smart City Theme */
Primary-50:  #e6f1ff  (Very Light Blue)
Primary-400: #1a89ff  (Bright Blue)
Primary-500: #006fe6  (Main Blue)
Primary-600: #0056b3  (Dark Blue)
Primary-900: #000b1a  (Almost Black)
```

#### Semantic Colors
```css
/* Success */
Green-400: #10b981
Green-500: #059669

/* Warning */
Yellow-400: #fbbf24
Yellow-500: #f59e0b

/* Error */
Red-400: #f87171
Red-500: #ef4444

/* Info */
Blue-400: #60a5fa
Cyan-400: #22d3ee
```

#### Background System
```css
/* Dark Gradients */
Dark-900: #0f172a  (Darkest)
Dark-800: #1e293b  (Dark)
Dark-700: #334155  (Medium Dark)

/* Transparent Overlays */
White/5:  rgba(255,255,255,0.05)
White/10: rgba(255,255,255,0.10)
White/20: rgba(255,255,255,0.20)
```

### 2. Typography

#### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

#### Font Sizes
```css
text-xs:   0.75rem  (12px)  - Labels, timestamps
text-sm:   0.875rem (14px)  - Body text, descriptions
text-base: 1rem     (16px)  - Default text
text-lg:   1.125rem (18px)  - Section titles
text-xl:   1.25rem  (20px)  - Card titles
text-2xl:  1.5rem   (24px)  - Values, numbers
text-3xl:  1.875rem (30px)  - Page titles
```

#### Font Weights
```css
font-medium: 500  - Labels
font-bold:   700  - Titles, emphasis
```

### 3. Spacing System

```css
gap-1:  0.25rem  (4px)
gap-2:  0.5rem   (8px)
gap-3:  0.75rem  (12px)
gap-4:  1rem     (16px)
gap-6:  1.5rem   (24px)
gap-8:  2rem     (32px)

p-3:    0.75rem  (12px)  - Compact padding
p-4:    1rem     (16px)  - Standard padding
p-6:    1.5rem   (24px)  - Large padding
```

---

## 🧩 Component Library

### 1. Glass Card
```tsx
/* Usage */
<div className="glass-card p-6">
  Content
</div>

/* Visual Effect */
- Background: rgba(255,255,255,0.05)
- Backdrop blur: 12px
- Border: 1px solid rgba(255,255,255,0.1)
- Border radius: 12px
- Shadow: Soft shadow with transparency
```

**When to use:**
- Card containers
- Panel backgrounds
- Modal dialogs
- Dropdown menus

### 2. Stat Card
```tsx
<StatCard
  title="Active Citizens"
  value="125,847"
  change="+12.5%"
  changeType="positive"
  icon={Users}
  iconColor="text-primary-400"
/>
```

**Visual Structure:**
```
┌────────────────────────┐
│ Title          [Icon]  │
│ 125,847               │
│ +12.5% ↑ vs last      │
└────────────────────────┘
```

### 3. Section Card
```tsx
<SectionCard 
  title="Live Camera Feeds" 
  subtitle="247/250 active"
  icon={Video}
  action={<Badge>Live</Badge>}
>
  {children}
</SectionCard>
```

**Visual Structure:**
```
┌──────────────────────────────┐
│ [Icon] Title    [Action]     │
│        Subtitle               │
├──────────────────────────────┤
│                              │
│  Content Area                │
│                              │
└──────────────────────────────┘
```

### 4. Badges

```tsx
/* Variants */
<Badge variant="default">Label</Badge>    // Gray
<Badge variant="primary">Active</Badge>   // Blue
<Badge variant="success">Online</Badge>   // Green
<Badge variant="warning">Pending</Badge>  // Yellow
<Badge variant="error">Offline</Badge>    // Red

/* Sizes */
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

### 5. Alert Badge
```tsx
<AlertBadge 
  type="warning" 
  message="High traffic detected"
  time="5 mins ago"
/>
```

**Types:** info, warning, success, error

### 6. Progress Bar
```tsx
<ProgressBar 
  value={87} 
  label="CPU Usage"
  color="warning"
  showPercentage={true}
/>
```

**Colors:** primary, success, warning, error

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm:  640px   @media (min-width: 640px)
md:  768px   @media (min-width: 768px)
lg:  1024px  @media (min-width: 1024px)
xl:  1280px  @media (min-width: 1280px)
2xl: 1536px  @media (min-width: 1536px)
```

### Layout Breakpoints

#### Grid Systems
```tsx
/* Stat Cards */
grid-cols-1           // Mobile (< 768px)
md:grid-cols-2        // Tablet (768px - 1024px)
lg:grid-cols-4        // Desktop (> 1024px)

/* Content Sections */
grid-cols-1           // Mobile
lg:grid-cols-3        // Desktop (sidebar + content)
```

---

## 🎭 Animation & Transitions

### Hover Effects
```css
/* Glass Card Hover */
hover:bg-white/10
hover:border-white/20
transition-all duration-300

/* Button Hover */
hover:shadow-glow
transition-all duration-200
```

### Pulse Animation
```css
/* For live indicators */
.pulse-glow {
  animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Slide Up Animation
```css
.slide-up {
  animation: slide-up 0.5s ease-out;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 🖥️ Page-Specific Mockups

### Dashboard Overview

#### Layout Structure
```
┌─ Sidebar (Fixed) ─┬─── Topbar (Fixed) ─────────────────┐
│                   │                                    │
│  Logo & Title     │  Search | Active Users | Profile  │
│                   │                                    │
│  Navigation       ├─── Main Content ──────────────────┤
│  - Dashboard      │                                    │
│  - Data Catalog   │  ┌─ Page Header ─────────────┐   │
│  - VMS            │  │ SCDP Command Center       │   │
│  - Vehicles       │  └───────────────────────────┘   │
│  - Weather        │                                    │
│  - Citizen        │  ┌─ Stat Cards (4 columns) ──┐   │
│                   │  │ [Card] [Card] [Card] [Card]│   │
│  System Status    │  └───────────────────────────┘   │
│  ● Online         │                                    │
│  API: 98.5%       │  ┌─ Main Grid ───────────────┐   │
│                   │  │ ┌─ Map ─┐  ┌─ Alerts ─┐  │   │
│                   │  │ │  GIS   │  │ 4 items  │  │   │
│                   │  │ │        │  │          │  │   │
│                   │  │ └────────┘  └──────────┘  │   │
└───────────────────┴──│                           │───┘
                       │ ┌─ Analytics ───────────┐│
                       │ │ System Resources      ││
                       │ └───────────────────────┘│
                       └───────────────────────────┘
```

#### Color Usage
- **Background:** Dark-900 with gradient overlay
- **Cards:** Glass effect with white/5 background
- **Primary Actions:** Blue gradient buttons
- **Stats:** Colored numbers (Green=positive, Red=negative)
- **Map Zones:** Different opacity for activity levels

---

### VMS (Video Management System)

#### Layout Structure
```
┌─── Page Header ──────────────────────────────────┐
│ Video Management System       [Filter] [Record] │
└──────────────────────────────────────────────────┘

┌─── Camera Grid (3x2) ────────────────────────────┐
│ ┌─ Camera 1 ──┐ ┌─ Camera 2 ──┐ ┌─ Camera 3 ──┐│
│ │ [Live Feed] │ │ [Live Feed] │ │ [Offline]   ││
│ │ ● REC       │ │             │ │ ✕ Error     ││
│ │ CAM-001     │ │ CAM-002     │ │ CAM-003     ││
│ │ [Location]  │ │ [Location]  │ │ [Location]  ││
│ └─────────────┘ └─────────────┘ └─────────────┘│
│ ┌─ Camera 4 ──┐ ┌─ Camera 5 ──┐ ┌─ Camera 6 ──┐│
│ │ [Live Feed] │ │ [Live Feed] │ │ [Live Feed] ││
│ └─────────────┘ └─────────────┘ └─────────────┘│
└──────────────────────────────────────────────────┘

┌─ Analytics ──────┬─── Event Log ─────────────────┐
│ People Counting  │ ⚠️ CAM-002: Motion Detected  │
│ [Bar Chart]      │ ⚠️ CAM-004: Crowd Detection  │
│ Vehicle Detection│ ❌ CAM-006: Camera Offline    │
│ [Bar Chart]      │ ✅ CAM-001: All Clear         │
└──────────────────┴───────────────────────────────┘
```

#### Interactive Elements
1. **Camera Hover:**
   - Overlay appears with controls
   - Play, Stop, Maximize buttons
   - Smooth fade-in transition

2. **Bounding Boxes:**
   - Yellow border for detected objects
   - Label above box
   - Pulsing animation for active detection

3. **Status Indicators:**
   - Green badge: Online
   - Yellow badge: Recording (with pulse)
   - Red badge: Offline

---

### Vehicle Tracking

#### Map Visualization
```
┌─────────────────────────────────────────────────┐
│          Live GPS Tracking Map                  │
│                                                 │
│    ●────────────────→ VH-001 (Moving, 45km/h) │
│                                                 │
│         ⬤ VH-002 (Idle, 0km/h)                │
│                                                 │
│                  ●──────→ VH-003 (Moving)      │
│                                                 │
│    ⬤ VH-004 (Stopped)                         │
│                                                 │
│ Legend: ● Moving | ⬤ Idle | ⬤ Stopped         │
└─────────────────────────────────────────────────┘
```

#### Vehicle Marker States
- **Moving (Green):** Animated pulse effect
- **Idle (Blue):** Static marker
- **Stopped (Yellow):** Warning color
- **Hover:** Tooltip shows vehicle ID and speed

---

### Weather & IoT

#### Dashboard Layout
```
┌─── Environmental Stats (4 cards) ────────────────┐
│ PM2.5: 42 μg/m³ | Temp: 28°C | Humid: 65% | AQI │
└──────────────────────────────────────────────────┘

┌─── Trend Graph (24h) ────────┬─ Current Weather ─┐
│                               │                    │
│ 60┤        ▄                 │    ☀️  28°C       │
│ 40┤  ▄  ▄ █ ▄  ▄            │   Partly Cloudy    │
│ 20┤▄█▄█▄█▄█▄█▄█▄█            │                    │
│ 0 └────────────────          │  Feels: 30°C       │
│   0h    12h    24h           │  UV: 7 High        │
│                               │                    │
│ [Additional Metrics]          │  ┌─ AQI ────────┐│
│ 🌡️ Temp  ▓▓▓▓░░░ 70%         │  │ Good: 45     ││
│ 💧 Humid ▓▓▓▓▓░░ 65%         │  │ PM2.5:  35%  ││
│ 🌪️ Wind  ▓▓░░░░░ 40%         │  │ PM10:   42%  ││
│                               │  │ NO2:    45%  ││
└───────────────────────────────┴──└──────────────┘┘

┌─── IoT Sensor Network (Grid) ────────────────────┐
│ [Sensor 1] [Sensor 2] [Sensor 3]                 │
│ PM2.5: 35  Temp: 28   Humid: 75                 │
│ ✅ Normal  ✅ Normal  ⚠️ Warning                  │
│                                                   │
│ [Sensor 4] [Sensor 5] [Sensor 6]                 │
│ PM2.5: 85  CO2: 420   Noise: 65                 │
│ ❌ Alert   ✅ Normal  ⚠️ Warning                  │
└───────────────────────────────────────────────────┘
```

---

### Citizen Information

#### News Feed
```
┌─── News & Updates ────────────────────────────────┐
│ ┌─ News Item 1 ──────────────────────────────┐  │
│ │ [Events] 2 hours ago                       │  │
│ │ New Public Park Opening                    │  │
│ │ Lorem ipsum dolor sit amet...              │  │
│ │ ❤️ 145  💬 Comment  📤 Share               │  │
│ └────────────────────────────────────────────┘  │
│                                                   │
│ ┌─ News Item 2 ──────────────────────────────┐  │
│ │ [Infrastructure] 5 hours ago               │  │
│ │ Road Construction Update                   │  │
│ │ ...                                        │  │
│ └────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

#### Mobile App Mockup
```
┌─ Phone 1 ─┐  ┌─ Phone 2 ─┐  ┌─ Phone 3 ─┐
│ 9:41  ●●● │  │ 9:41  ●●● │  │ 9:41  ●●● │
├───────────┤  ├───────────┤  ├───────────┤
│Smart City │  │  Alerts   │  │    Map    │
│ Welcome!  │  │           │  │           │
├───────────┤  ├───────────┤  ├───────────┤
│ ┌───┬───┐│  │ ⚠️ Alert 1│  │ ┌─────────┐│
│ │📰 │🔔 ││  │ ℹ️  Alert 2│  │ │  ●  ●   ││
│ ├───┼───┤│  │ ✅ Alert 3│  │ │ ●    ●  ││
│ │⚙️ │📍 ││  │ ❌ Alert 4│  │ │   ●     ││
│ └───┴───┘│  │           │  │ └─────────┘│
├───────────┤  ├───────────┤  ├───────────┤
│  Bottom   │  │  Bottom   │  │  Bottom   │
└───────────┘  └───────────┘  └───────────┘
  Home Screen   Notifications  Services Map
```

---

### Data Catalog

#### Table View
```
┌─── Dataset Table ─────────────────────────────────────────────────────┐
│ Name                | Category      | Records | Format  | Access     │
├─────────────────────┼───────────────┼─────────┼─────────┼────────────┤
│ 🗃️ Traffic Flow    │ [Transport]   │ 2.4M    │ CSV,JSON│ 🔒 Restrict│
│ 🗃️ Air Quality     │ [Environment] │ 890K    │ JSON,XML│ ✅ Public  │
│ 🗃️ Demographics    │ [Demographics]│ 125K    │ CSV     │ 🔒 Restrict│
│ 🗃️ Transport Routes│ [Transport]   │ 45K     │ GeoJSON │ ✅ Public  │
│ 🗃️ Building Permits│ [Urban Plan]  │ 67K     │ PDF,CSV │ 🔒 Restrict│
│ 🗃️ CCTV Locations  │ [Security]    │ 250     │ JSON    │ ⛔ Confide │
└────────────────────┴───────────────┴─────────┴─────────┴────────────┘
```

#### Metadata Panel
```
┌─── Dataset Metadata ─────────────────────────────┐
│ Dataset: Traffic Flow Data                       │
│                                                   │
│ Description:                                      │
│ Real-time and historical traffic flow data       │
│ collected from sensors across the city...        │
│                                                   │
│ Created: Jan 15, 2024  | Last Updated: 2h ago   │
│ Frequency: Real-time   | Owner: Transport Dept.  │
│                                                   │
│ Tags: [traffic] [transportation] [real-time]     │
└───────────────────────────────────────────────────┘

┌─── Access Control ───────────────────────────────┐
│ Access Levels:                                    │
│ ✅ Public:       342 datasets                     │
│ ⚠️  Restricted:  567 datasets                     │
│ ❌ Confidential: 338 datasets                     │
│                                                   │
│ Pending Requests: 3                               │
│ [View All Requests]                               │
└───────────────────────────────────────────────────┘
```

---

## 🎯 Interaction Patterns

### Hover States
```css
/* Cards */
hover:shadow-glow         /* Glowing effect */
hover:bg-white/10         /* Lighter background */
hover:border-white/20     /* Brighter border */

/* Buttons */
hover:bg-primary-600      /* Darker primary */
hover:shadow-glow         /* Blue glow */

/* Links */
hover:text-primary-400    /* Blue highlight */
```

### Click Animations
```css
/* Buttons */
active:scale-95           /* Slightly shrink */
transition-transform

/* Cards */
cursor-pointer
transition-all duration-300
```

### Loading States
```html
<!-- Skeleton Loading -->
<div class="animate-pulse">
  <div class="h-4 bg-white/10 rounded w-3/4"></div>
</div>

<!-- Spinner -->
<div class="animate-spin rounded-full h-8 w-8 border-t-2 border-primary-500"></div>
```

---

## 📊 Data Visualization

### Chart Types Used

#### 1. Bar Charts (VMS Analytics)
```
Purpose: Show detection counts
Height: Represents value
Color: Category-specific
Hover: Shows exact value
```

#### 2. Line Charts (Weather Trends)
```
Purpose: Show trends over time
X-axis: Time (24 hours)
Y-axis: Value (PM2.5, etc.)
Gradient: Fill under line
```

#### 3. Progress Bars
```
Purpose: Show percentages/usage
Colors: Semantic (green/yellow/red)
Animation: Smooth width transition
Labels: Show percentage and label
```

#### 4. Gauges (Implied)
```
Purpose: Show current vs max
Visual: Circular or linear
Zones: Green/Yellow/Red
```

---

## 🔔 Notification System

### Alert Severity Levels

#### Info (Blue)
```
Icon: ℹ️ Info
Color: Blue-400
Use: General information, updates
Example: "Camera maintenance scheduled"
```

#### Warning (Yellow)
```
Icon: ⚠️ AlertTriangle
Color: Yellow-400
Use: Attention needed, non-critical
Example: "High traffic detected"
```

#### Success (Green)
```
Icon: ✅ CheckCircle
Color: Green-400
Use: Successful operations
Example: "All systems operational"
```

#### Error (Red)
```
Icon: ❌ XCircle
Color: Red-400
Use: Critical issues, failures
Example: "Sensor offline"
```

---

## 🎨 Icon System

### Icon Library: Lucide React

#### Navigation Icons
```tsx
LayoutDashboard  - Dashboard
Database         - Data Catalog
Video            - VMS
Car              - Vehicle Tracking
Cloud            - Weather/IoT
Users            - Citizen Info
MapPin           - GIS Mapping
Activity         - Analytics
Settings         - Settings
```

#### Status Icons
```tsx
CheckCircle      - Success/Online
AlertTriangle    - Warning
XCircle          - Error/Offline
Info             - Information
Bell             - Notifications
```

#### Action Icons
```tsx
Play             - Start/Play
Square           - Stop
Maximize2        - Fullscreen
Download         - Download
Eye              - View
Lock             - Restricted
Search           - Search
Filter           - Filter
RefreshCw        - Refresh
```

---

## 📱 Mobile Responsiveness

### Breakpoint Strategy

#### Mobile (< 768px)
- Single column layout
- Sidebar collapses to hamburger menu
- Stat cards stack vertically
- Tables become scrollable cards
- Map height reduced
- Touch-friendly button sizes (min 44px)

#### Tablet (768px - 1024px)
- 2-column grids where applicable
- Sidebar can be toggled
- Stat cards in 2 columns
- Tables show fewer columns
- Map at comfortable size

#### Desktop (> 1024px)
- Full layout with fixed sidebar
- Multi-column grids (3-4 columns)
- All table columns visible
- Large map areas
- Hover effects enabled

---

## ⚡ Performance Considerations

### Optimization Techniques

#### 1. Lazy Loading
```tsx
const VMS = lazy(() => import('./vms/page'))
const VehicleTracking = lazy(() => import('./vehicle-tracking/page'))
```

#### 2. Code Splitting
```tsx
// Automatic with Next.js App Router
// Each page is its own chunk
```

#### 3. Image Optimization
```tsx
import Image from 'next/image'
<Image src="..." width={} height={} alt="" />
```

#### 4. CSS Optimization
```css
/* Use transform instead of position */
transform: translateY(10px)

/* Use GPU acceleration */
will-change: transform
```

---

## 🎭 Motion Design

### Animation Timings
```css
Fast:   150ms  - Button clicks, toggles
Normal: 300ms  - Card hovers, fades
Slow:   500ms  - Page transitions, slides
```

### Easing Functions
```css
ease-out:     Interactive elements
ease-in-out:  Smooth bidirectional
cubic-bezier: Custom curves
```

### Microinteractions
1. **Button Press:** Scale down slightly
2. **Card Hover:** Lift with shadow
3. **Toggle:** Slide with color fade
4. **Notification:** Slide in from right
5. **Loading:** Pulse or spin

---

## 🎯 Accessibility (A11y)

### WCAG 2.1 Guidelines

#### Color Contrast
```
Text on Dark Background: >= 4.5:1 (AA)
Large Text: >= 3:1 (AA)
Interactive Elements: Clear focus states
```

#### Keyboard Navigation
```
Tab Order: Logical flow
Focus Visible: Blue ring (ring-2 ring-primary-500)
Skip Links: "Skip to main content"
```

#### Screen Readers
```html
<button aria-label="Close dialog">
<img alt="City map showing zones">
<nav aria-label="Main navigation">
```

---

## 🏁 Summary

### Key Takeaways
1. **Consistent Design Language** - All components follow glassmorphism pattern
2. **Smart Color Usage** - Semantic colors for states and actions
3. **Responsive First** - Mobile to desktop progression
4. **Performance Minded** - Optimized animations and loading
5. **Accessibility** - WCAG compliant with keyboard support

### Design Files Delivered
- ✅ Complete component library
- ✅ Page layouts for 6 modules
- ✅ Color system and typography
- ✅ Animation and interaction patterns
- ✅ Responsive breakpoints
- ✅ Mobile app mockups

---

**Ready to implement! 🎨✨**
