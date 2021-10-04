const title = document.getElementById("page-title");
const btn = document.getElementById("mode-selector");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

function changeStyle() {
   darkMode();
   darkText();
}

function darkMode() {
   title.classList.toggle('dark-mode');
   btn.classList.toggle('dark-mode');
   body.classList.toggle('dark-mode');
   footer.classList.toggle('dark-mode');
}

function darkText() {
   if (body.classList.contains("dark-mode")) {
      btn.innerHTML = "Light Mode";
      title.innerHTML = "Dark Mode ON";
      return;
   }

   btn.innerHTML = "Dark Mode";
   title.innerHTML = "Light Mode ON";

}

btn.addEventListener("click", changeStyle);