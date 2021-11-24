import logo from "./logo.svg";
import { useState } from "react";

import "./App.css";
import Board from "./components/Board/Board";
const getData = () => {
  const data = sessionStorage.getItem("data");
  //console.log(data);
  try {
    if (!data) throw "error";
    return JSON.parse(data);
  } catch {
    return [
      {
        title: "Backlog",
        titleColor: "orange",
        items: [{ id: 0, text: "Get Beer" }],
      },
      {
        title: "In Progress",
        titleColor: "green",
        items: [{ id: 1, text: "Do Nothing" }],
      },
      {
        title: "Complete",
        titleColor: "blue",
        items: [{ id: 2, text: "Working" }],
      },
      {
        title: "On hold",
        titleColor: "red",
        items: [{ id: 3, text: "Sleep" }],
      },
    ];
  }
};
const App = () => {
  const [data, setData] = useState(getData());
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <div className="board-group">
        {data.map((x, y) => (
          <Board
            setData={setData}
            data={data}
            title={x.title}
            titleColor={x.titleColor}
            items={x.items}
            key={y}
            id={y}></Board>
        ))}
      </div>
    </div>
  );
};

export default App;
