import { useRecoilState } from "recoil"
import { isDarkState } from "atoms/isDarkAtom"

export default function useDarkTheme() {
    const [theme, setTheme] = useRecoilState(isDarkState)

    const saveTheme = (chosenTheme) => {
        setTheme(chosenTheme)
        window.localStorage.setItem("YT_THEME", chosenTheme)
    }

    const toggleTheme = () => {
        saveTheme(theme === "dark" ? "light" : "dark")
    }

    return [theme, toggleTheme]
}

export const ThemeProvider = ({ theme, children }) => {
    return (
        <div className={`${theme}`}>
            {children}
        </div>
    )
}