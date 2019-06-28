$(function(){
	var num  =0;
	var i= 0;
	var timer = null;
	var count=0;
	foo();
	function foo(){
		timer = setInterval(function(){
			$(".lunbo1 li").eq(i).fadeIn().siblings().fadeOut();
			$(".jiaobiao li").eq(i).css({"background":"#cc0000"})
			.siblings().css({"background":"black"});
			
			i++;
			if(i == $(".lunbo1 li").length){
				i=0; 
			}
			//console.log(i);
			$(".yang").stop().animate({
				left:"count*-268 + 'px'"
			},"slow");
			$(".btnBg em").eq(count).addClass("on").siblings().removeClass("on");
			count++;
			if( count == ".yang li".length){
				count = 0;
			}
			
			$(".bannerSisix").stop().animate({
				left:num*-210 + 'px'
			},"slow");
			$(".smallUl em").eq(num).addClass("on")
			.siblings().removeClass("on");
						
			num++;
			if(num==4){
				num=0;
			}						
		},2000);
	}	                                                                                                                                                                                                                                                    
	
	$(".lunbo1").on("mouseout",function(){	
		setInterval(foo());
	});
		
	$(".lunbo1").on("mouseover",function(){	
		clearInterval(timer);
		$(".jiaobiao li").on("click mouseover",function(){
			var inde = $(this).index();
			$(this).css({"background":"#cc0000"}).siblings().css({"background":"black"});
			$(".lunbo1 li").eq(inde).fadeIn().siblings().fadeOut();
			i = inde;
		})	
	});
	
	$("#gonggao").hover(function(){
		$(".indexTabNewList").show().next().hide();
		$(this).css({"border-top": "2px solid #c41921","background": "#ffffff","border-bottom":"none"});
		$("#cuxiao").css({"border":"1px solid #ececec","background":"#f9f9f9"});
	});
	
	$("#cuxiao").hover(function(){
		$(".indexTabNewList").hide().next().show();
		$(this).css({"border-top":"2px solid #c41921","background": "#ffffff","border-bottom":"none"});
		$("#gonggao").css({"border":"1px solid #ececec","background":"#f9f9f9"});	
	});
	
	$("#fengqiang").hover(function(){
		$(".indexTabConWrap").css({"margin-top":"10px"}).show().siblings().hide();
		$(this).css({"border-top":"2px solid #c41921","background": "#ffffff","border-bottom":"none"}).siblings().css({"border":"1px solid #ececec","background":"#f9f9f9"});		
	});
	
	$(".feng").hover(function(){
		$(".page1").show().siblings().hide();
	});
	$(".bao").hover(function(){
		$(".page2").show().siblings().hide();
	});
	$(".yuan").hover(function(){
		$(".page3").show().siblings().hide();
	});
	$(".zheng").hover(function(){
		$(".page4").show().siblings().hide();
	});
	$(".jing").hover(function(){
		$(".page5").show().siblings().hide();
	});
	
	$(".indexTuanList").mouseover(function(){
		clearInterval(timer);
	});
	$(".indexTuanList").mouseout(function(){	
		setInterval(foo());						
	});
	
	$(window).scroll(function(){
		var scrolltop = $("html,body").scrollTop();
		//console.log(scrolltop);
		if(scrolltop>400){
			$(".fixDiv").show().css({"top":"200px"});
	
		}else{
			$(".fixDiv").hide();
		}
		if(scrolltop>1800){
			$(".floorBack").addClass("floorOneOn").siblings().removeClass("floorOneOn");
		}
		$(".floorBack").click(function(){
			scrolltop = 0;
		});		
	});
	//没有影响为help啊	
	
	$.get("http://47.104.244.134:8080/goodstypelist.do",{l:1},function(data){
		//console.log(data);
		var str = '';
		for(let i = 0;i < data.length;i++){
			str += `<a href="detail.html?id=${data[i].id}">${data[i].name}</a>`
		}
		$(".catItem .erji").html(str);
	});	
});


/*var oTxt=document.getElementsByClassName("center-seach");
	var oBtn=document.getElementsByClassName("center-sub");
	var oBox=document.getElementById("box");
	oTxt.oninput=oTxt.onclick=function(){
		var oScript=document.createElement("script");
		oScript.src="http://list.jiuxian.com/assKeyWords.htm?t=1551251746557&wd="+oTxt.value+"&callback=data";
		
		document.body.appendChild(oScript);
		oBox.style.display="block";
	}
	oTxt.onblur=function(){
		oBox.style.display="none";
	}
	function data(obj){
		var oData=obj.resultList;
		console.log(oData);
		var str="";
		for(var i=2;i<oData.length;i++){
			str+="<li>"+oData[i].word+"</li>"
		}
		oBox.innerHTML=str;
	}
*/

