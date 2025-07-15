   import React, { createContext, useContext } from "react";

   export const ThemeContext=createContext({
         themeMode: "light", // default theme
         darkTheme:()=>{},
         lightTheme:()=>{},
   })

   export const ThemeProvider=ThemeContext.Provider;

   export default function useTheme(){
    return useContext(ThemeContext);
   }