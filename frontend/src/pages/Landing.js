import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Branding from "../components/branding/branding";
import Button from "../components/button/button";
import { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const Landing = () => {
  const [input, setInput] = useState(false);
  const [room, setRoom] = useState("");

  const handle = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setRoom(e.target.value);
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      Redirect();
    }
  };

  const Box = () => (

    <div className="content-2">
      <input
        className="input"
        type="text"
        name="text"
        value={room}
        onChange={handle}
      />
      <button className="submit-button" onClick={joinRoom}>
        {" "}
        <ArrowForwardIcon />{" "}
      </button>
    </div>
  );


  const onclick = () => {
    setInput(true);
  };

  //   const [gameId, setGameId] = useState("");

  let history = useNavigate();
  const Redirect = () => {
    history("./game");
  };

  return (
    <>
      <Branding />
      <div className="content">
        <Button text="Create" click={Redirect} />
        <Button text="Join" click={onclick} />
        {input ? <Box /> : null}
      </div>
      {/* <button className="create-button" onClick={redirect} > Create</button>
        <button className="join-button" onClick={redirect}> Join </button> */}
    </>
  );
};

export default Landing;
