module.exports = (api) => {
    if (api.mode === 'development') {
        return {
            hideNothingWarning: true,
        };
    }
    
    return {
        hideNothingWarning: true,
        plugins: [
            require('css-mqpacker'),
            require('autoprefixer'),
            require('cssnano')({ preset: ['default'] }),
        ],
    };
};
