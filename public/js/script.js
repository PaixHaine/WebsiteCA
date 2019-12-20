// ------------- VARIABLES ------------- //
var ticking = false,
    isFirefox = (/Firefox/i.test(navigator.userAgent)),
    isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent)),
    scrollSensitivitySetting = 30, //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
    slideDurationSetting = 600, //Amount of time for which slide is "locked"
    currentSlideNumber = 0,
    totalSlideNumber = $(".background").length;
const scroll_button = document.getElementById('scroll_button'),
      mobile_container = document.getElementById('mobile_container');
      pt_l = document.getElementById('pt-l');
      pt_r = document.getElementById('pt-r');
      flex_description_left = document.getElementById("flex_description_left");
      flex_description_right = document.getElementById("flex_description_right");

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function clickDown() {
  delta = -120;

  if (ticking != true) {

    if (delta <= -scrollSensitivitySetting) {

      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {

      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

function parallaxScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;

  }

  if (ticking != true) {

    if (delta <= -scrollSensitivitySetting) {

      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {

      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}
// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel",
    clickEvent = isFirefox ? "click" : "click";

window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);
scroll_button.addEventListener('click', clickDown);


// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  console.log(currentSlideNumber);

  switch (currentSlideNumber) {
    case 0:
    case 1:
      mobile_container.classList.remove("mobile_container_down");
      mobile_container.classList.add("mobile_container_up");
      flex_description_left.classList.remove("flex_description_down");
      flex_description_right.classList.remove("flex_description_down");
      pt_l.classList.remove("point_down");
      pt_r.classList.remove("point_down");
      pt_l.classList.add("point_up");
      pt_r.classList.add("point_up");
      flex_description_left.classList.add("flex_description_up");
      flex_description_right.classList.add("flex_description_up");
    case 2:
    case 3:
  }
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  console.log(currentSlideNumber);
}



