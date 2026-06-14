import Toastify from "toastify-js";

export default function notif(message, isRed = false, url) {
  Toastify({
    text: message,
    duration: 3000,
    destination: url,
    newWindow: false,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: isRed ? "#F87171" : "#34D399",
      color: "#000000",
    },
  }).showToast();
}
