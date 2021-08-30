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
    let isOpenedModal: boolean = false;
    const modalBG: HTMLElement = document.querySelector(".modal-bg");

    const changeStyle = (status: "open" | "close") => {
      const isOpened = !(status === "open");
      modal.style.display = isOpened ? "none" : "block";
      modalBG.style.display = isOpened ? "none" : "block";
      document.documentElement.style.overflow = isOpened ? "auto" : "hidden";
      document.body.style.overflow = isOpened ? "auto" : "hidden";
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
        (!(e.target as HTMLElement).closest(".header") && e.target != el);
      console.log(isCloseModal);
      console.log((e.target as HTMLElement).tagName);

      if (!isCloseModal) {
        return false;
      }
      if (isCloseModal) {
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
