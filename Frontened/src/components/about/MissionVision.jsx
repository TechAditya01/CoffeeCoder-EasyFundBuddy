// src/components/about/MissionVision.jsx
import React from 'react';

const MissionVision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
        <p className="text-gray-600">
          To create impactful solutions that empower people and businesses through technology and innovation.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
        <p className="text-gray-600">
          To be a global leader in technological advancements, making lives easier and businesses more efficient.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;