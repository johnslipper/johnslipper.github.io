/** DARK THEME SWITCHING
 * Toggle dark "data-theme" element attribute
 * Saves and loads stored theme preference to localStorage
 */

const themes = {
    light: "light",
    dark: "dark"
};
const dataAttribute = "data-theme";
const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
const localStorageKey = "theme";
const currentTheme = localStorage.getItem(localStorageKey);

if (currentTheme) {
    document.documentElement.setAttribute(dataAttribute, currentTheme);

    if (currentTheme === themes.dark) {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute(dataAttribute, themes.dark);
        localStorage.setItem(localStorageKey, themes.dark);
    } else {
        document.documentElement.setAttribute(dataAttribute, theme.light);
        localStorage.setItem(localStorageKey, theme.light);
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);
