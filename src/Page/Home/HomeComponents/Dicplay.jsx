


import { Link } from "react-router-dom";


const Dicplay = () => {
  return (
    <div
  className="h-[45vh] sm:h-[50vh] lg:h-[70vh] w-full lg:w-360 bg-cover bg-center bg-no-repeat"
  style={{
  backgroundImage: `url("${import.meta.env.BASE_URL}Image/dicplay.jfif")`,
}}
>
  <div className="py-20 sm:py-24 lg:py-45 text-center lg:text-left">

    <p className="text-xl sm:text-2xl lg:text-2xl lg:pl-26 text-white font-bold">
      Pause Life. Find Yourself.
    </p>

    <p className="text-2xl sm:text-3xl lg:text-4xl lg:pl-26 font-bold text-black py-3 lg:py-4">
      Sometimes, all you need is a little time <br className="hidden lg:block" />
      away from the rush of life.
    </p>

    <div className="lg:pl-26 flex justify-center lg:justify-start">
      <Link to="/about">
        <button className="px-4 py-2 flex gap-1 items-center text-white bg-gray-400 rounded-md">
          <p className="text-lg sm:text-xl font-semibold text-green-200">
            Explore Your Journey →
          </p>
        </button>
      </Link>
    </div>

  </div>
</div>
  );
};

export default Dicplay;
