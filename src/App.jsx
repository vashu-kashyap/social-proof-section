import ratingImg from "/icon-star.svg"; // Importing star rating icon
import review from "./data/review.json"; // Importing review data from JSON file

// Main App component
const App = () => {
  return (
    <main className="lg:bg-pattern-top-desktop bg-pattern-top-mobile flex min-h-screen items-center justify-center bg-no-repeat ">
      {/* Review section */}
      <section className="review-section lg:bg-pattern-bottom-desktop flex min-h-screen flex-col items-center justify-center gap-y-10 bg-right-bottom bg-no-repeat px-4 py-16 lg:grid lg:grid-cols-12 lg:px-36 bg-pattern-bottom-mobile   ">
        {/* Introduction */}
        <div className="space-y-5 lg:col-span-4">
          <h1 className="text-center font-league-spartan text-5xl font-bold leading-9 text-very-dark-magenta lg:text-left">
            10,000+ of our users love our products.
          </h1>
          <p className="text-center font-league-spartan text-lg font-medium tracking-wide text-dark-grayish-magenta lg:text-left ">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        {/* Ratings */}
        <div className="col-span-8 w-full lg:w-fit lg:place-self-center">
          <ul className="space-y-4">
            {/* Rating item 1 */}
            <li className="flex flex-col items-center justify-center gap-y-2 rounded-md bg-light-grayish-magenta py-4 pl-4 pr-10 lg:flex-row lg:gap-x-10   ">
              <div className="rating flex items-center justify-center gap-x-3">
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
              </div>
              <span className="font-league-spartan text-base font-bold text-very-dark-magenta">
                Rated 5 Stars in Reviews
              </span>
            </li>
            {/* Rating item 2 */}
            <li className="flex flex-col items-center justify-center gap-y-2 rounded-md bg-light-grayish-magenta py-4 pl-4 pr-10 lg:translate-x-14 lg:transform lg:flex-row lg:gap-x-10 ">
              <div className="rating flex items-center justify-center gap-x-3">
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
              </div>
              <span className="font-league-spartan text-base font-bold text-very-dark-magenta">
                Rated 5 Stars in Report Guru
              </span>
            </li>
            {/* Rating item 3 */}
            <li className="flex flex-col items-center justify-center gap-y-2 rounded-md bg-light-grayish-magenta py-4 pl-4 pr-10 lg:translate-x-28 lg:transform lg:flex-row lg:gap-x-10  ">
              <div className="rating flex items-center justify-center gap-x-3">
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
                <img src={ratingImg} alt="rating" />
              </div>
              <span className="font-league-spartan text-base font-bold text-very-dark-magenta">
                Rated 5 Stars in BestTech
              </span>
            </li>
          </ul>
        </div>
        {/* Reviews */}
        <div className="review space-y-5 lg:col-span-12 lg:flex lg:items-center lg:justify-center lg:gap-x-10 lg:space-y-0 ">
          {/* Review card 1 */}
          <div
            className={`review-card space-y-5 rounded-lg bg-very-dark-magenta p-10 lg:translate-y-0 lg:transform `}
          >
            <div className="card-header flex items-center justify-start gap-x-5">
              <img
                src={review[0].image}
                className="w-14 rounded-full"
                alt={""}
              />
              <div className="customer-info font-league-spartan text-base">
                <h2 className="customer-name font-medium text-white">
                  {review[0].name}
                </h2>
                <span className="text-soft-pink">Verified Buyer</span>
              </div>
            </div>
            <p className="review-msg font-league-spartan text-base font-normal text-white">
              {`"${review[0].review}"`}
            </p>
          </div>
          {/* Review card 2 */}
          <div
            className={`review-card space-y-5 rounded-lg bg-very-dark-magenta p-10 lg:translate-y-5 lg:transform `}
          >
            <div className="card-header flex items-center justify-start gap-x-5">
              <img
                src={review[1].image}
                className="w-14 rounded-full"
                alt={""}
              />
              <div className="customer-info font-league-spartan text-base">
                <h2 className="customer-name font-medium text-white">
                  {review[1].name}
                </h2>
                <span className="text-soft-pink">Verified Buyer</span>
              </div>
            </div>
            <p className="review-msg font-league-spartan text-base font-normal text-white">
              {`"${review[1].review}"`}
            </p>
          </div>
          {/* Review card 3 */}
          <div
            className={`review-card space-y-5 rounded-lg bg-very-dark-magenta p-10 lg:translate-y-10 lg:transform `}
          >
            <div className="card-header flex items-center justify-start gap-x-5">
              <img
                src={review[2].image}
                className="w-14 rounded-full"
                alt={""}
              />
              <div className="customer-info font-league-spartan text-base">
                <h2 className="customer-name font-medium text-white">
                  {review[2].name}
                </h2>
                <span className="text-soft-pink">Verified Buyer</span>
              </div>
            </div>
            <p className="review-msg font-league-spartan text-base font-normal text-white">
              {`"${review[2].review}"`}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
