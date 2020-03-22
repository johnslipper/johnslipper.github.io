/** DARK THEME SWITCHING
 * Toggle dark "data-theme" element attribute
 * Saves and loads stored theme preference to localStorage
 */

const themes = {
    light: "light",
    dark: "dark"
};
const dataAttribute = "data-theme";
const checkedAttribute = "aria-checked";
const toggleSwitch = document.querySelector(
    '.theme-switcher button'
);
const localStorageKey = "theme";
const currentTheme = localStorage.getItem(localStorageKey);

if (currentTheme) {
    document.documentElement.setAttribute(dataAttribute, currentTheme);

    if (currentTheme === themes.dark) {
        setSwitch(true);
    }
}

function setSwitch(state) {
    toggleSwitch.setAttribute(checkedAttribute, state);
}

function switchTheme() {
    const wasChecked = (toggleSwitch.getAttribute(checkedAttribute) === 'true');
    setSwitch(!wasChecked);
    if (!wasChecked) {
        document.documentElement.setAttribute(dataAttribute, themes.dark);
        localStorage.setItem(localStorageKey, themes.dark);
    } else {
        document.documentElement.setAttribute(dataAttribute, themes.light);
        localStorage.setItem(localStorageKey, themes.light);
    }
}

toggleSwitch.addEventListener("click", switchTheme, false);
