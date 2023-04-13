import React from "react";
import { Loader } from "@mantine/core";
function index({ size }) {
  return (
    <div className="flex justify-center items-center align-middle w-full h-96">
      <Loader color={"#3800B0"} size={size ? size : "xl"} />
    </div>
  );
}

export default index;
