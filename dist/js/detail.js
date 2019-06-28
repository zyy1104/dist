$(function(){
	var id = location.search.split("=")[1];	
	$.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},function(data){
		var str = "";
		str = `
			<li>
				<img src="${data.picurl}"/>
				<div class="marleft">
					<h5>${data.name}</h5>
					<span>上架时间${data.pubdate}</span>
					<i>店铺:${data.info}</i>
					<b>¥${(data.price)/100}</b>
					<input type="button" value="加入购物车" class="btn">
				</div>
			</li>
		`
		$(".details-da-xiang ul").html(str);
	});
	$(document).on("click","input",function(){
		var token =$.cookie("token");
		$.get("http://47.104.244.134:8080/cartsave.do",{gid:id,token:token},function(data){
			if(data.code==0){
				location.href="cart.html";
			}
		});
	});	
});