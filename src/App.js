import { useState } from "react";
import { v4 } from "uuid";
import "./App.css";
import { Comment } from "./components/Comment";
import data from "./data/comments";

function App() {
  const [list, setList] = useState(data);
  const [reply, setReply] = useState("");

  const clickReply = (e) => {
    if (reply === "") return;
    const payload = {
      id: v4(),
      author: "dev-saj",
      body: reply,
      replies: [],
    };
    setList([payload, ...list]);
    setReply("");
  };

  const handleInput = (e) => {
    setReply(e.target.value);
  };

  return (
    <div>
      <h1>Nested Comments</h1>
      <div className="reply mid">
        <input
          type="text"
          placeholder="Enter Your Comment"
          className="replyIp"
          value={reply}
          onChange={(e) => handleInput(e)}
        />
        <button  onClick={(e) => clickReply(e)} className="btn">Add</button>
      </div>
      {list.map((e) => (
        <Comment data={e.replies} user={e} key={e.id} />
      ))}
    </div>
  );
}

export default App;
