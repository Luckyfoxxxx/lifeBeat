import React from 'react';
export const themes = {
    light: {

    },

    dark: {
        background: '#1D2121',
        textcolor: '#00ffff',
        textcolorrgb: '0, 255, 255',
        tapbutton: '#656b83'

    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},

});