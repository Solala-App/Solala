import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./solala-app/src/App";
import reportWebVitals from "./reportWebVitals";

/*Menu React Component (Responsive) */
function Menu() {
  return (
    <div id="menu">
      <div id="menu-header">
        <span>Today's Events</span>
        <img
          id="add-button"
          src="https://cdn.discordapp.com/attachments/886880496200609802/996885184874037408/unknown.png"
          alt="add button"
        ></img>
      </div>

      <div id="buttons">
        <section className="menu-bubble">
          <span className="time">8 AM</span>
          <span>Do Stuff</span>
        </section>
        <section className="menu-bubble">
          <span className="time">8 AM</span>
          <span>Do Stuff</span>
        </section>
        <section className="menu-bubble">
          <span className="time">8 AM</span>
          <span>Do Stuff</span>
        </section>
      </div>
      <img
        id="scroll-down"
        src="https://cdn.discordapp.com/attachments/886880496200609802/996881406523351153/unknown.png"
        alt="scroll down button"
      ></img>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("menu-comp"));
root.render(Menu());

/*Footer React Component (Responsive) */
function Footer() {
  return (
    <div id="footer">
      <img
        src="https://cdn.discordapp.com/attachments/886880496200609802/996890493705265262/unknown.png"
        alt="Home button"
      ></img>
      <img
        src="https://cdn.discordapp.com/attachments/886880496200609802/996890538110353438/unknown.png"
        alt="Calendar button"
      ></img>
      <img
        src="https://cdn.discordapp.com/attachments/886880496200609802/996890590132310047/unknown.png"
        alt="TODO button"
      ></img>
    </div>
  );
}

const returner = ReactDOM.createRoot(document.getElementById("footer-comp"));
returner.render(Footer());

/*Popup React Component (Responsive) */
function PopUp() {
  return (
    <div id="overall-window">
      <img
        id="test"
        src="https://cdn.discordapp.com/attachments/886880496200609802/996898390401093712/unknown.png"
        alt="water plant image"
      ></img>
      <section id="popup-text">
        <span className="sentence">
          You completed the task
          <strong> Water the Plants</strong>
        </span>
        <p></p>
        <span className="sentence">
          Great Job! You earned vitamins for <strong>Bob</strong>{" "}
        </span>
      </section>
    </div>
  );
}

const returnPop = ReactDOM.createRoot(document.getElementById("popup-comp"));
returnPop.render(PopUp());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
