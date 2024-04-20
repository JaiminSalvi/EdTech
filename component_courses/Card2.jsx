import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ title, Channel, date }) => {
  return (
    <>
      <div className=" ml-2 mr-4 w-full">
        <div className="flex justify-between shadow p-4 rounded-lg bg-white ">
          <div className="flex  justify-center relative rounded-lg overflow-hidden h-30">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-40 h-40">
              <img
                src="${image}"
                alt="Not Found"
                className="object-cover w-full h-full"
                id="${item.id}"
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
          </div>
          <div className="mt-4">
            <h2
              className="font-medium text-base md:text-lg text-gray-800 line-clamp-1 text-center"
              title="${item.volumeInfo.title}"
            >
              {title}
            </h2>
            <p
              className="mt-2 text-sm text-gray-800 line-clamp-1 text-center"
              title="${authors}, ${date}"
            >
              {Channel}, {date}
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <Link to="/courses/playlist">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded w-24"
                onClick="viewer('${item.volumeInfo.industryIdentifiers[0].identifier}','${item.volumeInfo.industryIdentifiers[1].identifier}')"
              >
                Watch Now
              </button>
            </Link>
            <Link to="/courses/quiz">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded w-24"
                onClick="buy(event)"
              >
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
