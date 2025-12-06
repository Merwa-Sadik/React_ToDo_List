import React from 'react';

const JobDescription = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
        <p className="text-gray-600">{job.company}</p>
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </section>

      {/* Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2">
          {job.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-700">{responsibility}</li>
          ))}
        </ul>
      </section>

      {/* Ideal Candidate */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ideal Candidate</h2>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-gray-700"><span className="font-semibold">Age:</span> {job.ideal_candidate.age}</p>
          <p className="text-gray-700"><span className="font-semibold">Gender:</span> {job.ideal_candidate.gender}</p>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {job.ideal_candidate.traits.map((trait, index) => (
            <li key={index} className="text-gray-700">{trait}</li>
          ))}
        </ul>
      </section>

      {/* When & Where */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">When & Where</h2>
        <p className="text-gray-700">{job.when_where}</p>
      </section>

      {/* About */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Posted On</p>
            <p className="font-semibold text-gray-900">{job.about.posted_on}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Deadline</p>
            <p className="font-semibold text-gray-900">{job.about.deadline}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Location</p>
            <p className="font-semibold text-gray-900">{job.about.location}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Start Date</p>
            <p className="font-semibold text-gray-900">{job.about.start_date}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">End Date</p>
            <p className="font-semibold text-gray-900">{job.about.end_date}</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {job.about.categories.map((category, index) => (
            <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Required Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Required Skills</h2>
        <div className="flex flex-wrap gap-2">
          {job.about.required_skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobDescription;
