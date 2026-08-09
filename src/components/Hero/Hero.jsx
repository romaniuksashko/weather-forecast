function Hero() {
  return (
    <>
      <h1>Weather dashboard</h1>
      <p>
        Create your personal list of favorite cities and always be aware of the
        weather.
      </p>
      <p>
        October 2023 Friday, 13<sup>th</sup>
      </p>
      <form>
        <input type="text" placeholder="Search location..." />
        <button type="submit">
          <svg>
            <use href="../../src/images/symbol-defs.svg#search"></use>
          </svg>
        </button>
      </form>
    </>
  );
}

export default Hero;
