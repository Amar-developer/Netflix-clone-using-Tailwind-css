import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
import { FaRegCirclePlay, FaPlus } from "react-icons/fa6";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + " ...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] bg-gradient-to-r from-black absolute"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute  w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="text-black border hover:bg-white bg-gray-200 border-gray-300 rounded py-2 px-5 mr-5 inline-flex items-center">
              <FaRegCirclePlay size={18} className=" mr-2 " /> Play
            </button>
            <button className="text-white border  border-gray-400  hover:border-white  rounded py-2 px-5 inline-flex items-center">
              <FaPlus size={18} className="mr-2" /> Watch Later
            </button>
          </div>
          <p className="text-sm text-gray-300">
            Released : {movie?.release_date}
          </p>
          <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] my-4">
            <span className="text-xl text-white">Overview : </span>
            {truncateString(movie?.overview, 150)}
          </p>
          <div className="flex">
            <div className=" w-10  rounded p-1 bg-red-600 text-[10px] text-white text-center ">
              <p>
                Top <span className="text-xl  ">10</span>
              </p>
            </div>
            <div className=" justify-center items-center h-full text-center mt-3 text-white ml-1 flex">
              <p className="ml-3   text-[12px] md:text-sm">
                Imdb Rating :{" "}
                {Number.parseFloat(movie?.vote_average).toFixed(1)}
              </p>
              <p className="ml-3 text-[12px] md:text-sm ">
                Voting : {movie?.vote_count}{" "}
              </p>
              <p className="ml-3  text-[12px] md:text-sm">
                Language : {movie?.original_language}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
