import React, { createContext, useState} from 'react';

export const ThemeContext = createContext({});

function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true);


    return(
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;