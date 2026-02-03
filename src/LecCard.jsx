const LecCard = ({ lecture }) => {
  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border border-gray-200">
      <h4 className="text-gray-900 font-semibold text-lg mb-2">{lecture.title}</h4>
      {lecture.description && (
        <p className="text-gray-600 text-sm mb-4">{lecture.description}</p>
      )}
      <a
        href={lecture.pdf}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
      >
        Open PDF
      </a>
    </div>
  );
};

export default LecCard;
