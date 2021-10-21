import React from "react";
import { v4 as uid } from "uuid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Comment = ({ data }) => {
  console.log(data);
  if (!data) return null;
  else {
    return (
      <div>
        <ul>
          {data.map((e) => {
            return (
              <li key={uid()}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header" 
                    className="authorDetails"
                  >
                    <div className="name">{e.author}</div>
                    <div className="body">{e.body}</div>
                    <span className="btn">Reply</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Comment data={e.replies} />
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
