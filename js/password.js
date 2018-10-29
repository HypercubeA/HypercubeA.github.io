var password="";
password=prompt('请输入密码(本功能需输入密码才可使用):','');
if (password != 'admin'){   
	alert("密码不正确,拒绝访问！清确认您的密码！！");
	window.opener=null;
	window.open('','_self');
	window.close();
	}else{
	alert("最后更新：2018/10/29");	
}