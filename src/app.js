/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here

  let who = ["the dog", "my granma", "his turtle", "my bird", "my cat"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class.",
    "right in time.",
    "when I finished.",
    "during my lunch.",
    "while I was running."
  ];

  let who_excusa = Math.floor(Math.random() * who.length);
  let what_excusa = Math.floor(Math.random() * what.length);
  let when_excusa = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[who_excusa] + " " + what[what_excusa] + " " + when[when_excusa];
};
