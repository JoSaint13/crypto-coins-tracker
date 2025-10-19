# Technical Specification

## 1. Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.x
- **State Management**: Zustand
- **Routing**: React Router v6
- **UI Library**: Tailwind CSS, Shadcn/ui
- **Form Handling**: React Hook Form + Zod
- **Data Fetching**: TanStack Query v5
- **Key Dependencies**:
  * Axios - HTTP requests
  * Chart.js - Data visualization
  * React Icons - Icon library
  * date-fns - Date manipulation

### Backend
- **Runtime**: Node.js 20 LTS
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL 15 with Prisma ORM
- **Authentication**: NextAuth.js with JWT
- **API Type**: REST with potential GraphQL migration path

### Infrastructure & DevOps
- **Hosting**: Vercel for frontend and backend
- **Database Hosting**: Supabase
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry, Vercel Analytics
- **Analytics**: PostHog

## 2. System Architecture

### Architecture Pattern
Hybrid Server-Side Rendering (Next.js App Router) with client-side dynamic components

### Component Diagram
```
┌─────────────────────────────────────────┐
│           User's Browser                │
│  ┌─────────────────────────────────┐   │
│  │   React App (Next.js Frontend)  │   │
│  │   - Server Components           │   │
│  │   - Client Components           │   │
│  └─────────────┬───────────────────┘   │
└────────────────┼───────────────────────┘
                 │ HTTPS
                 ▼
┌─────────────────────────────────────────┐
│         API Layer / Backend             │
│  ┌─────────────────────────────────┐   │
│  │   Next.js API Routes            │   │
│  │   - Authentication              │   │
│  │   - Data Transformation         │   │
│  └─────────────┬───────────────────┘   │
└────────────────┼───────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│          Data Layer                     │
│  ┌──────────────┐  ┌──────────────┐   │
│  │  PostgreSQL  │  │  Redis Cache │   │
│  │  (Supabase)  │  │  (Sessions)  │   │
│  └──────────────┘  └──────────────┘   │
└─────────────────────────────────────────┘
```

## 3. Data Models & Database Schema

### User Model
```typescript
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  passwordHash  String
  portfolios    Portfolio[]
  transactions  Transaction[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Portfolio {
  id            String    @id @default(cuid())
  userId        String
  name          String
  user          User      @relation(fields: [userId], references: [id])
  holdings      Holding[]
  createdAt     DateTime  @default(now())
}

model Holding {
  id            String    @id @default(cuid())
  portfolioId   String
  coinId        String
  quantity      Float
  avgBuyPrice   Float
  portfolio     Portfolio @relation(fields: [portfolioId], references: [id])
  createdAt     DateTime  @default(now())
}

model Transaction {
  id            String    @id @default(cuid())
  userId        String
  coinId        String
  type          TransactionType
  quantity      Float
  price         Float
  timestamp     DateTime
  user          User      @relation(fields: [userId], references: [id])
}

enum TransactionType {
  BUY
  SELL
  TRANSFER
}
```

## 4. API Design

### Authentication Endpoints
```
POST   /api/auth/signup        - Create new user account
POST   /api/auth/login         - Login with email/password
POST   /api/auth/logout        - Invalidate session
GET    /api/auth/me            - Get current user profile
```

### Portfolio Endpoints
```
GET    /api/portfolios         - List user's portfolios
POST   /api/portfolios         - Create new portfolio
GET    /api/portfolios/:id     - Get portfolio details
PUT    /api/portfolios/:id     - Update portfolio
DELETE /api/portfolios/:id     - Delete portfolio

POST   /api/portfolios/:id/holdings  - Add holding
DELETE /api/portfolios/:id/holdings/:holdingId  - Remove holding
```

### Transaction Endpoints
```
GET    /api/transactions       - List user's transactions
POST   /api/transactions       - Record new transaction
GET    /api/transactions/:id   - Get transaction details
```

## 5. Frontend Architecture

### Project Structure
```
/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (auth)/             # Authentication pages
│   │   ├── (dashboard)/        # Dashboard pages
│   │   └── api/                # API routes
│   ├── components/
│   │   ├── ui/                 # Shared UI components
│   │   ├── portfolio/          # Portfolio-specific components
│   │   └── transactions/       # Transaction components
│   ├── lib/
│   │   ├── api.ts              # API client
│   │   ├── auth.ts             # Authentication utilities
│   │   └── utils.ts            # Helper functions
│   ├── hooks/                  # Custom React hooks
│   ├── store/                  # Zustand stores
│   └── styles/                 # Global styles
└── prisma/                     # Prisma schema and migrations
```

## 6. Security Implementation

### Authentication Flow
1. User registers/logs in
2. NextAuth generates secure JWT
3. Token stored in secure, httpOnly cookie
4. All authenticated routes validate token
5. Implement refresh token mechanism

### Security Checklist
- [x] Zod input validation
- [x] Bcrypt password hashing
- [x] Rate limiting on auth endpoints
- [x] CSRF protection
- [x] Secure headers configuration
- [x] Environment-specific configuration

## 7. Performance Optimization

### Caching Strategies
- Redis for session management
- TanStack Query for data caching
- Incremental Static Regeneration (ISR)

### Performance Targets
- Lighthouse Score: > 90
- Initial Load Time: < 2.5s
- Time to Interactive: < 3.5s

## 8. Deployment & DevOps

### Continuous Integration
- Automated testing on every PR
- Automatic deployment to staging
- Production deployment via manual approval

### Environment Configuration
- Development: Local PostgreSQL
- Staging: Supabase staging database
- Production: Supabase production database with read replicas

## 9. MVP Development Phases

### Phase 1: Foundation (2 weeks)
- [ ] Authentication system
- [ ] Basic portfolio creation
- [ ] Initial data models
- [ ] Core API endpoints

### Phase 2: Core Features (2 weeks)
- [ ] Portfolio tracking
- [ ] Transaction recording
- [ ] Basic reporting
- [ ] Initial UI components

### Phase 3: Polish (2 weeks)
- [ ] Advanced analytics
- [ ] Performance optimization
- [ ] Error handling
- [ ] Responsive design

### Phase 4: Launch Preparation (2 weeks)
- [ ] Comprehensive testing
- [ ] Documentation
- [ ] Beta user feedback
- [ ] Final refinements