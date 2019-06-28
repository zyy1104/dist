$(function(){
	$(".yincang").css({"display":"none"});
	
	$(".nright").hover(function(){
		$(".yincang").css({"display":"block"});
		$(".nright a").css({"text-decoration":"none","color":"#ccc"});
	},function(){
		$(".yincang").css({"display":"none"});
	});
	
	$(".nright a").hover(function(){
		$(this).css({"text-decoration":"underline"});
	},function(){
		$(".nright a").css({"text-decoration":"none"});		
	});
	
	
//切换为注册页面；
	$(".center-tone").click(function(){
		$(".center22").css({"display":"block"});
		$(".center").css({"display":"none"});
	});
	
	$(".center-ttwo").click(function(){
		$(".center").css({"display":"block"}).next().css({"display":"none"});
	});
	
	$("#txt1").focus(function(){
		$(".plephone").hide();
		$(".plephone2").hide();
		$(this).parent().css({"border":"1px solid #ed787f"}).end();		 
	});  
	var myreg1=/^1\d{10}/;

//调用注册、验证用户名接口
	$("#txt1").focusout(function(){
		$.get("http://47.104.244.134:8080/username.do",{username:$("#txt1").val()},function(data){
			console.log($("#txt1").val());
			if(data.code==0){
				alert("用户名已被占用");
				
			}
		});
		
		$(".plenumone").hide();
		var  teval = $(this).val();
	 	if(teval.length != 11 || myreg1.test(teval) == false){
            $(".plephone").show();
        }
	    if(teval.length == 11&&myreg1.test(teval) == true){
            $(".plephone").hide();
            $(this).parent().css({"border":"1px solid #ccc"});
            $(".plephone2").show();  
        }
	});

	$("#txt2").focus(function(){
		var myreg =$(".pleyxian").show().next().hide();
		$(this).parent().css({"border":"1px solid #ed787f"});
	});
	var myreg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	$("#txt2").focusout(function(){
		$.get("http://47.104.244.134:8080/useremail.do",{useremail:$("#txt2").val()},function(data){
			if(data.code==0){
				alert("邮箱重复");
			}
		});		
		var teval = $(this).val();
		if(myreg2.test(teval) == false){
			$(".pleyxian").hide().next().show();
			$(this).parent().css({"border":"1px solid #ed787f"});
		}
		if(myreg2.test(teval) == true && teval.length>5){	
			$(".pleyxian").hide().next().hide();
			$(this).parent().css({"border":"1px solid #ccc"});
		}		
	});

	$("#txt3").focusout(function(){
		if($("#txt3").val()== ""){
			$(this).parent().css({"border":"1px solid #ed787f"});
			$(".plejzm").show();
		}
	});
	
	$("#txt4").focus(function(){		
		$(".plepass").show().next().hide();
	});
	var myreg4 =/^[a-z0-9A-Z\d_]{8,18}$/;
	$("#txt4").focusout(function(){		
		var teval = $(this).val();
		if(teval.length < 8 || myreg4.test(teval) == false){
			$(this).parent().css({"border":"1px solid #ed787f"});
			$(".plepass").hide().next().show();
		}
		if(teval.length < 18 && myreg4.test(teval) == true){
			$(".plepass").hide().next().hide();
			$(this).parent().css({"border":"1px solid #ccc"});
		}		
	});

	$("#txt5").focusout(function(){
		if($(this).val() !== $("#txt4").val()){
			$(".passanthor").show();
			$(this).parent().css({"border":"1px solid #ed787f"});
		}
		if($(this).val() == $("#txt4").val()){
			$(".passanthor").hide();
			$(this).parent().css({"border":"1px solid #ccc"});
		}
	});


	$("#txt6").click(function(){
		if ($("#txt6").prop('checked') == true){
		    $(".anniuniu").hide();
		}
		if($("#txt6").prop('checked') == false){
			$(".anniuniu").show();
		}
	});
		
	$(".tijiaoan").on("click",function(){	
		if(myreg1.test($("#txt1").val()) == true && myreg4.test($("#txt4").val()) == true && myreg2.test($("#txt2").val()) == true){	
			
			$.post("http://47.104.244.134:8080/usersave.do",{"username":$("#txt1").val(),"password":$("#txt4").val(),"email":$("#txt2").val(),"sex":"男"},function(data){
				if(data.code==0){
					location.href="login1.html";
				}	
				
			});
		}		
	});
});
