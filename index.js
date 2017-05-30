var postcss = require('postcss');
 
module.exports = postcss.plugin('postcss-single-line', function (options) {
    return function (css) {
        options = options || {};
         
        css.walkRules(function (rule) {
            if (rule.nodes.length == 1) {
                rule.raws.after = " ";
                rule.nodes[0].raws.before = " ";
            }
        });
    }
});
