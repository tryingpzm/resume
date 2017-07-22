/**
 * Created by Administrator on 2017/7/22.
 */
//第一步，悬浮加active类变背景色
var $li=$("section.main-content>.tabs>ul>li");
var $page=$("section.main-content>.page");
$li.on("mouseenter",function(){
    $li.removeClass("active");
   $(this).addClass("active");

   var index=$li.index(this);
   $page.removeClass("active");
   $page.eq(index).addClass("active");
});

//这一步是项目中p的hover效果
var $li2=$("section.main-content>.page>ul>li");
var $img=$("section.main-content>.page>ul>li>.img-wrapper>img");
var $p=$("section.main-content>.page>ul>li>.img-wrapper>p");
$li2.on("mouseenter","img",function(e){
    var index=$img.index(this);
    $p.eq(index).addClass("active");
});
$li2.on("mouseleave",function(){
    $p.removeClass("active");
})