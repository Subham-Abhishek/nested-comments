import React, { useState } from "react";
import { v4 as uid } from "uuid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Comment = ({ data, user }) => {
  const [reply, setReply] = useState("");
  const [list, setList] = useState(data);
  const [show, setShow] = useState(false);

  const clickReply = (e) => {
    e.stopPropagation();
    if (reply === "") return;
    const payload = {
      id: uid(),
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

  if (!data) return null;
  else {
    return (
      <div key={user.id}>
        <div className="accordion" key={user.id}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="authorDetails"
            >
              <div className="name">{user.author}</div>
              <div className="body">{user.body}</div>
              <span
                onClick={(e) => {
                  // e.stopPropagation();
                  setShow(!show);
                }}
                className="btn"
              >
                {show ? "Hide Replies" : "Show Replies"}
              </span>
              {show && (
                <div className="reply">
                  <input
                    key={user.id}
                    className="replyIp"
                    type="text"
                    placeholder="Enter Your Reply ..."
                    value={reply}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleInput(e)}
                  />
                  <span onClick={(e) => clickReply(e)} className="btn">
                    Add
                  </span>
                </div>
              )}
            </AccordionSummary>

            <AccordionDetails>
              {list.map((item) => {
                return (
                  <Comment key={item.id} data={item.replies} user={item} />
                );
              })}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
  }
};
