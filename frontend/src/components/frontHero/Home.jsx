import React from "react";
import { Button } from "../button/Button";

export const Home = () => {
  return (
    <>
      <h1>
        Welcome to
        <br />
        Muscle &amp; Strength
      </h1>
      <p>
        We provide the tools you need to build the body you want.
        All Free.
      </p>
      <a href="/learn-more">
        <Button isBlue isLarge text="Learn More" />
      </a>
    </>
  );
};
