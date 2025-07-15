import { useEffect, useState } from 'react'
import { ThemeProvider } from './components/Theme'
import './App.css'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => setThemeMode("dark")
  const lightTheme = () => setThemeMode("light")

  //actual theme switcher

  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return ( 
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/*theme btn */}
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
                {/*card */}
                <Card/>
            </div>
        </div>
    </div>
 </ThemeProvider>
    )
  }


export default App
