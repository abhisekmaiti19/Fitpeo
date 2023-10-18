import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function App() {
  return (
    <div id="adjust">
      <Sidebar />
      <Main />
    </div>
  );
}
