
$(function(){
//导航栏二级菜单
$(".nav ul li").eq(0).mouseenter(function (){  
        
    $(".head-menu").css("display", "block")
                
}).mouseout(function (){ 
    $(".head-menu").mouseleave(function(){
        $(".head-menu").css("display", "none");
    });
}); 


//导航搜索栏

    $(".search-input").bind("focus",function(){
            $(this).css({backgroundColor:"white",borderColor:"white"});
            $(".btn-go").css({backgroundImage:"url(/etc/designs/sonyportal/image/index/searchBg1.gif)",borderWidth:"2px 0",borderColor:"white"});
    });
    $(".search-input").bind("blur",function(){
            $(this).css({backgroundColor:"black",borderColor:"#424242"});
            $(".btn-go").css("borderColor","#424242");
    });
});
