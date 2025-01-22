import React from "react";

function Project({ image, title, description, website, sourceCode, tags }) {
  const tagColors = [
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-red-100 text-red-600",
    "bg-purple-100 text-purple-600",
    "bg-yellow-100 text-yellow-600",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img
        src={image}
        alt={`${title} project screenshot`}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      {tags && Array.isArray(tags) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                tagColors[index % tagColors.length]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h2 className="text-xl font-semibold my-1">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          View Website
        </a>
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
}

export default Project;
