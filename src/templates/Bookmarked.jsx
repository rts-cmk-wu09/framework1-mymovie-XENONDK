import { FaStar } from "react-icons/fa";

const BookMarked = (props) => {
  return (
    <>
      <article className="dark:shadow-[5px_5px_5px] dark:shadow-[rgba(255,255,255,0.35)] mt-3 mb-7">
        <img src={props.image} className="w-full h-auto rounded-xl" />
        <div>
          <h2 className="dark:text-white text-4xl">{props.title}</h2>
          <div className="flex py-2 ">
            <span className="flex gap-3">
              <FaStar className="text-yellow-300" />
              <p>{props.rating} IDBM</p>
            </span>
            <p className="px-2">/</p>
            <p className="dark:text-white flex-wrap">Release date: {props.releaseDate}</p>
          </div>
          <div className="flex-wrap flex p-2 gap-2">
            <p className="p-1 border-2 border-black border-solid rounded-xl dark:border-white">
              Horror
            </p>
            <p className="p-1 border-2 border-black border-solid rounded-xl dark:border-white">
              Crime
            </p>
            <p className="p-1 border-2 border-black border-solid rounded-xl dark:border-white">
              Action comedy
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default BookMarked;
