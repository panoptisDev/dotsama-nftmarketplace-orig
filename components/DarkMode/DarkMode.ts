var isDarkMode;

const darkMode = localStorage.getItem("darkMode");
if (darkMode === "true") {
  isDarkMode = true;
}
export { isDarkMode };
