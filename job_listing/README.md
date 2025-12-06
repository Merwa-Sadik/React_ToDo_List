# Job Listing Application

A React-based job listing application with LinkedIn-style job cards and detailed job descriptions.

## Features

- **Job Cards**: LinkedIn-style job cards with company logo, title, location, categories, and applicant count
- **Job Description Dashboard**: Detailed view showing responsibilities, ideal candidate, requirements, and skills
- **Responsive Design**: Built with Tailwind CSS for a modern, responsive UI
- **Interactive Navigation**: Click on job cards to view detailed descriptions

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
job_listing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── JobCard.jsx          # LinkedIn-style job card component
│   │   ├── JobDescription.jsx   # Detailed job description component
│   │   └── JobListingDashboard.jsx  # Main dashboard component
│   ├── data/
│   │   └── jobData.json         # Job listings data
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── tailwind.config.js
```

## Components

### JobCard
Displays a summary of the job posting with:
- Company logo (A2SV branding)
- Job title and company name
- Location avatars
- Category tags
- Job description preview
- Bookmark count and applicant count

### JobDescription
Shows detailed information including:
- Full job description
- Responsibilities
- Ideal candidate criteria
- When & where information
- Job details (dates, location)
- Categories and required skills

### JobListingDashboard
Main component that:
- Lists all job cards
- Handles navigation between list and detail views
- Manages selected job state

## Customization

- Modify `src/data/jobData.json` to add or edit job listings
- Update Tailwind classes in components for styling changes
- Add avatar images to the `public` folder and reference them in the components
