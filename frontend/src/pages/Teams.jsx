import discord from "../assets/discord.png";
import skull from "../assets/Skull.png";
import tipp from "../assets/Tipp.png";
import plus from "../assets/plus.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

function Teams() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  const [memberInputs, setMemberInputs] = useState({});

  const getTeams = async () => {
    try {
      const res = await api.get("/api/teams/");
      setTeams(res.data);
    } catch (err) {
      alert(err.response?.data?.detail || "Failed to load teams");
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  const updateMemberInput = (teamId, value) => {
    setMemberInputs((prev) => ({
      ...prev,
      [teamId]: value,
    }));
  };

  const addMember = async (teamId) => {
    try {
      const username = memberInputs[teamId];
      if (!username) return;

      await api.post("/api/teams/${teamId}/add/", {
        username: username,
      });

      updateMemberInput(teamId, "");
      getTeams();
    } catch (err) {
      alert(err.response?.data?.detail || "Failed to add member");
    }
  };

  return (
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
      <div>
        <h1 className="font-normal">Teams</h1>
      </div>

      <div onClick={() => navigate("/teamCreation")}>
        <h1>Create a team</h1>
      </div>

      <div className="border-input border-1"></div>

      <div>
        {teams.map((t) => (
          <div key={t.id}>
            <h1 className="m-5 text-4xl">{t.name}</h1>

            <div className="flex flex-row">
              <div id="NamesIcons">
                {Array.isArray(t.members) &&
                  t.members.map((m) => (
                    <div className="flex flex-row" key={m.id ?? m}>
                      <div className="flex flex-row justify-center items-center">
                        <div>
                          <img src={tipp} alt="" className="h-20 p-2" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="m-0 text-xl font-normal">
                            {m.username ?? `User ID: ${m}`}
                          </h1>
                          <h1 className="m-0 text-sm font-normal">
                            {m.slang || ""}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}

                <div className="flex flex-row items-center mt-2">
                  <div>
                    <img src={plus} alt="plus" className="h-20 p-2" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="m-0 text-xl font-normal">Add</h1>
                    <input
                      className="bg-darkBackground rounded-sm text-white p-1"
                      value={memberInputs[t.id] || ""}
                      onChange={(e) =>
                        updateMemberInput(t.id, e.target.value)
                      }
                      placeholder="Friend username"
                    />
                    <button
                      type="button"
                      className="bg-darkBackground px-3 py-1 mt-2"
                      onClick={() => addMember(t.id)}
                    >
                      Add friend
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-15">
                <div className="flex flex-row">
                  <div className="p-6">
                    <h1 className="h-2">{t.slang}</h1>
                    <p className="opacity-70">Slang</p>
                  </div>
                  <div className="p-6">
                    <h1 className="h-2">{t.description}</h1>
                    <p className="opacity-70">Description</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-input border-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;