# Kaizen HR Consultants Website

## Overview

This is a professional single-page business website for Kaizen HR Consultants, an HR consulting firm that connects talent with opportunities. The application is a modern full-stack web application built with React (Vite) on the frontend and Express.js on the backend, featuring a contact form for lead generation and comprehensive information about HR services.

The website showcases 10 core HR services including recruitment, consulting, executive search, payroll management, training, compliance, performance management, employee relations, benefits administration, and workforce planning. It follows a B2B professional design approach inspired by Stripe's clean professionalism and Linear's modern typography.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type safety
- Vite as the build tool and development server
- Single-page application (SPA) with client-side routing using Wouter
- Component-based architecture with functional components and hooks

**UI Component System:**
- shadcn/ui component library (New York style variant) for consistent, accessible components
- Radix UI primitives for headless component functionality
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (light mode primary, with dark mode support)

**Design System:**
- Typography: Inter font family from Google Fonts
- Color palette: Indigo primary (#4F46E5), cyan secondary (#06B6D4), neutral grays
- Spacing system: Tailwind's 4/6/8/12/16/20/24 unit scale
- Responsive grid layouts with mobile-first approach
- Custom illustrations (SVG-based) for visual identity instead of stock imagery

**State Management:**
- TanStack Query (React Query) for server state management and API caching
- React Hook Form with Zod validation for form handling
- React context for UI state (toasts, tooltips)

**Key Frontend Features:**
- Sticky header with smooth scroll navigation
- Hero section with gradient text and dual CTAs
- Service grid showcasing 10 HR services with custom icons
- Vision & Mission section with card-based layout
- Terms & Conditions section for legal transparency
- Contact form with validation and submission
- Responsive mobile-friendly design throughout

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server
- TypeScript for type-safe server code
- HTTP server creation for potential WebSocket support

**API Structure:**
- RESTful API design
- Single POST endpoint `/api/contact` for form submissions
- Zod schema validation for request data
- JSON request/response format
- Error handling with appropriate HTTP status codes

**Development Setup:**
- Vite middleware integration for HMR in development
- Custom logging middleware for API requests
- Static file serving for production builds
- Environment-based configuration

**Form Processing Flow:**
1. Client submits contact form
2. Server validates with Zod schema
3. Console logging (production would integrate email/CRM)
4. Returns JSON success/error response

### Data Storage

**Current Implementation:**
- No persistent database (contact form submissions logged to console)
- In-memory storage interface defined for future expansion
- Drizzle ORM configured for PostgreSQL (infrastructure ready, not actively used)

**Database Configuration (Prepared but Inactive):**
- Drizzle Kit configured with PostgreSQL dialect
- Schema definition location: `shared/schema.ts`
- Migration output directory: `./migrations`
- Connection via `DATABASE_URL` environment variable
- Neon serverless PostgreSQL driver included

**Session Management:**
- `connect-pg-simple` package included for future PostgreSQL-backed sessions
- Currently no authentication or session management implemented

### External Dependencies

**UI & Styling:**
- Tailwind CSS - Utility-first CSS framework
- shadcn/ui - Component collection built on Radix UI
- Radix UI - Headless accessible component primitives (20+ packages)
- Lucide React - Icon library
- class-variance-authority - CSS variant management
- tailwind-merge - Tailwind class conflict resolution

**Form Handling:**
- React Hook Form - Performant form management
- @hookform/resolvers - Validation resolver integration
- Zod - Schema validation library
- drizzle-zod - Zod schema generation from Drizzle schemas

**Data Fetching:**
- TanStack Query - Server state management and caching
- Built-in fetch API for HTTP requests

**Database (Configured but Not Active):**
- Drizzle ORM - TypeScript ORM with PostgreSQL support
- @neondatabase/serverless - Neon serverless PostgreSQL driver
- Drizzle Kit - CLI for migrations and schema management

**Development Tools:**
- Vite - Build tool and dev server
- TypeScript - Type safety across stack
- ESBuild - Server bundle compilation
- @replit/vite-plugin-runtime-error-modal - Development error overlay
- @replit/vite-plugin-cartographer - Replit integration
- @replit/vite-plugin-dev-banner - Development banner

**Third-Party Services (Planned):**
- Email service integration (not implemented) - for contact form notifications
- CRM integration (not implemented) - for lead management
- Analytics (not implemented) - for traffic monitoring

**Build & Deployment:**
- Production build outputs to `dist/public` (client) and `dist` (server)
- Static asset serving from compiled build
- Environment variable configuration for DATABASE_URL
- Node.js runtime environment