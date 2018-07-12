module.exports = function (env) {
    if (env == null) {
        env = 'dev';
    }
    return require(`./webpack.${env}.config.js`);
}