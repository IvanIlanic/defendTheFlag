import { useNavigate } from "react-router-dom";
import api from "../api";
import { useEffect } from "react";

function GameCreate5() {
  const navigate = useNavigate();

  const findGame = async () => {
    try {
      const res = await api.post("/api/game/find/");

      if (res.data.detail === "game found" && res.data.game_id) {
        navigate(`/game/${res.data.game_id}`);
      }
    } catch (err) {
      alert(err.response?.data?.detail || "Cannot find a game");
    }
  };

  useEffect(() => {
    findGame();

    const interval = setInterval(() => {
      findGame();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
      <div className='border-input border-1'></div>

      <div className='flex flex-row'>
        <div>
          <h1 className='m-0 text-4xl'>5th</h1>
          <h1 className='m-0'>step</h1>
        </div>

        <div className='flex flex-col p-10 pt-2'>
          <h1>Looking for a game</h1>
          <p className='max-w-1/2 text-accent opacity-70'>
            Full send, I like that, time to look for a game and prepare for the adventure. Leave this opened and wait for the game to be found!
          </p>
        </div>

        <div>
          <h1 className='mb-0'>Looking</h1>
          <h1 className='mb-0'>for a</h1>
          <h1 className=''>game_</h1>
        </div>
      </div>

      <div className='justify-center items-center'>
        <button className='btn bg-darkBackground'>
          <p>Waiting...</p>
        </button>
      </div>
    </div>
  );
}

export default GameCreate5;