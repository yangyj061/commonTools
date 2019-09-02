/* 点击复制 */
var copy = function () {
    var _this = this
    var clipboard = new ClipboardJS(".tag-read");//括号里是元素
    clipboard.on("success", function (e) {
        // console.log("复制成功"); // 释放内存
        clipboard.destroy();
    });
    clipboard.on("error", function (e) {
        // 不支持复制
        alert("该浏览器不支持自动复制"); // 释放内存
        clipboard.destroy();
    });
},



/* jq获取url'?'后面的字符串 */
var GetRequest = function(){
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
},



/* 数组去重 */
function onlyOne(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(hash.indexOf(arr[i])==-1){
        hash.push(arr[i]);
       }
    }
    return hash;
}
//ES6 方法\
function onlyOne6(arr){
    var x = new Set(arr);
    return [...x];
}



/* 获取图片文件的地址 */
 function getPicUlr(file){
     // 创建一个 FileReader 对象
    let reader = new FileReader()
    // readAsDataURL 方法用于读取指定 Blob 或 File 的内容
    // 当读操作完成，readyState 变为 DONE，loadend 被触发，此时 result 属性包含数据：URL（以 base64 编码的字符串表示文件的数据）
    // 读取文件作为 URL 可访问地址
    reader.readAsDataURL(file)

    let url = ''
    reader.onloadend = function (e) {
        url = reader.result
    }

    return url
 }