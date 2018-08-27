/* NF4 园丁助手 - 答题界面
 * author: BillowsTao
 * date: 2018.8.27
 */

$(function initEventHandle() {
    /* 绑定事件初始化函数 */

})

/*  */
$(".option > .option-item").bind("click", function questionCheckClick(event) {
    alert(event.value);
});
