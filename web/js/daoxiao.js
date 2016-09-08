var all_number=0;
var img_number=document.getElementById('img1');
var img_win=document.getElementById('img2');
var yuqian=0;
var yaqian=0;

function opend () {
	yuqian=100;
	document.getElementById("yue").innerHTML=yuqian;
	img1.src="iamges/number/cai.png";
	img2.src="iamges/number/cai.png";
	document.getElementById("win").innerHTML="";
	document.getElementById("out").innerHTML="";
}


function allgress (id) {
	yaqian=document.getElementById('jinge').value;
	gress(id);
}

function gress(id) {
	all_number=Math.ceil(Math.random()*16);
	var panduan=0;
	if (yuqian>0) {

		switch(id){
			case "11":
			panduan=bigangsamll ();
			if (panduan) {
				document.getElementById("win").innerHTML="恭喜！你赢了!";
				yuqian = yuqian+yaqian;
				document.getElementById("yue").innerHTML=yuqian;
			} 
			else{
				document.getElementById("win").innerHTML="很遗憾，你输了!";
				yuqian = yuqian-yaqian;
				document.getElementById("yue").innerHTML=yuqian;
			};
			break;
			case "10":
			panduan=bigangsamll2 ();
			if (panduan) {
				document.getElementById("win").innerHTML="很遗憾，你输了!";
				yuqian = yuqian-yaqian;
				document.getElementById("yue").innerHTML=yuqian;
			} 
			else{
				document.getElementById("win").innerHTML="恭喜！你赢了!";
				yuqian = yuqian+yaqian;
				document.getElementById("yue").innerHTML=yuqian;
			};
			break;
		}	
	} 
	else{
		alert("你没钱了，游戏结束");
	};

}

function bigangsamll () {
	if (10<all_number) {
		img1.src="iamges/number/"+all_number+".png";
		img2.src="iamges/ying.png";
		document.getElementById("out").innerHTML="结果是"+all_number;
		return true;
	}
	else{
		img1.src="iamges/number/"+all_number+".png";
		img2.src="iamges/shu.png";
		document.getElementById("out").innerHTML="结果是"+all_number;
		return false;

	}
}

function bigangsamll2 () {
	if (10<all_number) {
		img1.src="iamges/number/"+all_number+".png";
		img2.src="iamges/shu.png";
		document.getElementById("out").innerHTML="结果是"+all_number;
		return true;
	}
	else{
		img1.src="iamges/number/"+all_number+".png";
		img2.src="iamges/ying.png";
		document.getElementById("out").innerHTML="结果是"+all_number;
		return false;

	}
}