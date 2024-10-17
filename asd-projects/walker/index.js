/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    Left: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };
  var walker = {
    XCOORDINATE: 0,
    YCOORDINATE: 0,
    speedXaxis: 0,
    speedYaxis: 0,
  };


  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keyDown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {


  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed")
    }
    if (event.which === KEY.ENTER) {
      console.log("left pressed")
    }
    if (event.which === KEY.ENTER) {
      console.log("up pressed")
    }
    if (event.which === KEY.ENTER) {
      console.log("right pressed")
    }
    if (event.which === KEY.ENTER) {
      console.log("down pressed")
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repostitionGameItem(newFrame) {
    walker.XCOORDINATE
  }
  function redrawGameItem(newFrame) {
    walker.YCOORDINATE

  }
}
