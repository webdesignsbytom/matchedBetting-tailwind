import React from "react";
import { Link } from "react-router-dom";
// Components
import Navbar from "../../components/nav/Navbar";
// Images
import FootballPlayer from "../../assets/images/player.png";
import BgFootball from "../../assets/images/smBall.png";

function HomePage() {
  return (
    <div className="grid h-screen grid-rows-reg overflow-hidden max-h-screen bg-[#ffa500]">
      <Navbar />
      {/* Main */}
      <main className="grid h-full font-poppins p-1">
        <section className="grid md:grid-cols-2">
          <section className="relative grid  w-full">
            <div className="grid items-center px-4">
              <article className="outline z-10 outline-black outline-4 text-center rounded">
                <section className="py-4 font-bruno">
                  <h2 className="text-3xl md:text-4xl font-semibold pb-2">WELCOME TO!</h2>
                  <h1 className="text-4xl md:text-5xl font-semibold">
                    Matched Betting Simulator
                  </h1>
                </section>

                <section className="pb-6 md:text-xl">
                  <p className="px-2">
                    Learn how to take advantage of{" "}
                    <span className="italic">free bets</span> offered by bookies
                    as part of their promotions. Using a simple maths formula,
                    that the specially made{" "}
                    <Link to="/calculator">
                      <span className="text-hyperlink-blue font-semibold">
                        Betting Calculator
                      </span>
                    </Link>{" "}
                    to do the maths for you!
                  </p>
                  <p className="px-2 pt-2">
                    We also boast interactive training tools and sandbox modes
                    where you can bet fake money against realtime bookie and
                    exchange odds! Practice and see your money grow before you
                    try out this perfectly legal money making scheme!
                  </p>
                </section>
              </article>
            </div>

            <section className="grid no__highlights text-xs md:text-base font-semibold grid-cols-4 mx-auto w-full px-4 lg:px-8 text-center gap-4 z-10">
              <Link to="/calculator">
                <article className="outline outline-black outline-4 rounded h-fit p-4 bg-green-700 flex items-center justify-center hover:bg-green-300">
                  CALCULATOR
                </article>
              </Link>
              <Link to="/lessons">
                <article className="outline outline-black outline-4 rounded h-fit p-4 bg-green-700 flex items-center justify-center hover:bg-green-300">
                  LESSONS
                </article>
              </Link>
              <Link to="/simulator">
                <article className="outline outline-black outline-4 rounded h-fit p-4 bg-green-700 flex items-center justify-center hover:bg-green-300">
                  SIMULATOR
                </article>
              </Link>
              <Link to="/forum">
                <article className="outline outline-black outline-4 rounded h-fit p-4 bg-green-700 flex items-center justify-center hover:bg-green-300">
                  FORUM
                </article>
              </Link>
            </section>

            <section className="absolute grid bottom-0 z-0">
              <img src={BgFootball} alt="football banner" />
            </section>
          </section>

          <section className="hidden md:grid bg-main-bg bg-no-repeat w-full bg-cover">
            <div className="grid items-center justify-center w-full">
              <div className="flex justify-center">
                <img
                  className="w-[85%] h-[85%]"
                  src={FootballPlayer}
                  alt="football player h-fit"
                />
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
