import React from 'react';

const Card = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <img
        src="https://example.com/path/to/your/image.jpg" // Replace with the actual image URL
        alt="IGH"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">IGH</h2>
        <p className="mb-4">Guest House for stay on campus.</p>
        <a
          href="https://www.google.com/maps" // Replace with the actual Google Maps link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Show in Google Maps
        </a>
      </div>
    </div>
  );
};

export default Card;

