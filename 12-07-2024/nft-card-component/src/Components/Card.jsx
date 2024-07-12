function Card() {
  return (
    <div className="bg-cardBg w-1/5 p-3 rounded-2xl">
      <img src="images/image-equilibrium.jpg" className="rounded-lg" />
      <h2>Equilibrium #3429</h2>
      <p>Our Equilibrium collection promotes balance and calm.</p>

      <div>
        <span>
          <img src="images/icon-ethereum.svg" alt="ethereum icon" />
          <span>ETH</span>
        </span>
        <span>
          <img src="images/icon-clock.svg" alt="clock icon" />
          <span>3 days left</span>
        </span>
      </div>
      <hr />

      <div>
        <img src="images/image-avatar.png" alt="avatar image" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export { Card };
