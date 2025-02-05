import React, { useContext } from "react";
// Components
import Navbar from "../../components/nav/Navbar";
import HowToPlay from "../../components/lessons/HowToPlay";
import GameContainer from "../../components/lessons/GameContainer";
import NextStageButton from '../../components/lessons/NextStageButton';
// Context
import { GameContext } from '../../context/GameContext';
import ResetAndSave from '../../components/lessons/ResetAndSave';

function LessonsPage() {
 const { togglePlaying, isPlaying, currentStage } = useContext(GameContext)

  return (
    <div className="min-h-screen grid grid-rows-reg bg-yellow-400">
      <Navbar />

      <section>
        <section className="w-full p-6">
          <article className="w-fit">
            <h1 className="text-3xl font-semibold font-bruno">
              Learn How To Play
            </h1>
            <h2>With our exclusive interactive game!</h2>
          </article>
        </section>

        <section className="px-6">
          <HowToPlay />
        </section>

        <div className='px-6 my-6'>
          {/* <main className="outline outline-4 outline-black rounded grid bg-[#008080]"> */}
          <main className="grid">
            {isPlaying ? (
              <GameContainer />
            ) : (
              <section className="text-center p-2">
                <button className='outline outline-2 outline-black rounded-xl p-2 bg-orange-400' onClick={togglePlaying}><span className='font-semibold text-xl'>Start Game</span></button>
              </section>
            )}
          </main>

          {(isPlaying && currentStage.stageEightOn === true) && <ResetAndSave />}
          {(isPlaying && currentStage.stageEightOn === false) && <NextStageButton />}
        </div>
      </section>
    </div>
  );
}

export default LessonsPage;
