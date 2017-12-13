/**
 * 自定义函数
 */
//添加导航栏activity样式
$(document).ready(function () {
    $(".web_nav a").each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location.href)) {
            $this.addClass("Navactive");
        }
    });
}); 