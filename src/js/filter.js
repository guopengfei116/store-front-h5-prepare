// 该模块对外暴漏一个方法，将来Vue.use(这个方法),
// 这个方法相对于Vue来说，就是插件自身的安装的方法。
// Vue负责调用该方法，该方法负责扩展Vue的功能。
export default function(Vue) {

    // 过滤器回调的第一个值固定为插值表达式中的初始值
    Vue.filter('formatDate', function(val, format = 'YYYY-MM-DD') {
        
        // 先创建匹配年月日的三个不同正则
        let yReg = /YYYY/i;
        let mReg = /MM/i;
        let dReg = /DD/i;
    
        // 然后通过val得到相应的年月日
        let date = new Date(val);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
    
        // 最后替换
        return format.replace(yReg, y).replace(mReg, m).replace(dReg, d);
    });

};  