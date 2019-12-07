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
		function do_searchGoods(){
			var param = $('#goodsName').val()
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
						$("#user_ul").append('<li><a href="#" data-toggle="modal" data-target="#myModal5"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
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
						do_searchOrder(0);
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

        function do_addGoods() {
            var goods = {"name": "土鸡蛋", "price": 2.4, "inventory": 5000, "simpledescribe": "新鲜鸡蛋"}
            $.ajax({
                url: '/addGoods',
                type: 'POST',
                async: false,
                cache: false,
                data: JSON.stringify(goods),
                contentType: "application/json;charset=utf-8",
                processData: false,
                success: function (returndata) {
                    alert(returndata);
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });


        }
        function do_updateGoods() {
            var goods = {"goodsName": $("#goodsName").val()}
            $.ajax({
                url: '/updateGoods',
                type: 'POST',
                async: false,
                cache: false,
                data: JSON.stringify(goods),
                contentType: "application/json;charset=utf-8",
                processData: false,
                success: function (returndata) {
                    alert(returndata);
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
                                var string ='<a href="'+href+'" id="'+'buyer_order_'+id+'" class="list-group-item list-group-item-warning">'+'订单编号：'+id+'</a>'
                            }
                            if (json[i]["state"]=="completed"){
                                var string ='<a href="'+href+'" id="'+'buyer_order_'+id+'" class="list-group-item list-group-item-success">'+'订单编号：'+id+'</a>'
                            }
                            if (json[i]["state"]=="delivering"){
                                var string ='<a href="'+href+'" id="'+'buyer_order_'+id+'" class="list-group-item list-group-item-info">'+'订单编号：'+id+'</a>'
                            }
                            $('#buyer_info').append(string);
                        }
                    }else if(tag==0){
                        $('#supplier_info').empty();
                        for(var i=0;i<json.length;i++){
                            var id = json[i]["id"];
                            var href = "javascript:do_updateOrder("+id+","+tag+")";
                            if (json[i]["state"]=="outstanding"){
                                var string ='<a href="'+href+'" id="'+'supplier_order_'+id+'" class="list-group-item list-group-item-warning">'+'订单编号：'+id+'</a>'
                            }
                            if (json[i]["state"]=="completed"){
                                var string ='<a href="'+href+'" id="'+'supplier_order_'+id+'" class="list-group-item list-group-item-success">'+'订单编号：'+id+'</a>'
                            }
                            if (json[i]["state"]=="delivering"){
                                var string ='<a href="'+href+'" id="'+'supplier_order_'+id+'" class="list-group-item list-group-item-info">'+'订单编号：'+id+'</a>'
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
        function do_createOrder(){
            var initOrderInfo = {"expect":"2019-12-04 19:08:29","goodsMap":{1:10,2:25,9:10,10:20}}/*{id:weight}*/
            $.ajax({
                url: '/createOrder',
                type: 'POST',
                async: false,
                cache: false,
                data: JSON.stringify(initOrderInfo),
                contentType: "application/json;charset=utf-8",
                processData: false,
                success: function (returndata) {
                    alert(returndata);
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
