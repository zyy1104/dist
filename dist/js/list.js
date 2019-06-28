 $(function(){  
 	$.get("http://47.104.244.134:8080/goodsbytid.do", {"tid":13,"page":1,"limit":5},function(data){
 		//console.log(data);
		var str = "";
        var data = data.data;
        for(var i in data){
            str += `
            	<li data-id="${data[i].id}">
		            <a href="detail.html?=${data[i].id}">
		            	<img src="${data[i].picurl}" data-id="${data[i].id}"/>
		            <a/>
		            <div class="list-xia">
			            <h2>${data[i].name}</h2>
			           	<i>价格:${(data[i].price)/100}RMB</i>		        	
			           	<sapn>${data[i].pubdate}</span>
			           	<input type="submit" value="加入购物车"/>		           	
		           	 </div>
	           	</li>
	        `       
    	}
    	$("#list ul").html(str);

	});
              
	$.get("http://47.104.244.134:8080/goodsbytid.do", {"tid":13,"page":3,"limit":5},function(data){
		var str = "";
	    var data = data.data;
	   	for(var i in data){
	        str += `
		        <li data-id="${data[i].id}">
			        <a href="detail.html?=${data[i].id}">      
			        	<img src="${data[i].picurl}" data-id="${data[i].id}"/>
			        <a/>
			        <div class="list-xia">
				        <h2>${data[i].name}</h2>
				       	<i>价格:${data[i].price/100}RMB</i>                       	
				       	<sapn>${data[i].pubdate}</span>
				       	<input type="submit" value="加入购物车"/>
			       	</div>
		       	</li>
	       	`
		}
	    $("#listone ul").html(str);
	});  	        

	$.get("http://47.104.244.134:8080/goodsbytid.do", {"tid":13,"page":2,"limit":5},function(data){
		var str = "";
	    var data = data.data;
	    for(var i in data){
	    str += `<li data-id="${data[i].id}">
	       	<a href="detail.html?=${data[i].id}">
	     		 <img src="${data[i].picurl}" data-id="${data[i].id}"/>
	     	 <a/>
	       <div class="list-xia">
	       		<h2>${data[i].name}</h2>
	       		<i>价格:${data[i].price/100}RMB</i>                      		
	       		<sapn>${data[i].pubdate}</span>
	       		<input type="submit" value="加入购物车"/>
	       	</div>
	       	</li>`
	
		}	    
	    $("#listtwo ul").html(str);
	});  
           
           
	$(document).on("click","input",function(){	  	
        var _this= $(this);		
		var gid1 = $(this).parent().parent().parent().attr("data-id");
        	console.log(gid1);           
     	var token =$.cookie("token");
		$.get("http://47.104.244.134:8080/cartsave.do",{gid:gid1,token:token},function(data){
			if(data.code==0){
				alert("已加入购物车 ")
			}
		});
	});

 
 
 });