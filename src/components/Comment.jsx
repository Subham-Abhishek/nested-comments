import React from "react";

export const Comment = ({ data }) => {
    if (!data) return null;
    else {
      console.log(data);
    return (
      <div>
        {data.map((e) => {
          return (
            <>
              <ul>
                <li>
                  <h4>{e.author}</h4>
                  <p>{e.body}</p>
                  <Comment data={e.replies} />
                </li>
              </ul>
            </>
          );
        })}
      </div>
    );
  }
};
