/* NF4 园丁助手 - 答题界面
 * author: BillowsTao
 * date: 2018.8.27
 */

$(function bindEvent() {
  /* 绑定事件初始化函数 */
  /* 注册选项点击事件 */
  $('.option > .option-item').bind('click', function questionSingleCheck (event) {
    /* 添加选中属性 */
    $selectedItem = $(this); // 选中的选项
    $siblingItems = $selectedItem.siblings(); // 其他选项
    $currentQuestion = $selectedItem.closest('.question-block'); // 当前的问题
    $currentQuestion.attr('answered', 'true'); // 置当前问题为已作答
    $(this).attr('itemChecked', 'true'); // 置选项为选中
    $siblingItems.filter("[itemChecked='true']").removeAttr("itemChecked");
    //修改选项的样式
    singleApperanceChange ($currentQuestion);
  });

  $(".control__submit-button").bind("click", function submit(event){
    alert("提交试题");
  });
})

function singleApperanceChange (question) {
  /* 修改选中选项的外观 */
  $selectedItem = question.find(".option-item[itemChecked='true']");
  $otherItem = question.find(".option-item").not("[itemChecked='true']");
  // 修改选中选项的图标为选中状态
  $selectedItem.find(".check-box > i").attr("class","fas fa-dot-circle fa-lg check-box__icon-checked");
  // 清除未选中图标的状态
  $otherItem.find(".check-box > i").attr("class","far fa-circle fa-lg check-box__icon");
};