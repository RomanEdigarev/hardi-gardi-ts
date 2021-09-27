import anime from "animejs";

enum Modals {
  "header-modal",
}

type BindingValue = {
  modal: keyof typeof Modals;
  name: string;
};

export const VToggleModal = {
  name: "toggle-modal",
  mounted(el: HTMLElement, binding: { value: BindingValue }) {
    const modal: HTMLElement = document.querySelector("." + binding.value.modal)
      .parentElement;
    modal.setAttribute("data-modal-status", "close");
    let containerModalName = "header";
    modal.classList.add("modal");
    let isOpenedModal: boolean = false;
    const modalBG: HTMLElement = document.querySelector(".modal-bg");
    const isPhone = document.documentElement.offsetWidth <= 375;

    if (binding.value.modal !== "header-modal") {
      containerModalName = "modal";
      modal.style.top = "50%";
      modal.style.left = `calc(50% + ${isPhone ? "0px" : "100px"})`;
      modal.style.transform = "translate(-50%, -50%)";
      modal.style.position = "fixed";
      modal.style.zIndex = "10";
    }

    const changeStyle = (status: "open" | "close") => {
      const isOpened = !(status === "open");
      modal.style.display = isOpened ? "none" : "block";
      modalBG.style.display = isOpened ? "none" : "block";
      document.documentElement.style.overflow = isOpened ? "visible" : "hidden";
      document.body.style.overflow = isOpened ? "visible" : "hidden";
    };

    const changeAttribute = (status: "open" | "close") => {
      modal.setAttribute("data-modal-status", status);
      modal.setAttribute(
        "data-modal",
        status === "open" ? binding.value.name : ""
      );
    };

    const changeStatus = (status: "open" | "close") => {
      changeStyle(status);
      changeAttribute(status);
    };

    const openModal = () => {
      if (containerModalName !== "header") {
        const closingModalBtns = document.querySelectorAll(
          "[data-close-modal]"
        );
        closingModalBtns.forEach((item) => {
          item.addEventListener("click", listener, { once: true });
        });
        console.log(closingModalBtns);
      }

      changeStatus("open");
      anime({
        targets: [modal, modalBG],
        opacity: [0, 1],
        duration: 300,
        easing: "linear",
        complete: () => {
          isOpenedModal = true;
        },
      });
    };

    const closeModal = () => {
      if (containerModalName !== "header") {
        document.removeEventListener("click", listenerForDoc, true);
      }

      anime({
        targets: [modal, modalBG],
        opacity: [1, 0],
        duration: 300,
        easing: "linear",
        complete: () => {
          changeStatus("close");
          isOpenedModal = false;
        },
      });
    };

    const listenerForDoc = (e) => {
      const isCloseModal: boolean =
        (e.target as HTMLElement).tagName === "A" ||
        (!(e.target as HTMLElement).closest(`.${containerModalName}`) &&
          e.target != el);
      console.log("e.closest=", !(e.target as HTMLElement).closest(".modal"));
      console.log(isCloseModal);
      console.log((e.target as HTMLElement).tagName);

      if (!isCloseModal) {
        return false;
      }
      if (isCloseModal) {
        document.removeEventListener("click", listenerForDoc, true);
        closeModal();
      }
    };

    const listener = (e: Event) => {
      isOpenedModal = modal.getAttribute("data-modal-status") === "open";
      if (
        isOpenedModal &&
        modal.getAttribute("data-modal") === binding.value.name
      ) {
        closeModal();
      } else {
        openModal();
        if (!isOpenedModal) {
          document.addEventListener("click", listenerForDoc, true);
        } else {
          document.removeEventListener("click", listenerForDoc, true);
        }
      }
    };

    el.addEventListener("click", listener);
  },
};
