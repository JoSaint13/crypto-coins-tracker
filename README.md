# CryptoCompass

> Empowering crypto investors with intelligent, comprehensive portfolio management

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/user/cryptocompass)

## Overview

CryptoCompass is a powerful cryptocurrency tracking and portfolio management platform designed to help intermediate crypto investors make informed investment decisions. Track, analyze, and optimize your crypto investments across multiple exchanges with ease.

## Features

- ✨ Multi-exchange portfolio tracking
- 🚀 Real-time cryptocurrency price monitoring
- 💡 Advanced performance analytics
- 🔒 Secure authentication and data protection
- 📊 Comprehensive investment insights
- 💸 Tax reporting assistance

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS
- Zustand for state management
- TanStack Query
- Chart.js

**Backend:**
- Next.js 14
- Node.js 20 LTS
- PostgreSQL with Prisma ORM
- NextAuth.js

**Deployment:**
- Vercel
- Supabase

## Quick Start

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
PostgreSQL 15
```

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/cryptocompass.git

# Install dependencies
cd cryptocompass
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
npx prisma migrate dev

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Project Structure

```
/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Next.js application pages
│   ├── lib/            # Utility functions
│   ├── hooks/          # Custom React hooks
│   └── styles/         # Global styles
├── prisma/             # Database schema
├── public/             # Static assets
└── tests/              # Test files
```

## Development

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run test        # Run tests
npm run lint        # Lint code
```

### Environment Variables

```env
DATABASE_URL=postgresql://username:password@localhost:5432/cryptocompass
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Testing

```bash
# Run unit tests
npm run test

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## Deployment

### Vercel Deployment

```bash
npm run build
vercel --prod
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details. 

Key contribution guidelines:
1. Fork the repository
2. Create a feature branch
3. Commit with clear, descriptive messages
4. Open a pull request with a detailed description

## License

MIT License - see [LICENSE](LICENSE) for details.

## Support

For support, please open a GitHub issue or email support@cryptocompass.com.

---

**Built with ❤️ by the CryptoCompass Team**