import React from "react";

function Project({ image, title, description, website, sourceCode, tags }) {
  const tagColors = [
    "bg-blue-100 text-blue-600 hover:bg-blue-300",
    "bg-green-100 text-green-600 hover:bg-green-300",
    "bg-red-100 text-red-600 hover:bg-red-300",
    "bg-purple-100 text-purple-600 hover:bg-purple-300",
    "bg-yellow-100 text-yellow-600 hover:bg-yellow-300",
  ];

  return (
    <div className=" bg-white p-6 rounded-lg shadow-md">
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
          className="bg-orange-500 text-black font-medium py-2 px-4 rounded hover:bg-yellow-400 transition"
        >
          View Website
        </a>
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-black font-medium py-2 px-4 rounded hover:bg-yellow-400 transition"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
}

export default Project;
