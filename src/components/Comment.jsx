import React, { useCallback, useState } from "react";
import { v4 as uid } from "uuid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";

export const Comment = ({ data }) => {
  const [reply, setReply] = useState("");
  const [bool, setBool] = useState(true);

  const clickReply = (e) => {
    e.stopPropagation();
    setBool(!bool)
    if(reply === "") return;
    console.log("Hello");
    const payload = {
      author: "Subham",
      body: reply,
      replies: [],
    };
    data[0].replies = [...data[0].replies, payload];
    setReply("")
  };

  const handleInput = useCallback((e) => {
    // e.stopPropagation();
    setReply(e.target.value);
  },[])

  useEffect(() => {
      console.log("Effective");
  },[bool])

  if (!data) return null;
  else {
    return (
      <div>
        <ul>
          {data.map((item) => {
            return (
              <li key={uid()}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="authorDetails"
                  >
                    <div className="name">{item.author}</div>
                    <div className="body">{item.body}</div>
                    <div className="reply">
                      <input
                        className="replyIp"
                        type="text"
                        placeholder="Enter Your Reply ..."
                        value={reply}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleInput(e)}
                      />
                      <span onClick={(e) => clickReply(e)} className="btn">
                        Reply
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Comment data={item.replies} />
                  </AccordionDetails>
                </Accordion>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
