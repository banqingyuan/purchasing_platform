// JavaScript Document
        function do_static() {
            $.ajax({
                url: 'http://127.0.0.1:8080/login.html',
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
                url: 'http://127.0.0.1:8080/test/session',
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
				url:'http://127.0.0.1:8080/searchGoods?goodsName='+param,
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
                url: 'http://127.0.0.1:8080/buyerRegister',
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
						$("#user_ul").append('<li><a href="#" data-toggle="modal"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
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
                url: 'http://127.0.0.1:8080/supplierRegister',
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
						$("#user_ul").append('<li><a href="#" data-toggle="modal"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
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
                url: 'http://127.0.0.1:8080/supplierLogin',
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
						$("#user_ul").append('<li><a href="#" data-toggle="modal"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
						$("#user_email_span").append(param.email);
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
                url: 'http://127.0.0.1:8080/buyerLogin',
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
						$("#user_ul").append('<li><a href="#" data-toggle="modal"><span class="fa fa-unlock-alt" aria-hidden="true"></span><span id="user_email_span"></span></a></li>');
						$("#user_email_span").append(param.email);
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
                url: 'http://127.0.0.1:8080/searchGoods',
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
                url: 'http://127.0.0.1:8080/addGoods',
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
                url: 'http://127.0.0.1:8080/updateGoods',
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
        function do_searchOrder() {			
			var goodsName = $("#goodsName").val()
            $.ajax({
                url: 'http://127.0.0.1:8080/searchOrder?state='+goodsName,
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
        function do_createOrder(){
            var initOrderInfo = {"expect":"2019-12-04 19:08:29","goodsMap":{1:10,2:25,9:10,10:20}}/*{id:weight}*/
            $.ajax({
                url: 'http://127.0.0.1:8080/createOrder',
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
