# Supabase Setup Guide for Image Institute

To make your website's Admin Dashboard and Student Status features work, you need to set up a free project on [Supabase](https://supabase.com/).

## 1. Create a Project
- Sign up at Supabase and create a new project called **ImageInstitute**.
- Once created, go to **Project Settings > API** and copy the following:
  - `Project URL`
  - `anon` public key
- Paste these into your `.env.local` file in your project folder.

## 2. Setup the Database
Go to the **SQL Editor** in the left sidebar of Supabase and run this command to create your students table:

```sql
-- Create the students table
CREATE TABLE students (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  course TEXT NOT NULL,
  status TEXT DEFAULT 'in-progress',
  certificate_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Realtime (optional but recommended)
alter publication supabase_realtime add table students;
```

## 3. Setup Storage for Certificates
- Go to the **Storage** tab in the left sidebar.
- Click **New Bucket**.
- Set the name to `certificates`.
- **CRITICAL**: Make the bucket **Public** so students can download their certificates.
- Set the Policy to "Allow anyone to upload" (for admin) or refine it for authenticated users.

### Policy for Authenticated Uploads (Recommended):
- Go to **Policies** in Storage.
- Create a policy for the `certificates` bucket.
- Select "Allow INSERT for authenticated users".

## 4. Setup Admin Authentication
- Go to **Authentication > Users**.
- Click **Add User** and create an account with an email (e.g., `admin@image.com`) and a strong password.
- This will be the account you use to log in to `/admin/login`.

---

### Deployment on Vercel
When you deploy on Vercel, make sure to add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to the **Environment Variables** in the Vercel dashboard.
