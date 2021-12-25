import Image from "next/image";
import { forwardRef } from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group p-2 transition-all duration-200 ease-in-out transform sm:hover:scale-125 hover:z-50"
    >
      <Image
        priority
        alt=""
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="text-white mt-1 text-2xl transition-all duration-100 ease-out group-hover:font-bold">
          {result.original_name || result.title}
        </h2>
        <p className="flex  items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} `}
          {""}
          {result.release_date || result.first_air_date}.{""}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});
Thumbnail.displayName = "Thumbnail";
export default Thumbnail;
