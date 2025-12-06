import React from 'react';

const JobDescription = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
        <p className="text-gray-600">{job.orgName || job.company}</p>
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </section>

      {/* Responsibilities */}
      {job.responsibilities && job.responsibilities.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-gray-700">{responsibility}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Ideal Candidate */}
      {job.idealCandidate && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ideal Candidate</h2>
          <p className="text-gray-700 leading-relaxed">{job.idealCandidate}</p>
        </section>
      )}

      {/* When & Where */}
      {job.whenAndWhere && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">When & Where</h2>
          <p className="text-gray-700">{job.whenAndWhere}</p>
        </section>
      )}

      {/* About */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About</h2>
        <div className="grid grid-cols-2 gap-4">
          {job.datePosted && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Posted On</p>
              <p className="font-semibold text-gray-900">{new Date(job.datePosted).toLocaleDateString()}</p>
            </div>
          )}
          {job.deadline && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Deadline</p>
              <p className="font-semibold text-gray-900">{new Date(job.deadline).toLocaleDateString()}</p>
            </div>
          )}
          {job.location && job.location.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-semibold text-gray-900">{job.location.join(', ')}</p>
            </div>
          )}
          {job.startDate && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Start Date</p>
              <p className="font-semibold text-gray-900">{new Date(job.startDate).toLocaleDateString()}</p>
            </div>
          )}
          {job.endDate && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">End Date</p>
              <p className="font-semibold text-gray-900">{new Date(job.endDate).toLocaleDateString()}</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      {job.categories && job.categories.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {job.categories.map((category, index) => (
              <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {category}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Required Skills */}
      {job.requiredSkills && job.requiredSkills.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-2">
            {job.requiredSkills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default JobDescription;
