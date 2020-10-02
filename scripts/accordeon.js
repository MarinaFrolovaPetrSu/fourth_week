const measureWidth = (item) => {
let reqItemWidth = 0;

  const screenWidth = $(window).width();
  const container = item.closest(".products-menu");
  const titleBlocks = container.find(".products-menu__title");
  const titleWidth = titleBlocks.width() * titleBlocks.length;

  const isMob = window.matchMedia("(max-width: 768px)").matches;

  if (isMob) {
    return screenWidth - titleWidth;
  } else {
    return 550;
  }
};

const closeEveryItemInContainer = (container) => {
  const items = container.find(".products-menu__item");
  const content = container.find(".products-menu__content");

  items.removeClass("active");
  content.width(0);
};

const openItm = (item) => {
  const hiddenContent = item.find(".products-menu__content");
  const reqWidth = measureWidth(item);

  item.addClass("active");
  hiddenContent.width(reqWidth);
};

$(".products-menu__title").on("click", (e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".products-menu__item");
  const itemOpened = item.hasClass("active");
  const container = $this.closest(".products-menu");

  if (itemOpened) {
    closeEveryItemInContainer(container)
  } else {
    closeEveryItemInContainer(container)
    openItm(item);
  }
});

$(".products-menu__close").on("click", (e) => {
  e.preventDefault();

  closeEveryItemInContainer($('.products-menu'));
})
