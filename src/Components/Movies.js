import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movies = ({ item }) => {
  const tagName = "Originals";
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const truncateTitle = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title || item.name,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240] lg:w-[280] inline-block  cursor-pointer relative p-2 ">
      <p className="top-4 right-4 absolute z-100 ">
        <RiNetflixFill className="text-red-600 " />
      </p>
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />

      <button className="text-white text-xs absolute bottom-2 left-[35%] rounded font-bold bg-red-600 p-1 items-center">
        {tagName}
      </button>
      <div className="text-white absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {truncateTitle(item?.title, 25) || item?.name}
        </p>

        <div className="flex z-100 ">
          <p onClick={saveShow}>
            {like ? (
              <FaHeart className="text-gray-300 top-4 left-4 absolute" />
            ) : (
              <FaRegHeart className="text-gray-300 top-4 left-4 absolute" />
            )}
          </p>
          <p className="top-4 right-4 absolute z-100 ">
            <RiNetflixFill className="text-red-600 " />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
