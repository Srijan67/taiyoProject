import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = ({ load }: { load: boolean }) => {
  return (
    <>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#fff"
        ariaLabel="ball-triangle-loading"
        visible={load}
      />
    </>
  );
};

export default Loader;
