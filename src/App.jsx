import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
const App = () => {
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <div className="board-group">
        <Board title="Backlog" titleColor="red"></Board>
        <Board title="In Progress" titleColor="green"></Board>
        <Board title="Complete" titleColor="blue"></Board>
        <Board title="On Hold" titleColor="orange"></Board>
      </div>
    </div>
  );
};

export default App;
