# 🏙️ Smart City Data Platform (SCDP)

## Overview
Smart City Data Platform (SCDP) เป็นระบบ Command & Control Center แบบครบวงจรสำหรับการบริหารจัดการเมืองอัจฉริยะ พัฒนาด้วย Next.js 14 และ Tailwind CSS พร้อมการออกแบบ UI แบบ Glassmorphism

![SCDP Dashboard](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

---

## ✨ Features

### 📊 1. Dashboard Overview
- **Real-time Statistics Cards** - แสดงข้อมูลสำคัญแบบเรียลไทม์
- **Interactive GIS Map** - แผนที่เมืองแบบอินเทอร์แอคทีฟ
- **System Alerts** - การแจ้งเตือนระบบแบบทันที
- **Quick Module Access** - เข้าถึงโมดูลต่างๆ ได้อย่างรวดเร็ว
- **Analytics Dashboard** - กราฟและข้อมูลวิเคราะห์แบบเรียลไทม์

### 📹 2. Video Management System (VMS)
- **Live Camera Feeds** - ดูกล้องวงจรปิดแบบเรียลไทม์ในรูปแบบ Grid
- **Video Analytics** - การวิเคราะห์วิดีโอด้วย AI (People counting, Vehicle detection)
- **Bounding Box Detection** - การตรวจจับและแสดง Bounding boxes
- **Event Log System** - บันทึกเหตุการณ์จากกล้องอัตโนมัติ
- **Recording Controls** - ควบคุมการบันทึกวิดีโอแต่ละกล้อง

### 🚗 3. Vehicle Tracking System
- **Real-time GPS Tracking** - ติดตามยานพาหนะแบบเรียลไทม์บนแผนที่
- **Route Replay** - เล่นย้อนเส้นทางที่เดินทางมา
- **Driver Behavior Analysis** - วิเคราะห์พฤติกรรมการขับขี่
- **Fleet Management** - จัดการกองรถยนต์
- **Safety Score** - คะแนนความปลอดภัยในการขับขี่

### 🌤️ 4. Weather & IoT Monitoring
- **Environmental Sensors** - เซ็นเซอร์ตรวจวัดสิ่งแวดล้อม (PM2.5, Temperature, Humidity)
- **Air Quality Index** - ดัชนีคุณภาพอากาศ
- **Trend Graphs** - กราฟแสดงแนวโน้มข้อมูล 24 ชั่วโมง
- **Weather Information** - ข้อมูลสภาพอากาศแบบเรียลไทม์
- **Sensor Network Status** - สถานะเครือข่าย IoT

### 👥 5. Citizen Information System
- **News & Updates Feed** - ฟีดข่าวสารและอัพเดตจากเทศบาล
- **Zone-based Alerts** - การแจ้งเตือนตามพื้นที่
- **Mobile App Preview** - แสดง Mockup แอปมือถือสำหรับประชาชน
- **Community Engagement** - สถิติการมีส่วนร่วมของประชาชน
- **Feedback System** - ระบบรับฟีดแบ็ค

### 📂 6. Data Catalog
- **Dataset Management** - จัดการชุดข้อมูลแบบรวมศูนย์
- **Metadata Panel** - แสดงข้อมูลเมตาดาต้าแบบละเอียด
- **Access Control** - ระบบควบคุมการเข้าถึงข้อมูล (Public, Restricted, Confidential)
- **Search & Filter** - ค้นหาและกรองข้อมูล
- **Data Request System** - ระบบขออนุญาตเข้าถึงข้อมูล

---

## 🎨 Design System

### Color Palette
```css
Primary Blue: #006fe6 (Smart City Theme)
Success Green: #10b981
Warning Yellow: #f59e0b
Error Red: #ef4444
Dark Background: #0f172a - #1e293b
```

### UI Components
- **Glass Cards** - การ์ดแบบ Glassmorphism พร้อมเอฟเฟกต์ Backdrop Blur
- **Gradient Text** - ข้อความแบบ Gradient สีฟ้า-น้ำเงิน
- **Stat Cards** - การ์ดสถิติพร้อมไอคอนและการเปลี่ยนแปลง
- **Badges** - ป้ายแสดงสถานะหลายรูปแบบ
- **Progress Bars** - แถบแสดงความคืบหน้าแบบสี
- **Alert Badges** - ป้ายแจ้งเตือนตามความรุนแรง

---

## 🏗️ Project Structure

```
smartcity/
├── app/
│   ├── layout.tsx                    # Root layout with Sidebar & Topbar
│   ├── page.tsx                      # Dashboard Overview
│   ├── globals.css                   # Global styles & Tailwind
│   ├── vms/
│   │   └── page.tsx                 # Video Management System
│   ├── vehicle-tracking/
│   │   └── page.tsx                 # Vehicle Tracking System
│   ├── weather-iot/
│   │   └── page.tsx                 # Weather & IoT Monitoring
│   ├── citizen/
│   │   └── page.tsx                 # Citizen Information System
│   └── data-catalog/
│       └── page.tsx                 # Data Catalog
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx              # Navigation sidebar
│   │   └── Topbar.tsx               # Top header bar
│   └── ui/
│       ├── StatCard.tsx             # Statistics card component
│       ├── SectionCard.tsx          # Section container component
│       ├── AlertBadge.tsx           # Alert notification badge
│       ├── Badge.tsx                # General badge component
│       └── ProgressBar.tsx          # Progress indicator
│
├── package.json                      # Dependencies
├── tailwind.config.ts               # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
└── next.config.js                   # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📱 User Journey & Navigation Flow

### 1. Entry Point: Dashboard Overview (`/`)
```
User เข้าสู่ระบบ
  ↓
Dashboard แสดง:
  - Stat Cards (ภาพรวมสถิติ)
  - GIS Map (แผนที่เมือง)
  - System Alerts (แจ้งเตือน)
  - Quick Access Modules
  - Real-time Analytics
```

### 2. Navigation via Sidebar
```
Sidebar Menu:
  ├─ Dashboard (/)
  ├─ Data Catalog (/data-catalog)
  ├─ VMS (/vms)
  ├─ Vehicle Tracking (/vehicle-tracking)
  ├─ Weather & IoT (/weather-iot)
  ├─ Citizen Info (/citizen)
  ├─ GIS Mapping (placeholder)
  └─ Analytics (placeholder)
```

### 3. Module Interactions

#### VMS Module Flow:
```
Select VMS from Sidebar
  ↓
View Camera Grid (6 cameras)
  ↓
Hover on Camera → Show Controls
  ↓
Click Camera → Full Screen / Recording
  ↓
View Analytics & Events
```

#### Vehicle Tracking Flow:
```
Select Vehicle Tracking
  ↓
View GPS Map with Vehicle Markers
  ↓
Click Vehicle Marker → View Details
  ↓
Select Route Replay → Historical Data
  ↓
Review Driver Behavior Stats
```

#### Data Catalog Flow:
```
Select Data Catalog
  ↓
Search/Filter Datasets
  ↓
View Dataset Details → Metadata Panel
  ↓
Check Access Level:
  - Public → Download Direct
  - Restricted → Request Access
  - Confidential → Admin Approval Required
```

---

## 🎯 Key Features per Page

### Dashboard Overview Page
| Feature | Description |
|---------|-------------|
| 4 Stat Cards | Active Citizens, Data Streams, Storage, System Health |
| Interactive Map | Mock GIS with 6 zones, hover effects |
| Quick Stats | CCTV, Vehicles, IoT sensors status |
| Alert Panel | Real-time system alerts (4 types) |
| Module Grid | Quick access to 4 main modules |
| Analytics Section | Resource usage, network traffic, system metrics |

### VMS Page
| Feature | Description |
|---------|-------------|
| 6 Camera Grid | Live feeds with recording indicators |
| Hover Controls | Play, Stop, Maximize buttons |
| Bounding Boxes | AI detection visualization |
| Camera Status | Online, Recording, Offline badges |
| Analytics Graphs | People counting, vehicle detection, anomaly detection |
| Event Log | Real-time event list with severity levels |

### Vehicle Tracking Page
| Feature | Description |
|---------|-------------|
| GPS Map | Interactive map with 4 vehicle markers |
| Vehicle Status | Moving (green), Idle (blue), Stopped (yellow) |
| Route Replay | Historical route with distance, duration stats |
| Vehicle List | 4 active vehicles with details |
| Driver Behavior | Safety metrics (hard braking, speeding, etc.) |
| Safety Score | Overall safety rating (87/100) |

### Weather/IoT Page
| Feature | Description |
|---------|-------------|
| 4 Environmental Stats | PM2.5, Temperature, Humidity, AQI |
| 24-Hour Trend Graph | Bar chart showing PM2.5 levels |
| Current Weather Card | Real-time conditions with icon |
| AQI Dashboard | Air quality breakdown by pollutant |
| 6 Sensor Cards | Individual sensor status and readings |
| Alert System | Sensor offline notifications |

### Citizen Info Page
| Feature | Description |
|---------|-------------|
| News Feed | 4 news items with categories and likes |
| Mobile App Mockup | 3 phone screens (Home, Alerts, Map) |
| Zone Alerts | Location-based notifications (3 zones) |
| Engagement Stats | User activity, reports, feedback |
| Social Features | Like, Comment, Share buttons |

### Data Catalog Page
| Feature | Description |
|---------|-------------|
| Dataset Table | 6 datasets with full metadata |
| Search & Filter | Category-based filtering |
| Access Badges | Public, Restricted, Confidential |
| Metadata Panel | Detailed dataset information |
| Access Control | Request approval system |
| Download/Request | Based on access level |

---

## 🎨 Mockup Wireframes

### Desktop Layout
```
┌─────────────────────────────────────────────────────┐
│ ┌─────────┐  ┌──────────────────────────────────┐  │
│ │ Sidebar │  │ Topbar (Search, Stats, User)     │  │
│ │         │  └──────────────────────────────────┘  │
│ │ SCDP    │  ┌──────────────────────────────────┐  │
│ │ Logo    │  │                                  │  │
│ │         │  │  Page Content                    │  │
│ │ Nav     │  │  (Dashboard, VMS, etc.)          │  │
│ │ Items   │  │                                  │  │
│ │         │  │                                  │  │
│ │ System  │  │                                  │  │
│ │ Status  │  │                                  │  │
│ └─────────┘  └──────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Mobile Mockup (Citizen App)
```
┌──────────────┐
│  9:41    ●●● │ ← Status Bar
├──────────────┤
│ Smart City   │ ← Header
│ Welcome!     │
├──────────────┤
│ ┌──┐  ┌──┐  │ ← Icon Grid
│ │📰│  │🔔│  │
│ └──┘  └──┘  │
│ ┌──┐  ┌──┐  │
│ │⚙️│  │📍│  │
│ └──┘  └──┘  │
├──────────────┤
│ News Feed    │ ← Content Area
│ ▪️ Item 1    │
│ ▪️ Item 2    │
└──────────────┘
```

---

## 🔧 Customization

### Adding New Pages
1. Create new page in `app/[page-name]/page.tsx`
2. Add route to Sidebar in `components/layout/Sidebar.tsx`
3. Import required components from `components/ui/`

### Modifying Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YOUR_COLOR'
      }
    }
  }
}
```

### Adding New Components
Create in `components/ui/[ComponentName].tsx`
Follow existing patterns for consistency

---

## 📊 Mock Data Structure

All pages use mock data arrays. Example:
```typescript
const cameras = [
  { 
    id: 1, 
    name: 'CAM-001', 
    location: 'Main Street', 
    status: 'online', 
    alerts: 0 
  },
  // ...
]
```

For production, replace with API calls:
```typescript
const { data: cameras } = await fetch('/api/cameras')
```

---

## 🌟 Best Practices

### Performance
- ✅ Use `'use client'` only when needed
- ✅ Lazy load heavy components
- ✅ Optimize images with Next.js Image component

### Accessibility
- ✅ Semantic HTML tags
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support

### Code Quality
- ✅ TypeScript for type safety
- ✅ Consistent component structure
- ✅ Reusable UI components

---

## 📝 To-Do / Future Enhancements

- [ ] Connect to real APIs
- [ ] Add authentication system
- [ ] Implement WebSocket for real-time data
- [ ] Add data visualization library (Recharts/Chart.js)
- [ ] Create admin panel for configuration
- [ ] Add internationalization (i18n)
- [ ] Implement dark/light theme toggle
- [ ] Add unit tests
- [ ] Create Storybook for components
- [ ] Deploy to production

---

## 📄 License
MIT License - Feel free to use for your Smart City projects!

## 👨‍💻 Developer
Created with ❤️ for Smart City initiatives

---

## 📞 Support
For issues or questions, please create an issue in the repository.

---

**Happy Smart City Building! 🏙️✨**
