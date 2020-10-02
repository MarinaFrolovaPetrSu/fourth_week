"use strict";

var sections = $("section");
var display = $(".content");
var inScroll = false;
sections.first().addClass("active");

var performScroll = function performScroll(sectionEq) {
  if (inScroll == false) {
    inScroll = true;
    var position = sectionEq * -100;
    display.css({
      transform: "translateY(".concat(position, "%)")
    });
    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
    setTimeout(function () {
      inScroll = false;
    }, 1300);
  }
};

var scrollViewport = function scrollViewport(direction) {
  var activeSection = sections.filter(".active");
  var nextSection = activeSection.next();
  var prevSection = activeSection.prev();

  if (direction == "next" && nextSection.length) {
    performScroll(nextSection.index());
  }

  if (direction == "prev" && prevSection.length) {
    performScroll(prevSection.index());
  }
};

$(window).on("wheel", function (e) {
  var deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollViewport("next");
  }

  if (deltaY < 0) {
    scrollViewport("prev");
  }
});