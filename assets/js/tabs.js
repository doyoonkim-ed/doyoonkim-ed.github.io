(function () {
  var btns = document.querySelectorAll(".tabbtn");
  if (!btns.length) return;
  function show(name, push) {
    if (name !== "research") name = "cv";
    btns.forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-tab") === name ? "true" : "false"); });
    ["cv", "research"].forEach(function (k) { var p = document.getElementById("pane-" + k); if (p) p.hidden = k !== name; });
    var links = document.querySelector(".site-links"); if (links) links.style.display = name === "research" ? "none" : "";
    var t = document.title.replace(/ - (CV|Research Interests)$/, "");
    document.title = t + " - " + (name === "research" ? "Research Interests" : "CV");
    if (push) history.replaceState(null, "", name === "research" ? "#research" : location.pathname);
  }
  btns.forEach(function (b) { b.addEventListener("click", function () { show(b.getAttribute("data-tab"), true); window.scrollTo(0, 0); }); });
  window.addEventListener("hashchange", function () { show(location.hash.slice(1), false); });
  show(location.hash.slice(1), false);
})();
