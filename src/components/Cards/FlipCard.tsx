import React, { useState } from "react";

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      onMouseEnter={flip}
      onMouseLeave={flip}
      className={"card-container" + (flipped ? " flipped" : "")}
    >
      <Front />
      <Back />
    </div>
  );
};

const Front = () => {
  return (
    <div className="front">
      <ImageArea />
      <MainArea />
    </div>
  );
};

const Back = () => {
  return (
    <div className="back">
      <p>
        Some sample text to demonstrate how these cards will work, including how
        they truncate long sentences. This section displays the full-length blog
        post.
      </p>
      <p>This would be the full text of the abbreviated blog post.</p>
    </div>
  );
};

const ImageArea = () => {
  return (
    <div className="image-container">
      <img
        className="card-image"
        src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"
        alt="Blog Post"
      />
      <h1 className="title">An example blog post</h1>
    </div>
  );
};

const MainArea = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="main-area">
      <div className="blog-post">
        <p className="date">{currentDate}</p>
        <p className="blog-content">
          Some sample text to demonstrate how these cards will work, including
          how they truncate long sentences.
        </p>
        <p className="read-more">Hover to read more...</p>
      </div>
    </div>
  );
};

export default FlipCard;
