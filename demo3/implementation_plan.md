# Sahaay Setu — Mobile-First Redesign, Tabbed Navigation, Live Support Agent & Incident Description

Transform Sahaay Setu into a modern, mobile-first, tabbed web application featuring an interactive Live Support Agent, a natural language "Describe Incident in Your Own Words" engine with speech-to-text and FIR draft helper, and dedicated view-based navigation on the same tab.

## User Review Required

> [!IMPORTANT]
> **View-Based / Tabbed Navigation:**
> Instead of a single long page requiring extensive vertical scrolling, the web app will be structured into distinct views accessible via top navigation and a mobile bottom app bar:
> 1. **Home / Overview** (Emergency quick dials, situation overview, feature cards)
> 2. **Helplines** (Filterable directory with 1-tap call & direct links)
> 3. **Live Agent (Sahaay Mitra)** (Interactive empathetic chat assistant offering real-time guidance)
> 4. **Describe Incident** (Natural language text & voice input, legal/medical analysis, confidential FIR draft generator)
> 5. **Recommender** (Step-by-step guided assessment)
> 6. **Rights & Law** (SC/ST Act protections, compensation breakdown table, legal aid)
> 7. **Privacy & Safety** (Discreet mode, quick exit, browser history clearance guide)
>
> All views stay on the **same tab** with clean hash routing (`#helplines`, `#agent`, `#describe`, etc.), supporting browser back/forward buttons and mobile navigation seamlessly.

---

## Proposed Architecture & Features

### 1. Mobile-First & Responsive Overhaul
- **Fluid Layout & Viewports:** Implement mobile-optimized typography (`clamp()`), touch targets ($\ge 48\text{px}$), flex/grid layouts adapting from 320px mobile screens to desktop.
- **Mobile Bottom Navigation Bar:** Persistent mobile bottom bar with quick icons for *Home*, *Helplines*, *Live Agent*, *Describe*, and *Rights*.
- **Accessible Top Header & Drawer:** Compact sticky header with emergency quick dial, brand icon, mobile menu toggle, and instant Quick Exit.

### 2. Multi-View / Tabbed Architecture (Same Tab)
- Smooth client-side view switching without page reloads.
- Active navigation states highlighted across desktop navbar and mobile bottom bar.
- Direct linking and browser history management via URL hash (`#helplines`, `#agent`, etc.).

### 3. Interactive Live Support Agent ("Sahaay Mitra")
- **Empathetic Conversational Assistant:** Available 24/7 client-side (100% private, no data transmitted to external servers).
- **Interactive Capabilities:**
  - Dynamic risk triage (immediate danger alerts with 1-tap 112/181 calling).
  - Guidance on FIR registration, medical examination (MLC), witness protection, and claiming compensation under SC/ST Act rules.
  - Interactive quick-reply buttons and typing indicators for natural interaction.
  - Text-to-speech audio toggle for accessibility on mobile devices.
  - "Save/Copy Advice" feature for consulting legal aid lawyers (NALSA 15100).

### 4. "Describe Incident in Your Own Words" Analyzer & FIR Draft Helper
- **Natural Language Text Area:** Allows survivors/witnesses to type their story freely in plain words without needing legal terminology.
- **Voice-to-Text Input:** Built-in microphone button leveraging the Web Speech Recognition API for hands-free voice dictation on mobile.
- **Smart Analysis Engine:**
  - Evaluates nature of harm (physical assault, threats, casteist abuse, property damage, institutional negligence).
  - Outlines applicable legal protections and procedural rights under the SC/ST (POA) Act.
  - Automatically generates a structured, confidential **FIR Complaint Draft** that the user can copy or print to take directly to the police station or DLSA legal aid counsel.

---

## Proposed Changes

### Web Application Components

#### [NEW] [index.html](file:///c:/Users/gargk/New%20folder/index.html)
- Main HTML5 document containing semantic views:
  - Header & Mobile Navigation Drawer
  - View Containers: `#view-home`, `#view-helplines`, `#view-agent`, `#view-describe`, `#view-recommender`, `#view-rights`, `#view-privacy`
  - Mobile Bottom Navigation Bar
  - Quick Exit Floating Action Button & Safety Warning Modal

#### [NEW] [style.css](file:///c:/Users/gargk/New%20folder/style.css)
- Comprehensive modern design system with CSS custom properties (palette, typography, elevation, shadows).
- Mobile-first responsive rules:
  - Phone (< 600px): Bottom navigation bar, stacked full-width cards, large tap targets, compact headers.
  - Tablet (600px - 991px): Adaptive 2-column grids, optimized chat container.
  - Desktop ($\ge 992px$): Clean horizontal navigation, refined multi-column resource layouts.
- Chat UI styling (messages, avatars, status badges, typing indicator, quick replies).
- View transition animations and micro-interactions.

#### [NEW] [app.js](file:///c:/Users/gargk/New%20folder/app.js)
- **View Router:** URL hash listener and view switcher with active menu highlighting.
- **Live Agent Logic (Sahaay Mitra):** Knowledge base containing decision trees, intent recognition, dynamic recommendations, and conversation history management.
- **Incident Description Analyzer & FIR Generator:** Text parser, Web Speech API integration, categorization, and formatted FIR outline generation.
- **Support Recommender:** Dynamic questionnaire logic from the original design with enhanced UI feedback.
- **Safety & Quick Exit:** Instant Google redirect, escape key trigger, history replacement.

---

## Verification Plan

### Automated / Browser Testing
- Test the application using the browser subagent:
  - Verify responsive mobile view at 375x667 (iPhone SE) and 390x844 (iPhone 12/14/15).
  - Test view switching to "Helplines", "Live Agent", "Describe Incident", "Rights" via navigation links and mobile bottom bar without page reload.
  - Test the Live Agent interaction (send messages, receive contextual recommendations, click quick reply chips).
  - Test the "Describe Incident in Your Own Words" engine (type narrative, trigger analysis, verify generated FIR draft outline).
  - Verify Quick Exit button and Esc key behavior.
