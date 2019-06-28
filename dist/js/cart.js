 $(function(){
 	var token =$.cookie("token");
	$.get("http://47.104.244.134:8080/cartlist.do",{token:token},function(data){
		var str="";
		console.log(data);
		for(var i =0;i<data.length;i++){
			str +=`
				<li  data-id="${data[i].id}" data-gid="${data[i].gid}">
					<input type ="checkbox"/>
					<div class="cart-img">
						<img src="${data[i].goods.picurl}"/>
					</div>
					<div class="cart-left">
						<h5>${data[i].goods.name}</h5>
						<strong>${(data[i].goods.price)/100}</strong>
						<p>
							<i class="jcarts">&lt;</i>
							<span>${data[i].count}</span>
							<i class="scarts">&gt;</i> 
						</p>
						<button>移除此商品<button>
					</div>
					<b>${data[i].count*(data[i].goods.price/100)}</b><i>RMB总价</i>
				</li>
			`
		};	
		
		$(".cart-che ul").html(str);
		$("input[type='checkbox']").prop("checked",true);
		function summ(){
			var sum =0 ;
			$("input:checked").siblings("b").each(function(){
				sum+=parseInt($(this).html());
			});			
			$(".cart-payfor").text(sum);			
		}
		
		$(".jcarts").click(function(){
			var _this= $(this);
			var id1=  $(this).parent().parent().parent().attr("data-id");
			var gid1 = $(this).parent().parent().parent().attr("data-gid");
			$.get("http://47.104.244.134:8080/cartupdate.do",{id:id1,gid:gid1,token: $.cookie("token"),num:-1},function(data){
				var num1 = $(_this).next("span").html();
				$(_this).next("span").html(--num1);
				var price = parseInt($(_this).parent().siblings("strong").html())*num1;
				$(_this).parent().parent().siblings("b").html(price);
				summ();
				if(num1==0){				
					$(_this).parent().parent().parent().remove();										
					$.get("http://47.104.244.134:8080/cartupdate.do",{id:id1,gid:gid1,token: $.cookie("token"),num:0},function(data){					
					});
				}
			});
		
		});	
		
		
		$(".scarts").click(function(){
			var _this= $(this);
			var id1=  $(this).parent().parent().parent().attr("data-id");
			var gid1 = $(this).parent().parent().parent().attr("data-gid");
			$.get("http://47.104.244.134:8080/cartupdate.do",{id:id1,gid:gid1,token: $.cookie("token"),num:1},function(data){
				var num1 = $(_this).prev("span").html();
				$(_this).prev("span").html(++num1);
				var price = parseInt($(_this).parent().siblings("strong").html())*num1;
				$(_this).parent().parent().siblings("b").html(price);
				summ()
			});		
		});
		
			
		$("button").click(function(){
			var _this =$(this);
			var id1=  $(this).parent().parent().attr("data-id");
			var gid1 = $(this).parent().parent().attr("data-gid");			
			$.get("http://47.104.244.134:8080/cartupdate.do",{id:id1,gid:gid1,token: $.cookie("token"),num:0},function(data){
				$(_this).parent().parent().remove();
			});			
		});
		
	});
	
 });
