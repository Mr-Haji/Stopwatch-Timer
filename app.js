// =======================================
var ms = 0;
var sec = 0;
var min = 0;
var interval;

var getmiliseconds = document.getElementById("miliSec");
var getseconds = document.getElementById("seconds");
var getminutes = document.getElementById("minutes");

var strt = document.getElementById("btn-start")
var num = document.getElementById("digit")

function stopWatch() {
  ms++;
  getmiliseconds.innerHTML = ms;

  if (ms >= 100) {
    sec++;
    getseconds.innerHTML = sec;
    ms = 0;
  }
  else if (sec >= 59) {
    min++;
    getminutes.innerHTML = min;
    sec = 0;
  }
}

function sttimer() {
  interval = setInterval(stopWatch, 10)
  strt.className = ("hidden");
  num.className = ("size");

}

function stop() {
  clearInterval(interval);
  strt.className = ("button");
  num.className = ("digit")

}

function reset() {

  ms = 0;
  sec = 0;
  min = 0;
  interval;
  getmiliseconds.innerHTML = "00";
  getseconds.innerHTML = "00";
  getminutes.innerHTML = "00";

  stop();

}

//--------------------Timer------------------------------------------------------------------------------------------------------------------
var timms = 100;
var timsec = 59;
var timmin = 5;
var timinterval;
var timgetmiliseconds = document.getElementById("timmiliSec");
var timgetseconds = document.getElementById("timseconds");
var timgetminutes = document.getElementById("timminutes");


function timstopWatch() {
  timgetminutes.innerHTML = "04"
  timms--;
  timgetmiliseconds.innerHTML = timms;

  if (timms <= 0) {
    timsec--;
    timgetseconds.innerHTML = timsec;
    timms = 100;
  }
  else if (timsec <= 0) {
    timmin--;
    timgetminutes.innerHTML = timmin;
    timsec = 59;
  }
}

function timer() {
  timinterval = setInterval(timstopWatch, 10)
  strt.className = ("hidden");
  num.className = ("size");
}

function timstop() {
  clearInterval(timinterval);
  strt.className = ("button");
  num.className = ("digit");
}

function timreset() {

  timms = 100;
  timsec = 0;
  timmin = 5;
  timinterval;
  timgetmiliseconds.innerHTML = "00";
  timgetseconds.innerHTML = "00";
  timgetminutes.innerHTML = "05";

  timstop();

}
