# Security Guidelines

## Environment Variables

This project uses environment variables to store sensitive configuration data. **Never commit actual secrets to version control.**

### Setup Instructions

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your actual values in `.env.local`:**
   - `DATABASE_URL`: Your database connection string
   - `JWT_SECRET`: A strong random secret (minimum 32 characters)
   - `NEXTAUTH_SECRET`: Another strong random secret for NextAuth

3. **Generate secure secrets:**
   ```bash
   # Generate a random JWT secret
   openssl rand -base64 32
   
   # Or use Node.js
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

### File Structure

- `.env.example` - Template file (safe to commit)
- `.env.local` - Your actual secrets (never commit)
- `.env` - Now contains only template/documentation (safe to commit)

### Security Best Practices

1. **Never commit sensitive data** to version control
2. **Use strong, unique secrets** for each environment
3. **Rotate secrets regularly** in production
4. **Use environment-specific secrets** (dev, staging, prod)
5. **Monitor for exposed secrets** using tools like GitGuardian

### If Secrets Are Exposed

If you accidentally commit secrets:

1. **Immediately rotate/change** all exposed secrets
2. **Remove the secrets** from Git history
3. **Update all environments** with new secrets
4. **Review access logs** for potential unauthorized access

### Production Deployment

For production deployments on Vercel:

1. Go to your Vercel project settings
2. Add environment variables in the "Environment Variables" section
3. Never use `.env.local` in production - use Vercel's secure environment variable system

## Reporting Security Issues

If you discover a security vulnerability, please email us at security@moderncoe.edu.in instead of opening a public issue.
