"use strict";

/** Wordle regular version. */

const NUM_GUESSES = 6;
const WORD_LENGTH = 5;

let numGuess;
let secret;


/** Given an array of items, choose one randomly & return it. */

function choose(items) {
  return items[Math.floor(Math.random() * items.length)];
}


/** Given a guess and the secret word, return array of results.
 *
 * If secret="apple", here's what it would return for these guesses:
 *
 * "moons" => ["", "", "", "", ""]
 * "alley" => ["correct", "present", "", "present", ""]
 * "paper" => ["present", "present", "correct", "present", ""]
 * "apple" => ["correct", "correct", "correct", "correct", "correct"]
 */

function scoreGuess(guess, secret) {
  console.log("scoreGuess", guess, secret);

  // Make array of the secret word, so we can remove letters as they're found
  const secretLetters = secret.split("");

  // This is the results array that will be returned
  const results = ["", "", "", "", ""];

  // First, for letters in correct place, mark as such in results and remove
  // the letter from the secret
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === secretLetters[i]) {
      results[i] = "correct";
      secretLetters[i] = null;
    }
  }

  // Next, for remaining letters in guess that are in secret, mark them as
  // present, and remove that letter from the secret, so it isn't reused.
  for (let i = 0; i < WORD_LENGTH; i++) {
    // If we already marked this as "correct", skip re-evaluating it
    if (results[i] === "correct") continue;

    const posInSecret = secretLetters.indexOf(guess[i]);
    if (posInSecret !== -1) {
      results[i] = "present";
      secretLetters[posInSecret] = null;
    }
  }

  return results;
}


/** Handle form submit.
 * - Score word and update the DOM to reflect score
 */

function handleSubmit(evt) {
  console.log("handleSubmit");

  evt.preventDefault();

  // Don't let player guess more than NUM_GUESSES times
  if (numGuess === NUM_GUESSES) return;

  // Get word & lowercase it (in case player entered it in UPPER case)
  const $guess = document.querySelector("#guess").value.toLowerCase();
  tryWord($guess);
  document.querySelector("#guess").value = "";
}

/** Handle guessing a word:
 * - Score word and update the DOM to reflect score
 * - Increase numGuesses by 1
 */

// takes in guess. Find guess
function tryWord(guess) {
  console.log("tryWord", guess);
  if (guess.length !== 5 || !(validWords.includes(guess))) {
    document.getElementById("hype").innerHTML="Please enter a five letter english word!";
  }
    else if (guess.length == WORD_LENGTH && (validWords.includes(guess))) {
      document.getElementById("hype").innerHTML=" ";
  }
  if (!validWords.includes(guess)) return console.error("Invalid word!", guess);


  const results = scoreGuess(guess, secret);
  updateBoard(guess, results);

  numGuess += 1;
}

/** Update board */

function updateBoard(guess, results) {
  console.log("updateBoard", guess, results);

  for (let i = 0; i < WORD_LENGTH; i++) {
    const letter = document.querySelector(
      `#words tr:nth-child(${numGuess + 1}) td:nth-child(${i + 1})`);
    letter.innerHTML = guess[i];
    letter.className = results[i];
  }
}

/** Start: set guess counter to 0 and choose secret word. */

function start() {
  console.log("start");

  numGuess = 0;
  secret = choose(possibleSecrets);

  document.querySelector("#guess-form")
    .addEventListener("submit", handleSubmit);
}

start();