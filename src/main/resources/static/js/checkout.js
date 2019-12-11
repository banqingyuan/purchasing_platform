
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
function getGoodsInfo(id,i) {
    var string = '/searchGoodsById?id='+id;
    $.ajax({
        url:string,
        type:'GET',
        async: false,
        cache: false,
        processData: false,
        success: function (returndata) {
            var json = JSON.parse(returndata);
            var table = '<tr class="rem1">\n' +
                '\t\t\t\t\t\t\t\t<td class="invert">'+ i +'</td>\n' +
                '\t\t\t\t\t\t\t\t<td class="invert-image">\n' +
                '\t\t\t\t\t\t\t\t\t<a href="single2.html">\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="images/'+ json["picture"] +'" alt=" " class="img-responsive">\n' +
                '\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t<td class="invert">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="quantity">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="quantity-select">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="entry value">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<span>'+ GetQueryString("quantity_"+i) +'</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t<td class="invert">'+ json["name"] +'</td>\n' +
                '\t\t\t\t\t\t\t\t<td class="invert">￥'+ json["price"] +'</td>\n' +
                '\t\t\t\t\t\t\t</tr>'
            $("#order_tbody").append(table);
        },
        error: function (returndata) {
        }
    });
}

function find_Out_Count() {
    var i=1;
    var count = 0;
    var string="item_name_"+i;
    while (GetQueryString(string)!=null){
        i++;
        string="item_name_"+i;
        count++;
    }
    $("#number_of_goods").append(count+"个产品")
    set_Table(count);
}
var order_info = {};
function set_Table(count) {
    for(var i=1;i<=count;i++) {
        var string = "item_id_" + i;
        var id = GetQueryString(string);
        order_info[GetQueryString("item_id_"+i)]=GetQueryString("quantity_"+i);
        getGoodsInfo(id, i);
    }
}
function do_createOrder(){
    var string = $("#expect_time").val();
    var initOrderInfo = {"expect":string,"goodsMap":order_info};/*{id:weight}*/
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