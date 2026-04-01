# FieldOps Dashboard

Live Demo: https://field-ops-dashboard.vercel.app/

FieldOps Dashboard is a construction operations management dashboard built with Next.js, TypeScript, and Tailwind CSS. It is designed to simulate a real internal platform used by site teams to monitor equipment, track field activity, and manage operational workflows through a clean and structured interface.

---

## The Problem

In large-scale construction environments, heavy equipment represents one of the most critical and expensive assets. Despite this, many teams lack real-time visibility into equipment status and utilization.

* Data is often fragmented across spreadsheets and manual reporting systems, leading to inconsistencies
* Equipment that is idle but marked as available results in underutilization and financial loss
* Maintenance issues are not always communicated in real time, causing project delays
* Site teams and office teams operate with different information, creating coordination gaps

These challenges directly impact project timelines, cost efficiency, and operational clarity.

---

## Why Use FieldOps Dashboard

FieldOps Dashboard addresses these challenges by providing a centralized and responsive interface for equipment tracking and operational awareness.

* Single source of truth through a centralized API-driven data layer
* Real-time visibility into equipment status across multiple sites
* Immediate identification of assets that are idle or under repair
* Structured dashboard metrics for quick decision-making
* Resilient UI with loading states and error handling for real-world conditions

The system is designed to reduce communication gaps and improve overall operational efficiency.

---

## Who Is This For

* Site Managers
  To quickly identify available equipment on-site and report maintenance issues

* Operations Managers
  To monitor equipment usage and distribution across different project locations

* Maintenance Teams
  To filter and prioritize equipment that requires repair or inspection

* Leadership and Stakeholders
  To gain high-level visibility into asset utilization and operational health

---

## Features

### Equipment Tracking

* View equipment by ID, name, site, and status
* Real-time search across all fields
* Maintenance filter for repair-focused workflows
* Status summaries (Ready, In Use, Repair)

### Dashboard Metrics

* API-driven stat cards
* Total asset tracking
* Equipment in repair insights
* Loading state handling for asynchronous data

### Settings and Profile

* Role-based profile interface (Site Manager)
* Notification preferences and configuration
* Language and workspace settings

### API Integration

* Custom Next.js API route (`/api/equipment`)
* Separation of frontend and data layer
* Structured JSON responses with validation
* Designed for future backend or database integration

### UI Design

* Clean card-based layout
* Consistent spacing and typography system
* Responsive structure aligned with modern SaaS dashboards

---

## Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

---

## Project Structure

```id="g2y8dk"
app/
  ├── api/
  ├── equipment/
  ├── settings/
  ├── page.tsx
components/
public/
```

---

## Local Setup

```bash id="9q3mps"
npm install
npm run dev
```

Open http://localhost:3000

---

## What I Focused On

This project focuses on both functionality and product experience. The goal was to move beyond static UI and build a system that behaves like a real-world dashboard, including API-driven data, loading states, and structured component design.

Special attention was given to:

* Clean UI hierarchy and spacing consistency
* Separation of concerns between frontend and API layer
* Realistic data flow and interaction patterns
* Maintainable and scalable component structure

---

## Future Improvements

* Integration with a real database or backend service
* Authentication and role-based access control
* Equipment lifecycle analytics and reporting
* Activity logs and audit trails
* Dark mode and persistent user preferences

---

## Author

Honey Raj
MS Computer Science, Southern Methodist University

---

## Note

This project is actively being improved with enhancements in UI, architecture, and feature depth to better reflect real-world construction operations systems.
