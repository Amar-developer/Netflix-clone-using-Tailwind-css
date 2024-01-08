import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  });

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);

    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);

    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white  md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FaCircleChevronLeft
          onClick={slideLeft}
          size={30}
          className="bg-black text-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer  z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => {
            return <Movies key={id} item={item} />;
          })}
        </div>
        <FaCircleChevronRight
          onClick={slideRight}
          size={30}
          className="bg-black text-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer  z-10 hidden  group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
