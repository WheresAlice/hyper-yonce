'use strict';

exports.decorateConfig = config => Object.assign({}, config, {
    fontFamily: '"Hack Nerd Font", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    backgroundColor: '#1C1C1C',
    foregroundColor: '#D4D4D4',
    borderColor: '#1C1C1C',
    cursorColor: '#FFB1F2',
    colors: {
        black: '#1C1C1C',
        red: '#FC4384',
        green: '#98E342',
        yellow: '#E6DB74',
        blue: '#00A7AA',
        magenta: '#FFB1F2',
        cyan: '#37E5E7',
        white: '#D4D4D4',
        lightBlack: '#555555',
        lightRed: '#FC4384',
        lightGreen: '#98E342',
        lightYellow: '#E6DB74',
        lightBlue: '#00A7AA',
        lightMagenta: '#FFB1F2',
        lightCyan: '#37E5E7',
        lightWhite: '#F1F1EF',
    }
});
