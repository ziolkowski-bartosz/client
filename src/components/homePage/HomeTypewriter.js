import React from "react";
import Typewriter from "typewriter-effect";

const HomeTypewriter = () => {
  return (
    <div className="home-typewriter">
      <Typewriter
        options={{ loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Our dishes ")
            .typeString(
              "<strong><span style='color: #00204e;'>are photogenic</span></strong>"
            )
            .pauseFor(500)
            .deleteChars(10)
            .typeString(
              "<strong><span style='color: #00204e;'>Polish traditional</span></strong>"
            )
            .pauseFor(500)
            .deleteChars(18)
            .typeString(
              "<strong><span style='color: #00204e;'>award winning</span></strong>"
            )
            .pauseFor(500)
            .deleteChars(19)
            .typeString(
              "<strong><span style='color: #00204e;'>will make your day</span></strong>"
            )
            .pauseFor(500)
            .deleteChars(18)
            .typeString(
              "<strong><span style='color: #00204e;'>are Polish grandma-approved</span></strong>"
            )
            .pauseFor(500)
            .pauseFor(1000)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default HomeTypewriter;
