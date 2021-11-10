import React from "react";
import { useState, useEffect } from "react";
import "./Board.css";
import { Card, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
export default function Board(props) {
  const { title, titleColor, id, data } = props;
  const [titleBox, setTitleBox] = useState("#00f9");
  useEffect(() => {
    switch (titleColor) {
      case "red":
        setTitleBox("#f009");
        break;
      case "blue":
        setTitleBox("#00f9");
        break;
      case "green":
        setTitleBox("#0f09");
        break;
      case "yellow":
        setTitleBox("#ff09");
        break;
      case "pink":
        setTitleBox("#f0f9");
        break;
      case "cyan":
        setTitleBox("#0ff9");
        break;
      case "black":
        setTitleBox("#0009");
        break;
      case "orange":
        setTitleBox("#f609");
        break;
    }
  });

  const style = {
    board: {
      backgroundColor: "rgba(0, 94, 202,0.3)",
      //border: "solid 1px rgb(0, 94, 202)",
      color: "rgb(0, 94, 202)",
      fontWeight: "700",
    },
    title: {
      margin: "5px",
      marginBottom: "10px",
      backgroundColor: titleBox,

      backgroundOpacity: "0.5",
      color: "#fff",
    },
    task: {
      color: "rgb(0, 94, 202)",
      backgroundColor: "#fff9",
      margin: "5px",
      padding: "5px",
    },
    newTask: {
      color: "#fff",
      width: "100%",
      margin: "5px",
      marginTop: "0",
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: "700",
    },
  };
  return (
    <>
      <Card style={style.board} className="board">
        <Card style={style.title}>
          <h3>{title}</h3>
        </Card>
        <div>
          <Card style={style.task}>Sleep</Card>
          <Card style={style.task}>Eat</Card>
          <Card style={style.task}>Fuck</Card>
        </div>
        <Button style={style.newTask} type="text">
          <Add />
          Vercel
        </Button>
      </Card>
    </>
  );
}
