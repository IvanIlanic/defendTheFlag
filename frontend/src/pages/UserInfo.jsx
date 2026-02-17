import { useState, useEffect } from "react";
import api from "../api";
import discord from "../assets/discord.png";
import skull from "../assets/Skull.png";

function Userinfo() {
  const [me, setMe] = useState(null);
  const [slang, setSlang] = useState("");
  const [description, setDescription] = useState("");

  const getMe = async () => {
    try {
      const res = await api.get("/api/me/");
      setMe(res.data);
      setSlang(res.data.profile?.slang || "");
      setDescription(res.data.profile?.description || "");
    } catch (err) {
      alert(err);
    }
  };

  const setData = async (e) => {
    e.preventDefault();
    try {
      const res = await api.patch("/api/me/", {
        profile: { slang, description },
      });
      setMe(res.data);
      setSlang(res.data.profile?.slang || "");
      setDescription(res.data.profile?.description || "");
      alert("Saved");
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  if (!me) return <div>Loading ...</div>;

  return (
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
      <form onSubmit={setData}>
        <h1 className="font-normal">
          User <br />
          information
        </h1>

        <div className="flex flex-row justify-center items-center p-30">
          <div className="flex flex-col max-w-1/3">
            <div>
              <p className="font-light text-accent opacity-70">User name</p>
              <h1 className="font-light mb-0">{me.username}</h1>
            </div>

            <div>
              <p className="font-light text-accent opacity-70">Your slang</p>
              <input
                className="font-light text-white mb-0"
                value={slang}
                onChange={(e) => setSlang(e.target.value)}
              />
            </div>

            <div>
              <p className="font-light text-accent opacity-70">Description</p>
              <textarea
                className="font-light text-white mb-0"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <p className="font-light text-accent opacity-70">User email</p>
              <h1 className="font-light mb-0">{me.email || "Email not set"}</h1>
            </div>

            <div>
              <p className="font-light text-accent opacity-70">User password</p>
              <h1 className="font-light mb-0">*********</h1>
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

        <button type="submit" className=".btn">Submit Changes</button>
      </form>
    </div>
  );
}

export default Userinfo;
