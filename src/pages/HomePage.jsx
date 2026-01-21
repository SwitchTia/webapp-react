import "./HomePage.css";


export default function HomePage() {
  return (
    <>

      <section className="home-container">

        <div className="hero-section">
          <h1>Unlimited movies, TV shows, and more</h1>
        </div>

        <div className="search-section">
          <h2>
            Ready to watch? Browse our collection of amazing films and series.
          </h2>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Searching for something?"

            />

            <button >Search</button>
          </div>
          <h2 >Watch anywhere. Cancel anytime.</h2>

        </div>
      </section>
    </>
  );
}