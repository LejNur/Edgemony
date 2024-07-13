function Card() {
  return (
    <div className="bg-cardBg w-full max-w-sm sm:w-2/4 p-6 m-4 sm:m-6 rounded-2xl flex flex-col  shadow-mainBgShadow">
      <div className="relative">
        <img
          src="images/image-equilibrium.jpg"
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-cyan bg-opacity-40 opacity-0 cursor-pointer hover:opacity-100 transition-opacity">
          <img src="images/icon-view.svg" alt="icon view" />
        </div>
      </div>

      <h2 className="text-white text-2xl font-bold my-3 cursor-pointer hover:text-cyan">
        Equilibrium #3429
      </h2>
      <p className="text-softBlue text-lg font-regular tracking-wider my-4">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="flex justify-between my-4">
        <span className="flex items-center gap-2">
          <img src="images/icon-ethereum.svg" alt="ethereum icon" />
          <span className="text-cyan">0.041 ETH</span>
        </span>
        <span className="flex items-center gap-2">
          <img src="images/icon-clock.svg" alt="clock icon" />
          <span className="text-softBlue">3 days left</span>
        </span>
      </div>
      <hr className="border-1 rounded-xl border-line" />

      <div className="flex justify-start items-center gap-2 my-3">
        <img
          src="images/image-avatar.png"
          alt="avatar image"
          className="w-6 border border-1 rounded-full border-white"
        />
        <p className="text-softBlue font-regular tracking-wider">
          Creation of{" "}
          <span className="text-white font-bold cursor-pointer hover:text-cyan">
            Jules Wyvern
          </span>
        </p>
      </div>
    </div>
  );
}

export { Card };
