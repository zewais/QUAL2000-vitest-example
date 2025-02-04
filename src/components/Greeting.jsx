import React from "react";
export default function Greeting({ name }) {
  return <h1>Hello, {name || "World!"}</h1>;
}
