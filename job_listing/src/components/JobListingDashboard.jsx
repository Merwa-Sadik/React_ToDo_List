import React, { useState } from 'react';
import JobCard from './JobCard';
import JobDescription from './JobDescription';
import jobData from '../data/jobData.json';

const JobListingDashboard = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Job Listings</h1>
        
        {!selectedJob ? (
          <div className="space-y-6">
            {jobData.job_postings.map((job, index) => (
              <div key={index} onClick={() => setSelectedJob(job)} className="cursor-pointer hover:scale-105 transition-transform">
                <JobCard job={job} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedJob(null)}
              className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Back to Listings
            </button>
            <JobDescription job={selectedJob} />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListingDashboard;
