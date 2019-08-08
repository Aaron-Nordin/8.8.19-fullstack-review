import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default App;

// GOOGLE DOC PROJECT PLANNING SHEET https://docs.google.com/document/d/1wMs4JQIPJbhFJzPhxaPHzbD7J-8_AHMyPUGDUVugwQQ/edit
// GOOGLE SHEETS SCHEMA https://docs.google.com/spreadsheets/d/17K8Ph8ojNIZqdJNkgzpHNnqjr56FIEXZHYDT2tYeFV8/edit#gid=0