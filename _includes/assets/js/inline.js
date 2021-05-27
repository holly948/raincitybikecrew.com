if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Based on
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/flexgap.js
// (MIT licence)
function detectFlexGap() {
  // Create flex container with row-gap set
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  // Create two elements inside it
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  // Append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode?.removeChild(flex);

  return isSupported;
}

document.documentElement.classList.add(detectFlexGap() ? "flex-gap" : "no-flex-gap");
