
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
function set_Table(count) {
    for(var i=1;i<=count;i++) {
        var string = "item_id_" + i;
        var id = GetQueryString(string);
        getGoodsInfo(id, i);
    }
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