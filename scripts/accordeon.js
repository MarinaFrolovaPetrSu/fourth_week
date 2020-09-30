const verticalAccordeon = () => {
  const links = document.querySelectorAll(".products-menu__title");
  const body = document.querySelector('body');

  const calculateWidth = () => {
    const windowWidth = window.innerWidth;

    const MAX_WIDTH = 550;

    const linksWidth = links[0].offsetWidth;
    console.log(links);

    const reqWidth = windowWidth - (linksWidth * links.length);

    return reqWidth > MAX_WIDTH ? MAX_WIDTH : reqWidth;
  };

  function closeItem(activateElement) {
    const activeText = activateElement.querySelector(".products-menu__content");
    activeText.style.width = "0px";
    activateElement.classList.remove("active");
  }

  links.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
      const link = e.target.closest(".products-menu__title");
      const active = document.querySelector(".products-menu__title.active");
      if (active) {
        closeItem(active);
      }

      if (!active || active.querySelector(".products-menu__title") !== link) {
        const current = link.closest(".products-menu__item");
        current.classList.add("active");
        const currentText = current.querySelector(".products-menu__content");
        if (body.offsetWidth > 480) {
          currentText.style.width = calculateWidth() + "px";
        } else {
          currentText.style.width = "100%";
        }
      }
    });
  });
  
  document.addEventListener("click", (e) => {
    e.preventDefault();
    let activePerson = document.querySelector(".products-menu__item.active");
    const target = e.target;
    console.log(target);
    if (!target.closest(".products-menu") && activePerson) {
      closeItem(activePerson);
    }
    if (target.closest(".products-menu__close")) {
      closeItem(activePerson);
    }
  });

};

verticalAccordeon();
