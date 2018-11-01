var password='';
var key=randomFrom(1,5);
password=prompt('请正确回答下列问题(化简,判断,求值,填空等):\n'+getQ(key),'');
if (password != getA(key)){   
	alert("回答错误,已拒绝访问！！");
	window.opener=null;
	window.open('','_self');
	window.close();
	}else{
	alert("最后更新：2018/10/29");	
}

function getQ(var1)
{
	switch(var1)
	{
		case 1: return '(x+y)(x-y)-(x²-y²)=?';
		case 2: return '√2(√32-√16-√8-√4-√2-√2+√25)=?';
		case 3: return '若 y=(2-k)x+b 是正比例函数，且 |k|=2，则 k+b=?';
		case 4: return 'π^0+sin 90+(-1)^2018=?';
		case 5: return '在Rt△ABC中,∠C=90°,AC=6，BC=8，则以AB为边长的正方形面积是?';
	}
}

function getA(var2)
{
	switch(var2)
	{
		case 1: return '0';
		case 2: return '2';
		case 3: return '-2';
		case 4: return '3';
		case 5: return '100';
	}
}

function randomFrom(lowerValue,upperValue)
{
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}