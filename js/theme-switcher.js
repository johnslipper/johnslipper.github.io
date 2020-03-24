/** DARK THEME SWITCHING
 * Toggle dark "data-theme" element attribute
 * Saves and loads stored theme preference to local storage
 * Defaults to dark theme if set as preferred at the OS level
 * User setting overrides OS setting
 */

const themes = {
    light: "light",
    dark: "dark"
};
const dataAttribute = "data-theme";
const checkedAttribute = "aria-checked";
const hiddenAttribute = "hidden";
const localStorageKey = "theme";
const localStorageValue = localStorage.getItem(localStorageKey);

// Check if the OS is set to prefer the dark colour scheme
function userPrefersDarkThemeInOs() {
    return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
}

// Set the theme attribute on the document element (aka on <html>)
function setThemeAttribute(theme) {
    document.documentElement.setAttribute(dataAttribute, theme);
}

// Get theme attribute on the document element (aka on <html>)
function getThemeAttribute() {
    return document.documentElement.getAttribute(dataAttribute);
}

// Set the local storage value for other pages and return visits
function setLocalStorage(theme) {
    localStorage.setItem(localStorageKey, theme);
}

// Set the checked attribute on the switch toggle element
function setSwitch(state, toggleSwitch) {
    toggleSwitch.setAttribute(checkedAttribute, state);
}

// Perform theme switch
function switchTheme(toggleSwitch) {
    const wasChecked = toggleSwitch.getAttribute(checkedAttribute) === "true";
    setSwitch(!wasChecked, toggleSwitch);
    if (!wasChecked) {
        setThemeAttribute(themes.dark);
        setLocalStorage(themes.dark);
    } else {
        setThemeAttribute(themes.light);
        setLocalStorage(themes.light);
    }
}

// Initialise the theme switch element
function initThemeToggleSwitch() {
    // Get theme toggle switch
    const toggleSwitch = document.querySelector(".theme-switcher button");
    if (getThemeAttribute() === themes.dark) {
        setSwitch(true, toggleSwitch);
    }

    // Add click event to theme toggle switch
    toggleSwitch.addEventListener(
        "click",
        () => switchTheme(toggleSwitch),
        false
    );

    // Show theme toggle
    document
        .querySelector(".js-theme-switcher")
        .removeAttribute(hiddenAttribute);
}

/* Main theme initialisation */
function initTheme() {
    /* Check for local storage or OS level preference */
    if (localStorageValue) {
        setThemeAttribute(localStorageValue);
    } else if (userPrefersDarkThemeInOs()) {
        setThemeAttribute(themes.dark);
    }
}

/** Run initial theme setup straight away (before DOM ready)
 * This ensures theme is set before the page loads
 * and avoids visual flickering
 */
initTheme();

/* Wait until DOM loaded before setting up toggle switch element */
window.addEventListener("DOMContentLoaded", initThemeToggleSwitch);
