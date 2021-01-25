import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Twitter = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <h1>{props.page}</h1>
      <div
        style={{
          width: "100% !important",
        }}
      >
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={props.screenName}
          options={{
            tweetLimit: "3",
            width: "100%",
          }}
          //   theme="dark"
          noHeader="true"
          //   noBorders="true"
          noFooter="true"
        />
      </div>
    </div>
  );
};

export default Twitter;
