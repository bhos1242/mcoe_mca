# MCA Faculty Management System

A comprehensive faculty management system for the MCA Department at Modern College of Engineering, Pune. This application provides authentication, profile management, and a public faculty directory with modern web technologies.

## 🚀 Features

### Authentication System
- ✅ Secure username/password login for faculty members
- ✅ Next.js 15 authentication with session management
- ✅ JWT-based authentication with secure cookies
- ✅ Protected routes with middleware

### Faculty Profile Management
- ✅ Create and edit faculty profiles
- ✅ Comprehensive profile information (qualifications, experience, courses, research)
- ✅ Database-driven with Prisma ORM
- ✅ Form validation with Zod schemas

### Public Faculty Directory
- ✅ Browse all faculty profiles
- ✅ Responsive design with shadcn/ui components
- ✅ Search and filter capabilities
- ✅ Individual faculty profile pages

### Technical Features
- ✅ Next.js 15 with App Router
- ✅ PostgreSQL database with Prisma ORM
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui component library
- ✅ Error handling and loading states
- ✅ Responsive design

## 🛠️ Technology Stack

- **Framework**: Next.js 15
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Authentication**: Custom JWT implementation
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Validation**: Zod
- **Forms**: React Hook Form

## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Faculty Management](#faculty-management)
- [Database Setup](#database-setup)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database (or use the provided Neon database)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bhos1242/mcoe_mca.git
   cd mcoe_mca
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   The `.env` file is already configured with the database connection. If you need to use a different database, update the `DATABASE_URL`:
   ```env
   DATABASE_URL="your_postgresql_connection_string"
   JWT_SECRET="your_jwt_secret_key"
   ```

4. **Database Setup:**
   ```bash
   # Generate Prisma client
   npm run db:generate

   # Run database migrations
   npm run db:migrate

   # Seed the database with existing faculty data
   npm run migrate-faculty

   # Create a test user for login
   npm run create-test-user
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser and navigate to `http://localhost:3000` (or the port shown in terminal)**

## 🔐 Authentication

### Default Login Credentials

After running the migration scripts, you can use these credentials:

**Existing Faculty Members:**
- Email: `pradnya.muley@moderncoe.edu.in` | Password: `faculty123`
- Email: `smita.sontakke@moderncoe.edu.in` | Password: `faculty123`

**Test User (for creating new profiles):**
- Email: `test@moderncoe.edu.in` | Password: `test123`

### Login Process
1. Navigate to `/login`
2. Enter your credentials
3. Access the faculty dashboard at `/dashboard`

## 👨‍🏫 Faculty Management

### For Faculty Members
1. **Login** with your credentials
2. **Create Profile** (if first time) or **Edit Profile**
3. **Manage** your academic information:
   - Personal details
   - Qualifications and certifications
   - Experience and courses
   - Research projects and publications
   - Outreach activities

### For Students/Public
1. **Browse Faculty Directory** at `/faculty`
2. **View Individual Profiles** at `/faculty/[faculty-id]`
3. **Access Course Materials** and research information

## 🗄️ Database Setup

The application uses PostgreSQL with Prisma ORM. The database schema includes:

- **Users**: Authentication and account management
- **Faculty**: Profile information and academic details
- **Qualifications**: Educational background
- **Experience**: Professional experience
- **Courses**: Teaching assignments with materials
- **Research**: Projects and publications
- **Outreach**: Community engagement activities

## 📁 Project Structure

```
mcoe_mca/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   └── login/                 # Login page
│   │   ├── (pages)/
│   │   │   ├── faculty/
│   │   │   │   ├── [id]/             # Individual faculty profiles
│   │   │   │   └── page.tsx          # Faculty directory
│   │   │   └── ...
│   │   ├── api/
│   │   │   ├── auth/                 # Authentication endpoints
│   │   │   └── faculty/              # Faculty CRUD operations
│   │   ├── dashboard/                # Faculty management dashboard
│   │   └── components/               # Shared components
│   ├── components/
│   │   └── ui/                       # shadcn/ui components
│   ├── lib/
│   │   ├── auth.ts                   # Authentication utilities
│   │   ├── prisma.ts                 # Database client
│   │   └── utils.ts                  # Utility functions
│   └── scripts/                      # Database migration scripts
├── prisma/
│   ├── schema.prisma                 # Database schema
│   └── migrations/                   # Database migrations
├── public/                           # Static assets
└── ...
```

## 🔌 API Routes

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user data

### Faculty Management
- `GET /api/faculty` - Get all faculty members
- `GET /api/faculty/[id]` - Get specific faculty member
- `POST /api/faculty/create` - Create new faculty profile
- `PUT /api/faculty/[id]` - Update faculty profile

## 🧪 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run db:generate     # Generate Prisma client
npm run db:migrate      # Run database migrations
npm run db:studio       # Open Prisma Studio

# Data Management
npm run migrate-faculty # Migrate existing faculty data
npm run create-test-user # Create test user account
```

## How to Contribute

We welcome contributions to improve this project! This project is intended for learning and testing by MCA students at Modern College. Please follow these steps to contribute:

1. **Fork the repository** on GitHub.
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/your-username/mcoe_mca.git
   cd mcoe_mca
   ```
3. **Create a new feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** in the codebase.
5. **Stage your changes**:
   ```bash
   git add .
   ```
6. **Commit your changes** with a meaningful message:
   ```bash
   git commit -m "Add: short description of your feature or fix"
   ```
7. **Pull the latest changes** from the main branch to avoid conflicts:
   ```bash
   git pull origin main
   ```
8. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
9. **Create a Pull Request** from your branch to the main repository.

### Building and Manual Testing

- Before pushing, check that the project builds successfully:
  ```bash
  npm run build
  ```
- Manually test your changes in the browser at `http://localhost:3000`.
- **Note:** There are currently no automated tests. Please ensure your changes do not break existing functionality.

## Reporting Issues

If you find a bug or want to request a feature or enhancement, please use the following GitHub issue templates:

- [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)
- [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md)
- [Enhancement](.github/ISSUE_TEMPLATE/enhancement.md)

When reporting issues, provide as much detail as possible to help us reproduce and fix the problem.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Framework and Technology Guidelines

- This project is built using **Next.js 15** as the full-stack framework. All development should use Next.js 15 only.
- You may use **Prisma** for database access if needed.
- Using other backend frameworks (such as Spring Boot, Express, Django, etc.) is **not supported or permitted** in this project. All backend and frontend logic should be implemented within the Next.js 15 framework.
