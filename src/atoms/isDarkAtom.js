import { atom } from "recoil";

let defaultTheme = 'dark'
if(typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem("YT_THEME");
    if(savedTheme) {
        defaultTheme = savedTheme;
    } else {
        const isDarkMode = true
        defaultTheme = isDarkMode ? "dark" : "light"
        console.log(isDarkMode)
    }
}

export const isDarkState = atom({
    key: 'isDarkState',
    default: defaultTheme,
})