// JavaScript Document
        function do_static() {
            $.ajax({
                url: '/login.html',
                type: 'GET',
                /*data: 'username=admin&password=123',*/
                async: false,
                cache: false,
                contentType: "text/html",
                processData: false,
                success: function (returndata) {
                    alert('请求发送成功');
                },
                error: function (returndata) {
                    alert('请求发送失败');
                }
            });
        }
        function do_getUserInfo() {
            $.ajax({
                url: '/getUserInfo',
                type: 'GET',
                async: false,
                cache: false,
                contentType: "text/plain",
                processData: false,
                success: function (returndata) {
                    json = JSON.parse(returndata);
                    if(json["userType"]=="Supplier"){
                        $("#user_ul").empty();
                        $("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal6"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
                        $("#user_email_span").append(json["email"]);
                        $("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal7"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="Supplier">修改货物信息</span></a></li>');
                        $("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal7"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="Supplier">退出登录</span></a></li>');
                        do_searchOrder(0);
                        do_searchGoodsOfSupplier();
                    }else {
                        $("#user_ul").empty();
                        $("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal5"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
                        $("#user_email_span").append(json["email"]);
                        do_searchOrder(1);
                    }

                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        function do_test() {
            $.ajax({
                url: '/test/session',
                type: 'GET',
                /*data: 'username=admin&password=123',*/
                async: false,
                cache: false,
                contentType: "text/plain",
                processData: false,
                success: function (returndata) {
                    alert(returndata);
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
		function do_searchGood_1(){
			var param = $('#goodsName_1').val()
			$.ajax({
				url:'/searchGoods?goodsName='+param,
				type:'GET',
				async:false,
				cache:false,
				contentType:"text/html",
				processData:false,
				success: function(returndata){
					alert(returndata+param);
				},
                error: function (returndata) {
                    alert(returndata);
                }
			});
		}
        function do_searchGood_2(){
            var param = $('#goodsName_2').val()
            $.ajax({
            url:'/searchGoods?goodsName='+param,
            type:'GET',
            async:false,
            cache:false,
            contentType:"text/html",
            processData:false,
            success: function(returndata){
              alert(returndata);
            },
            error: function (returndata) {
                alert(returndata);
            }
        });
}

        function do_buyerRegister() {
            var param={"name":$('#register_buyer_name').val(),"password":$('#register_buyer_password').val(),"department":$('#register_buyer_department').val(),"address":$('#register_buyer_address').val(),"email":$('#register_buyer_email').val()}
            $.ajax({
                url: '/buyerRegister',
                type: 'POST',
                data:JSON.stringify(param),
                async: false,
                cache: false,
                contentType: "application/json;charset=utf-8",
                processData: false,
                success: function (returndata) {
                    if(returndata==true){
						alert("注册成功！");
						$("#user_ul").empty();
						$("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal5"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>')
                        $("#user_ul").append('<li><a href="#" data-toggle="modal"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span>退出登录</span></a></li>');
						$("#user_email_span").append(param.email);
					}else{
						alert("注册失败");
					}
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        function do_supplierRegister() {
            var param={"name":$('#register_supplier_name').val(),"password":$('#register_supplier_password').val(),"department":$('#register_supplier_department').val(),"address":$('#register_supplier_address').val(),"email":$('#register_supplier_email').val()}
            $.ajax({
                url: '/supplierRegister',
                type: 'POST',
                data:JSON.stringify(param),
                async: false,
                cache: false,
                contentType: "application/json;charset=utf-8",
                processData: false,
                success: function (returndata) {
                    if(returndata==true){
						alert("注册成功！");
						$("#user_ul").empty();
						$("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal6"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
						$("#user_email_span").append(param.email);
                        $("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal7"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="Supplier">修改货物信息</span></a></li>');
                        $("#user_ul").append('<li><a href="#"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span>退出登录</span></a></li>');
                        do_searchOrder(0);
                        do_searchGoodsOfSupplier();
					}else{
						alert("注册失败");
					}
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        function do_loginSupplier() {
            var param={"password":$('#supplier_password').val(),"email":$('#supplier_email').val()}
            $.ajax({
                url: '/supplierLogin',
                type: 'POST',
                data: JSON.stringify(param),
                async: false,
                cache: false,
                contentType: "application/json;charset=utf-8",
                processData: false,
                success: function (returndata) {
					if(returndata==true){
						alert("登录成功");
						$("#user_ul").empty();
						$("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal6"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
						$("#user_email_span").append(param.email);
                        $("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal7"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="Supplier">修改货物信息</span></a></li>');
                        $("#user_ul").append('<li><a href="#"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span>退出登录</span></a></li>');
						do_searchOrder(0);
                        do_searchGoodsOfSupplier();
					}else{
						alert("登录失败");
					}
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        function do_loginBuyer() {
            var param={"password":$('#buyer_password').val(),"email":$('#buyer_email').val()};
            $.ajax({
                url: '/buyerLogin',
                type: 'POST',
                data: JSON.stringify(param),
                async: false,
                cache: false,
                contentType: "application/json;charset=utf-8",
                processData: false,
                success: function (returndata) {
					if(returndata==true){
						alert("登录成功");
						$("#user_ul").empty();
						$("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal5" ><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
                        $("#user_ul").append('<li><a href="#"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span>退出登录</span></a></li>');
						$("#user_email_span").append(param.email);
						do_searchOrder(1);
					}else{
						alert("登录失败");
					}
				},
				error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        function do_search() {
            $.ajax({
                url: '/searchGoods',
                type: 'GET',
                async: false,
                cache: false,
                processData: false,
                success: function (returndata) {
                    alert(returndata);
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        function do_searchGoodsOfSupplier() {
            $.ajax({
                url: '/searchGoodsOfSupplier',
                type: 'GET',
                async: false,
                cache: false,
                processData: false,
                success: function (returndata) {
                    var json = JSON.parse(returndata);
                    $("#goods_info").empty();
                    var head = '<tr><th>id</th><th>名称</th><th>价格</th><th>库存</th><th>描述</th></tr>';
                    $("#goods_info").append(head);
                    for(var i=0;i<json.length;i++){
                        var string = '<tr><td>'+json[i]["id"]+'</td><td>'+json[i]["name"]+'</td><td>'+json[i]["price"]+'</td><td>'+json[i]["inventory"]+'</td><td>'+json[i]["simpledescribe"]+'</td></td></tr>'
                        $("#goods_info").append(string);
                    }
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        function do_insert_goods() {
            $("#change_btn").remove();
            $("#update_btn").after("<button id=\"confirm_btn\" onclick=\"do_addGoods()\" class=\"btn\">提交更改</button>");
            $("#update_btn").remove();
            var string = '<div class="form-group"><label for="good_name">商品名称</label><input type="text" class="form-control" id="good_name" placeholder="名称"> </div>' +
                '<div class="form-group"><label for="good_price">价格</label><input type="text" class="form-control" id="good_price" placeholder="价格"> </div>' +
                '<div class="form-group"><label for="good_inventory">库存数量</label><input type="text" class="form-control" id="good_inventory" placeholder="库存"> </div>' +
                '<div class="form-group"><label  for="good_describe">商品描述</label><input type="text" class="form-control" id="good_describe" placeholder="简述"> </div>';
            $("#set_goods_info").append(string);
        }

        function do_addGoods() {
            var goods = {};
            goods["name"] = $("#good_name").val();
            goods["price"] = $("#good_price").val();
            goods["inventory"] = $("#good_inventory").val();
            goods["simpledescribe"] = $("#good_describe").val();
            $.ajax({
                url: '/addGoods',
                type: 'POST',
                async: false,
                cache: false,
                data: JSON.stringify(goods),
                contentType: "application/json;charset=utf-8",
                processData: false,
                success: function (returndata) {
                    if(returndata==true){
                        $("#set_goods_info").empty();
                        $("#confirm_btn").after("<button id=\"update_btn\" onclick=\"do_insert_goods()\" class=\"btn\">添加商品</button>");
                        $("#update_btn").after("<button id=\"change_btn\" onclick=\"do_change_goods()\" class=\"btn\">修改商品</button>");
                        $("#confirm_btn").remove();
                        do_searchGoodsOfSupplier();
                        alert("商品上新成功！");
                    }else {
                        $("#set_goods_info").empty();
                        $("#confirm_btn").after("<button id=\"update_btn\" onclick=\"do_insert_goods()\" class=\"btn\">添加商品</button>");
                        $("#confirm_btn").remove();
                        alert("商品上新失败！");
                    }
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
    function do_change_goods() {
        $("#change_btn").remove();
        $("#update_btn").after("<button id=\"confirm_btn\" onclick=\"do_changeGoods()\" class=\"btn\">提交更改</button>");
        $("#update_btn").remove();
        var string = '<div class="form-group"><label for="good_id">商品ID</label><input type="text" class="form-control" id="good_id" placeholder="ID"> </div>' +
            '<div class="form-group"><label for="good_name">商品名称</label><input type="text" class="form-control" id="good_name" placeholder="名称"> </div>' +
            '<div class="form-group"><label for="good_price">价格</label><input type="text" class="form-control" id="good_price" placeholder="价格"> </div>' +
            '<div class="form-group"><label for="good_inventory">库存数量</label><input type="text" class="form-control" id="good_inventory" placeholder="库存"> </div>' +
            '<div class="form-group"><label  for="good_describe">商品描述</label><input type="text" class="form-control" id="good_describe" placeholder="简述"> </div>';
        $("#set_goods_info").append(string);
}
        function do_changeGoods() {
            var goods = {};
            goods["id"] = $("#good_id").val();
            goods["name"] = $("#good_name").val();
            goods["price"] = $("#good_price").val();
            goods["inventory"] = $("#good_inventory").val();
            goods["simpledescribe"] = $("#good_describe").val();
            $.ajax({
                url: '/updateGoods',
                type: 'POST',
                async: false,
                cache: false,
                data: JSON.stringify(goods),
                contentType: "application/json;charset=utf-8",
                processData: false,
                success: function (returndata) {
                    if(returndata==true){
                        $("#set_goods_info").empty();
                        $("#confirm_btn").after("<button id=\"update_btn\" onclick=\"do_insert_goods()\" class=\"btn\">添加商品</button>");
                        $("#update_btn").after("<button id=\"change_btn\" onclick=\"do_change_goods()\" class=\"btn\">修改商品</button>");
                        $("#confirm_btn").remove();
                        do_searchGoodsOfSupplier();
                        alert("商品更新成功！");
                    }else {
                        $("#set_goods_info").empty();
                        $("#confirm_btn").after("<button id=\"update_btn\" onclick=\"do_insert_goods()\" class=\"btn\">添加商品</button>");
                        $("#confirm_btn").remove();
                        alert("商品更新失败！");
                    }
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        function do_searchGoods() {
            $.ajax({
                url:'/searchGoods',
                type:'GET',
                async: false,
                cache: false,
                processData: false,
                success: function (returndata) {
                    var json = JSON.parse(returndata);
                    for(var i=0;i<json.length;i++){
                        $("#img_"+(i+1)).attr("src","images/"+json[i]["picture"]);
                        $("#out_name_"+(i+1)).append(json[i]["name"]);
                        $("#out_price_"+(i+1)).append("￥"+json[i]["price"]);
                        $("#in_price_"+(i+1)).attr("value",json[i]["price"]);
                        $("#in_name_"+(i+1)).attr("value",json[i]["name"]);
                        $("#item_id_"+(i+1)).attr("value",json[i]["id"]);

                    }
                },
                error: function (returndata) {

                }
            });
        }
        function do_searchOrder(tag) {
            $.ajax({
                url: '/searchOrder',
                type: 'GET',
                async: false,
                cache: false,
                processData: false,
                success: function (returndata) {
                    var json = JSON.parse(returndata);
                    //0表示供应商
                    //1表示采购员
                    if(tag==1){
                        $('#buyer_info').empty();
                        for(var i=0;i<json.length;i++){
                            var id = json[i]["id"];
                            var href = "javascript:do_updateOrder("+id+","+tag+")";
                            if (json[i]["state"]=="outstanding"){
                                var string ='<a href="'+href+'" id="'+'buyer_order_'+id+'" class="list-group-item list-group-item-warning">'+'订单编号：'+id+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期望送达日期: '+json[i]["expect"]+'</a>'
                            }
                            if (json[i]["state"]=="completed"){
                                var string ='<a href="'+href+'" id="'+'buyer_order_'+id+'" class="list-group-item list-group-item-success">'+'订单编号：'+id+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期望送达日期: '+json[i]["expect"]+'</a>'
                            }
                            if (json[i]["state"]=="delivering"){
                                var string ='<a href="'+href+'" id="'+'buyer_order_'+id+'" class="list-group-item list-group-item-info">'+'订单编号：'+id+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期望送达日期: '+json[i]["expect"]+'</a>'
                            }
                            $('#buyer_info').append(string);
                        }
                    }else if(tag==0){
                        $('#supplier_info').empty();
                        for(var i=0;i<json.length;i++){
                            var id = json[i]["id"];
                            var href = "javascript:do_updateOrder("+id+","+tag+")";
                            if (json[i]["state"]=="outstanding"){
                                var string ='<a href="'+href+'" id="'+'supplier_order_'+id+'" class="list-group-item list-group-item-warning">'+'订单编号：'+id+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期望送达日期: '+json[i]["expect"]+'</a>'
                            }
                            if (json[i]["state"]=="completed"){
                                var string ='<a href="'+href+'" id="'+'supplier_order_'+id+'" class="list-group-item list-group-item-success">'+'订单编号：'+id+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期望送达日期: '+json[i]["expect"]+'</a>'
                            }
                            if (json[i]["state"]=="delivering"){
                                var string ='<a href="'+href+'" id="'+'supplier_order_'+id+'" class="list-group-item list-group-item-info">'+'订单编号：'+id+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期望送达日期: '+json[i]["expect"]+'</a>'
                            }
                            $('#supplier_info').append(string);
                        }
                    }
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        function do_updateOrder(id,tag) {
            var string = '/updateOrder?id='+id;
            var id = '#buyer_order_'+id;
            $.ajax({
                url:string,
                type:'GET',
                async:false,
                cache:false,
                processDate:false,
                success:function (returndata) {
                       do_searchOrder(tag);
                },
                error: function (returndata) {

                }
            });
        }
        function do_putInBuyerList(id){
            $.ajax({
                url: '/searchOrder',
                type: 'GET',
                async: false,
                cache: false,
                processData: false,
                success: function (returndata) {
                    for(var i=0;i<length(returndata);i++){
                        returndata[i].id
                    }
                    alert(returndata)
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
