# Sahaay Setu (सहाय सेतु)
### Citizen & Government Legal Decision Support Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](https://opensource.org/licenses/MIT)
[![Platform: Web](https://img.shields.io/badge/Platform-Web%20SPA-123B36.svg)](index.html)
[![Jurisdiction: India](https://img.shields.io/badge/Legal%20Framework-SC%2FST%20Act%20%7C%20BNS%202023-orange.svg)](#statutory--legal-frameworks)
[![Zero Backend Dependency](https://img.shields.io/badge/Dependencies-Vanilla%20JS%20%7C%20No%20Build%20Tool-success.svg)](#technology-stack)

**Sahaay Setu** is a dual-interface legal decision support platform and emergency bridge designed to empower victims and survivors under the **Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989 / 2016 Amendment Rules**, the **Bharatiya Nyaya Sanhita (BNS) 2023**, and the **National Legal Services Authority (NALSA)** statutory frameworks.

The platform unites citizen-facing trauma-informed AI support with a robust 4-tier Role-Based Access Control (RBAC) government administration system for case workers, district nodal officers, state departments, and national ministries.

---

## 📑 Table of Contents

- [Key Highlights](#-key-highlights)
- [Architecture & Interfaces](#-architecture--interfaces)
  - [1. Citizen & Survivor Portal](#1-citizen--survivor-portal)
  - [2. 4-Tier Government RBAC Portal](#2-4-tier-government-rbac-portal)
- [Core AI & Intelligence Modules](#-core-ai--intelligence-modules)
- [Project File Structure](#-project-file-structure)
- [Technology Stack](#-technology-stack)
- [Quick Start / How to Run](#-quick-start--how-to-run)
- [Demo Credentials & Quick Access](#-demo-credentials--quick-access)
- [Statutory & Legal Frameworks](#-statutory--legal-frameworks)
- [Safety & Privacy Measures](#-safety--privacy-measures)

---

## 🌟 Key Highlights

- **Dual-Interface System**: Seamless switching between the anonymous/citizen survivor interface and official administrative dashboards.
- **Natural Language Incident Reporting**: Voice-to-text dictation and plain-language narrative input with automated legal section extraction and confidential **Zero FIR Complaint Draft** generation.
- **Emotion AI & Voice Stress HUD**: Real-time acoustic and semantic stress classification providing trauma-informed conversational adjustments.
- **Explainable AI (XAI) Legal Citations**: Direct mapping of user narratives to statutory acts, punishment provisions, and mandatory compensation entitlement stages.
- **Continuous Victim Well-Being Pulse Tracker**: Longitudinal distress monitoring with early crisis warning indicators.
- **4-Tier Government RBAC**: Tailored workflows for Grassroots Case Workers, District Magistrates/SP, State Nodal Officers, and MoSJE National Policymakers.
- **Mobile-First & Offline-Ready**: Responsive design with persistent mobile bottom navigation bar, single-page hash routing (`#home`, `#agent`, `#describe`, etc.), and `localStorage` persistence.
- **Survivor Safety & Stealth**: Instant **Quick Exit (`Esc` key)**, history clearance guidelines, and local-only zero-leak client processing.

---

## 🏛 Architecture & Interfaces

```
                                  ┌─────────────────────────────────────────┐
                                  │          Sahaay Setu Platform           │
                                  └────────────────────┬────────────────────┘
                                                       │
                         ┌─────────────────────────────┴─────────────────────────────┐
                         ▼                                                           ▼
       ┌───────────────────────────────────┐                       ┌───────────────────────────────────┐
       │     Citizen / Survivor Portal     │                       │     4-Tier Government Portal      │
       └─────────────────┬─────────────────┘                       └─────────────────┬─────────────────┘
                         │                                                           │
        ├── 🚨 24×7 Emergency Hotlines (112, 181, 1098, 15100)      ├── 🏢 Tier 1: Case Worker (Sakhi/DLSA)
        ├── 💬 Sahaay Mitra AI Assistant (TTS / STT)                ├── ⚖️ Tier 2: District Magistrate / SP Nodal
        ├── 📝 "Describe in Your Own Words" Incident Analyzer       ├── 🗺️ Tier 3: State Nodal Officer (Anonymized)
        ├── 📋 Automated Zero FIR Generator & Statutory Calculator  └── 🏛️ Tier 4: MoSJE / National Policy View
        ├── 📊 Continuous Victim Well-Being Pulse Tracker
        └── 🛡️ Citizen Case Tracking & Disbursal Status
```

### 1. Citizen & Survivor Portal

Designed with trauma-informed UX principles, high accessibility, and multilingual support:
- **Emergency Hotline Bar**: Instant 1-tap calling for Police (112), Women Helpline (181), Childline (1098), Legal Aid (15100), and Tele-MANAS (14416).
- **Interactive Live Assistant ("Sahaay Mitra")**: Conversational agent providing risk triage, legal guidance, medical exam (MLC) advice, and witness protection procedures with speech synthesis.
- **Incident Description & FIR Helper**: Natural language narrative box with Web Speech API voice input, automated legal categorization, and printable/copyable police complaint drafts.
- **Statutory Rights & Compensation Explorer**: Interactive breakdown of financial relief amounts under Annexure-I of the SC/ST (POA) Rules (₹1,00,000 to ₹8,25,000+ depending on offense).
- **Citizen Case Tracking ("My Case")**: Victims can log in with their Case ID and mobile number to track FIR stage, compensation voucher disbursal, and assigned protection officer.

### 2. 4-Tier Government RBAC Portal

Multi-level administrative hub adhering to government hierarchy:

| Tier | Role / Designation | Core Responsibilities & Capabilities |
| :--- | :--- | :--- |
| **Tier 1** | **Case Worker / Ground Officer**<br>*(Sakhi OSC / DLSA Paralegal)* | Direct victim intake, psychological first aid logging, medical examination (MLC) coordination, emergency relief tracking, and note logging. |
| **Tier 2** | **District Nodal Officer**<br>*(DM / Collector / SP Nodal)* | District-wide case roster, statutory compensation tranche approval, Section 15A armed police escort sanctioning, and chargesheet compliance monitoring. |
| **Tier 3** | **State Nodal Officer**<br>*(State Social Welfare & Tribal Dept)* | Anonymized district performance index, inter-district resource allocation, state compensation fund utilization, and high-risk case oversight. |
| **Tier 4** | **National Ministry**<br>*(MoSJE / MoTA National Level)* | Macro-level national trends, state-wise atrocity analytics, policy intervention indicators, and legislative compliance oversight. |

---

## 🧠 Core AI & Intelligence Modules

### 1. Emotion AI & Voice Stress Analytics HUD
- Analyzes speech cadences, tone indicators, and semantic distress markers during voice dictation or text input.
- Displays a real-time HUD with distress indicators (*Calm*, *Elevated*, *Severe Acute Trauma*) to adapt assistant responses to a gentle, trauma-informed tone.

### 2. Explainable AI (XAI) Transparent Citation Engine
- Maps specific factual statements to exact legal provisions:
  - **SC/ST (Prevention of Atrocities) Act**: Sections 3(1)(r), 3(1)(s), 3(2)(v), 3(2)(va), Section 15A (Witness Protection).
  - **Bharatiya Nyaya Sanhita (BNS) 2023**: Corresponding updated penal provisions for assault, criminal intimidation, and outraging modesty.
- Highlights statutory timelines (e.g., mandatory 60-day investigation under Rule 7, 7-day interim relief under Rule 12(4)).

### 3. Continuous Victim Well-Being Pulse Tracker
- Periodic check-in module recording survivor emotional recovery on a multi-point scale.
- Generates trendlines for assigned counselors and triggers automated escalation alerts if regression occurs.

---

## 📁 Project File Structure

```
demo2/
│
├── index.html              # Main Single Page Application structure (Views, Modals, Navigation)
├── style.css               # Complete responsive design system (Glassmorphism, HUD, Themes)
├── app.js                  # Application engine (Router, RBAC, AI Assistant, Case Store, NLP)
├── implementation_plan.md  # Architectural design & implementation blueprint
└── README.md               # Project documentation & reference guide
```

---

## 💻 Technology Stack

- **Frontend**: Semantic HTML5 (Custom view routing, ARIA accessibility compliance, accessible modals)
- **Styling**: Modern CSS3 (CSS Custom Properties, Flexbox, CSS Grid, mobile-first responsive breakpoints, Glassmorphic overlays)
- **Scripting**: Pure Vanilla JavaScript (ES6+), zero external runtime frameworks or heavy node dependencies
- **APIs Used**:
  - **Web Speech Recognition API**: Voice-to-text dictation in incident reporting.
  - **Web Speech Synthesis API**: Text-to-speech audio playback for accessibility.
  - **Web Storage API (localStorage)**: Client-side persistent case store pre-seeded with realistic cases.
- **Typography & Icons**: Google Fonts (`Fraunces` editorial serif & `Inter` clean sans-serif) + semantic SVG iconography.

---

## 🚀 Quick Start / How to Run

Because Sahaay Setu is built with pure web technologies and zero external dependencies, no complex installation or build steps are required.

### Method 1: Direct Browser Launch
1. Clone or download the repository folder.
2. Double-click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Method 2: Local Static Server (Recommended)
Using Python:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Using Node.js (`serve` / `http-server` / `live-server`):
```bash
npx serve .
```

---

## 🔑 Demo Credentials & Quick Access

For evaluation and demonstration, Sahaay Setu features a **permissive authentication engine**:

### 1. Citizen / Survivor Login
- Click **"User Login"** in the top navigation or enter via the welcome modal.
- Enter **any Case ID and Phone Number**, or use the **1-Click Demo Buttons**:
  - `POA-9042` — Sunita Devi (*Varanasi, UP*)
  - `POA-9038` — Rajesh Paswan (*Patna, Bihar*)
  - `POA-9031` — Vikram Meghwal (*Bhiwani, Haryana*)
  - `POA-9019` — Anita Kumari (*Gwalior, MP*)
  - `POA-9015` — Ramesh Valmiki (*Jaipur, Rajasthan*)
  - `POA-9008` — Manjula Rathore (*Ahmedabad, Gujarat*)

### 2. Government Official Login
- Click **"Govt Login"** in the header.
- Enter **any Officer ID, Password, and select a Role Tier**, or use the **1-Click Role Switcher**:
  - **Tier 1 (Case Worker)**: `CW-DLSA-7721`
  - **Tier 2 (District Nodal Officer / DM)**: `DM-VAR-204`
  - **Tier 3 (State Nodal Officer)**: `SNO-UP-881`
  - **Tier 4 (National Ministry / MoSJE)**: `MOSJE-DIR-01`

---

## ⚖️ Statutory & Legal Frameworks

Sahaay Setu embeds compliance rules and financial relief norms according to:

1. **SC & ST (Prevention of Atrocities) Act, 1989 & 2016 Amendment Rules**:
   - **Section 15A**: Comprehensive rights of victims and witnesses (protection, travel allowances, immediate relief).
   - **Rule 7(1)**: Investigation to be completed within 60 days by an officer not below DSP rank.
   - **Rule 12(4) & Annexure-I**: Staged disbursement of statutory relief (FIR stage, Medico-Legal/Chargesheet stage, Trial conclusion).
2. **Bharatiya Nyaya Sanhita (BNS), 2023**:
   - Updated criminal provisions for assault, unlawful confinement, criminal intimidation, and sexual violence.
3. **Legal Services Authorities Act, 1987 (NALSA / SLSA / DLSA)**:
   - Section 12 entitlement to free, state-funded legal aid counsel.
4. **Tele-MANAS & Sakhi One Stop Centre Schemes**:
   - Integrated psychosocial counseling and medical support pipelines.

---

## 🛡️ Safety & Privacy Measures

- **Instant Quick Exit**: Pressing the **`Esc` key** or clicking the floating **"Quick Exit"** button immediately redirects the browser to Google Search and replaces the browser history entry.
- **Client-Side Data Isolation**: Case narratives analyzed in the browser remain in client storage and are not transmitted to third-party ad networks.
- **Anonymous Visitor Mode**: Citizens can access all helpline directories, legal rights references, and the AI assistant without creating an account or providing identifiable credentials.

---

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
