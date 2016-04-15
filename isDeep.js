/* 复制对象
 * @param: obj {JavaScript Object} 原始对象
 * @param: isDeep {Boolean} 是否为深拷贝
 * @return: {JavaScript Object} 返回一个新的对象
 */
function copy(obj, isDeep) {  
    var ret = obj.slice ? [] : {}, p;
    // 配合 is 函数使用
    if(!isDeep && is(obj, 'Array')) return obj.slice();
    for(p in obj) {
        var prop = obj[p];
        if(!obj.hasOwnProperty(p)) continue;
        if(is(prop, 'Object') || is(prop, 'Array')) {
          ret[p] = copy(prop, isDeep);
        } else {
            ret[p] = prop;
        }
    }
    return ret;
}