import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "700px" }}>{children}</div>
    </>
  );
}
