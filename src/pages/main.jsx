import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-pink-300 min-h-screen flex flex-col justify-center items-center">
      <div className="text-6xl font-bold">최고의 월드컵</div>
      <Link to="/worldcup">
        <button className="bg-blue-300 text-white px-4 py-2 rounded-lg mt-8">
          시 작
        </button>
      </Link>
    </div>
  );
};

export default Main;
