import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from './JobCard';
import JobDescription from './JobDescription';
import { fetchOpportunities, fetchOpportunityById, getBookmarks, createBookmark, deleteBookmark } from '../services/api';
import { logout, getToken } from '../services/auth';

const JobListingDashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const token = getToken();
        const [jobsData, bookmarksData] = await Promise.all([
          fetchOpportunities(),
          getBookmarks(token).catch(() => [])
        ]);
        setJobs(jobsData);
        setBookmarks(bookmarksData.map(b => b.eventID));
        setError(null);
      } catch (err) {
        setError('Failed to load job listings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleJobClick = async (job) => {
    try {
      const detailedJob = await fetchOpportunityById(job.id);
      setSelectedJob(detailedJob);
    } catch (err) {
      setSelectedJob(job);
    }
  };

  const handleBookmarkToggle = async (jobId) => {
    const token = getToken();
    const isBookmarked = bookmarks.includes(jobId);
    try {
      if (isBookmarked) {
        await deleteBookmark(jobId, token);
        setBookmarks(bookmarks.filter(id => id !== jobId));
      } else {
        await createBookmark(jobId, token);
        setBookmarks([...bookmarks, jobId]);
      }
    } catch (err) {
      console.error('Bookmark error:', err);
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{showBookmarks ? 'Bookmarked Jobs' : 'Job Listings'}</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Welcome, {user.name}</span>
            <button
              onClick={() => setShowBookmarks(!showBookmarks)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showBookmarks ? 'All Jobs' : 'Bookmarks'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
        
        {!selectedJob ? (
          <div className="space-y-6">
            {(() => {
              const displayJobs = showBookmarks ? jobs.filter(job => bookmarks.includes(job.id)) : jobs;
              if (displayJobs.length === 0) {
                return (
                  <div className="text-center py-12" data-testid="no-jobs">
                    <p className="text-gray-600 text-lg">
                      {showBookmarks ? 'No bookmarked jobs found' : 'No job positions found'}
                    </p>
                  </div>
                );
              }
              return displayJobs.map((job) => (
                <div key={job.id} className="hover:scale-105 transition-transform">
                  <JobCard 
                    job={job} 
                    isBookmarked={bookmarks.includes(job.id)}
                    onBookmarkToggle={handleBookmarkToggle}
                    onJobClick={() => handleJobClick(job)}
                  />
                </div>
              ));
            })()}
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
