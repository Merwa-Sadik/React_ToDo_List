import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JobDescription from './JobDescription';
import { fetchOpportunities, fetchOpportunityById } from '../services/api';

const JobListingDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const data = await fetchOpportunities();
        setJobs(data);
        setError(null);
      } catch (err) {
        setError('Failed to load job listings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const handleJobClick = async (job) => {
    try {
      const detailedJob = await fetchOpportunityById(job.id);
      setSelectedJob(detailedJob);
    } catch (err) {
      setSelectedJob(job);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading job listings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Job Listings</h1>
        
        {!selectedJob ? (
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} onClick={() => handleJobClick(job)} className="cursor-pointer hover:scale-105 transition-transform">
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
