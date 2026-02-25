import { useState, useEffect } from "react";
import api from "../api";
import tipp from "../assets/Tipp.png";
import plus from "../assets/plus.png";

function Friends() {
  const [friends, setFriends] = useState([]);
  const [newFriendName, setNewFriendName] = useState("");

  const getFriends = async () => {
    try {
      const res = await api.get("/api/friends/");
      setFriends(res.data);
    } catch (err) {
      alert(err);
    }
  };

  const addFriend = async (e) => {
    try {
      await api.post("/api/friends/add/", {
        username: newFriendName,
      });
      setNewFriendName("");
      getFriends(); // refresh list
    } catch (err) {
      alert(err.response?.data?.detail || "cannot add your friend"); // Used to display responses stated in view
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen w-auto p-10">
      <div>
        <h1 className="font-normal">Friends</h1>
      </div>

      <div className="border-input border-1"></div>

      <div>

        <div id="NamesIcons" className="flex flex-col gap-4">
          {friends.map((f) => ( // Use map to display all the users
            <div key={f.id} className="flex flex-row items-center">
              <img src={tipp} alt="" className="h-20 p-2" />
              <div className="flex flex-col">
                <h1 className="m-0 text-xl font-normal">{f.username}</h1>
                <h1 className="m-0 text-sm font-normal">{f.slang || ""}</h1>
              </div>
            </div>
          ))}

          <form onSubmit={addFriend} className="flex flex-row items-center">
            <img src={plus} alt="plus" className="h-20 p-2" />
            <div className="flex flex-col">
              <h1 className="m-0 text-xl font-normal">Add</h1>
              <input
                className="bg-darkBackground rounded-sm"
                type="text"
                value={newFriendName}
                onChange={(e) => setNewFriendName(e.target.value)}
                placeholder="Friend username"
              />
              <button type="submit" className="bg-darkBackground px-3 py-1 mt-2">
                Add friend
              </button>
            </div>
          </form>
        </div>

        <div className="border-input border-1 mt-6"></div>
      </div>
    </div>
  );
}

export default Friends;