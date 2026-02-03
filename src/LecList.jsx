import lectures from "./data/Lecture";
import LecCard from "./LecCard";

const LecList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {lectures.map((lec) => (
        <LecCard key={lec.id} lecture={lec} />
      ))}
    </div>
  );
};

export default LecList;
