import React from 'react';
export const themes = {
    light: {
        background: '#c9f7f9',
        textcolor: 'black',
        tapbutton: '#eec3fd',
        graphdangerarea: '#A0C5C7'
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