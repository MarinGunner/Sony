
$(function(){

    $.ajax({
        url: 'js/index.json',
        type: 'get',
        dataType: 'json',
        success: function(json){
            // console.log(json)
            var result = '';
            $.each(json,function(index,val){
                result += '<div class="goods" id="'+val.id+'"><img src="'+val.img+'" alt=""><p>'+val.price+'</p><h3>'+val.name+'</h3><div>加入购物车</div></div>';
            })
            $('.list').html(result);
        }
    })
    $('.list').on('click','.goods div',function(){
        // alert(123);
        var code = $(this).parent().attr('id');//当前商品对应的商品编码
       if(localStorage.getItem('goods')){//获取当地的存储的商品
        var codeArr = JSON.parse(localStorage.getItem('goods')).code;//本地存储的商品列表
       }else{
           var codeArr = [];
       }
    //    console.log(codeArr)
       codeArr.push(code);
       var jsonStr = JSON.stringify({"code":codeArr});//转成json字符串
       localStorage.setItem("goods",jsonStr);//更新本地存储数据
    //    alert('加入购物车成功');
    })
})


