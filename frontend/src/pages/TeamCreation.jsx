import { useState } from "react";
import api from "../api";
import discord from "../assets/discord.png";
import skull from "../assets/Skull.png";
import { useNavigate } from "react-router-dom";

function TeamCreation() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [slang, setSlang] = useState("");
  const [description, setDescription] = useState("");

  const createTeam = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/teams/create/", {
        name,
        slang,
        description,
      });

      alert("Team created!");
      console.log("Created team:", res.data);
      navigate("/teams")
    } catch (err) {
      alert(err.response?.data?.detail || "Error creating team");
    }
  };

  return (
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
      <h1 className="font-normal">
        Team <br />
        creation
      </h1>

      <div className="border-input border-1"></div>

      <form onSubmit={createTeam}>
        <div className="flex flex-row justify-center items-center p-30">
          <div className="flex flex-col max-w-1/3">
            <div className="flex flex-col">
              <p className="font-light text-accent opacity-70">Team name</p>
              <input
                className="bg-input rounded-md text-white"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <p className="font-light text-accent opacity-70">Your slang</p>
              <input
                className="bg-input rounded-md text-white"
                type="text"
                value={slang}
                onChange={(e) => setSlang(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <p className="font-light text-accent opacity-70">Team description</p>
              <textarea
                className="field-sizing-content bg-input text-white"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col max-w-1/3 p-10">
            <p className="font-light text-accent opacity-70">User icon</p>
            <img src={skull} alt="usericon" />
            <button type="button" className="bg-darkBackground px-3 py-1">
              <p className="font-light opacity-70">Upload ...</p>
            </button>

            <p className="font-light text-accent opacity-70 pt-5">User background</p>
            <img src={skull} alt="userbg" />
            <button type="button" className="bg-darkBackground px-3 py-1">
              <p className="font-light opacity-70">Upload ...</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="border-input border-1 w-1/3 "></div>

          <p className="font-light text-accent opacity-70 pt-4">Discord link</p>

          <button type="button" className="btn bg-surface">
            <img src={discord} alt="discord" className="w-5" />
          </button>

          
          <button type="submit" className="btn bg-surface">
            Create the team
          </button>
        </div>

        <div className="border-input border-1"></div>
      </form>
    </div>
  );
}

export default TeamCreation;