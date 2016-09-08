	function playVid()
	  {
		  var myVideo=document.getElementById("video1");
		  myVideo.play();
	  }

	function pauseVid()
	  {
		  var myVideo=document.getElementById("video1");
		  myVideo.pause();
	  }

	function time(){
	    t_div = document.getElementById('time_a');
	   var now=new Date()
	   t_div.innerHTML = "现在是"+now.getFullYear()
	    +"年"+(now.getMonth()+1)+"月"+now.getDate()
	    +"日"+now.getHours()+"时"+now.getMinutes()
	    +"分"+now.getSeconds()+"秒";
	   setTimeout(time,1000);
	  }
  function all_main () {
	  	time();
	  	playVid();
	  	fade();
	  }


  	var b = 1;
	var c = true;
	function fade () {
	 	if (Document.all); 
	 	if (c==true) {
	 		b++;
	 	};
	 	if (b==600) {
	 		b=b-100;
	 		c=false;
	 	};
	 	if (b==200) {
	 		b=b+70;
	 		c=true;
	 	};
	 	if (c==false) {
	 		b=b-50;
	 	};
	 	u.width=950+b;
	 	u.height=1225-b;
	 	u.botton
	 	setTimeout("fade()",10)

	 } 