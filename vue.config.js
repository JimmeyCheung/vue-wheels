const path = require('path')
console.log(__dirname);
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                includePaths: [path.join(__dirname + '/src', 'styles')]
            },
        }
    }
}