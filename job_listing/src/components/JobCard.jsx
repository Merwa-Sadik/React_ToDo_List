import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 max-w-2xl mx-auto mb-6">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xl">A2SV</span>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-900 mb-1">{job.title}</h2>
          <p className="text-gray-600 text-sm">{job.company}</p>
        </div>
      </div>

      {/* Location Section */}
      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="text-sm text-gray-700">Addis Ababa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="text-sm text-gray-700">Adama</span>
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-300">
          In Person
        </span>
        {job.about.categories.map((category, index) => (
          <span key={index} className="px-4 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
            {category}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-800 text-sm leading-relaxed mb-4">
        {job.description}
      </p>

      {/* Footer Section */}
      <div className="bg-gray-50 -mx-6 -mb-6 px-6 py-4 rounded-b-lg flex justify-between items-center">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="text-gray-700 font-semibold">446</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-gray-700">34 applicants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
