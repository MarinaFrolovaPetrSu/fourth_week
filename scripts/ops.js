const sections = $("section");
const display = $(".content");

let inScroll = false;

sections.first().addClass("active");

const performScroll = (sectionEq) => {
  if (inScroll == false) {
    inScroll = true;
    const position = sectionEq * -100;

    display.css({
      transform: `translateY(${position}%)`,
    });

    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

    setTimeout(() => {
      inScroll = false;
    }, 1300);
  }
};

const scrollViewport = (direction) => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction == "next" && nextSection.length) {
    performScroll(nextSection.index());
  }

  if (direction == "prev" && prevSection.length) {
    performScroll(prevSection.index());
  }
};

$(window).on("wheel", (e) => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollViewport("next");
  }

  if (deltaY < 0) {
    scrollViewport("prev");
  }
});
