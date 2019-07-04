$(function(){
    var codeArr = JSON.parse(localStorage.getItem('goods')).code//拿到本地存储的数据
    $.ajax({
        url: "js/index.json",
        type: "get",
        dataType: 'json',
        success: function(json){
            var results = '';
            $.each(json,function(index,val){
                $.each(codeArr,function(i,v){
                   
                    
                    if(val.id == v){
                        results += '<tr id="'+v+'"><td><img src="'+val.img+'" alt=""></td><td>'+val.name+'</td><td>'+val.price+'</td><td><em>删除</em></td></tr>';
                    }
                });
            });
            $('.table').find('tbody').append(results);
        }
    })
    $('.table').on('click','td em',function(){
        var code = $(this).parent().attr('id');
        $(this).parent().parent().remove();//删除对应的节点
        var index = codeArr.indexOf(code);
        codeArr.splice(index,1);//删除数组对应下标的元素

        var jsonStr = JSON.stringify({"code":codeArr});
        localStorage.setItem('goods',jsonStr);//更新本地存储数据
        // alert('商品删除成功');
    })
})