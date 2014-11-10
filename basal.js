(function(){
	var bs = {};
	bs.$ = function(str) {
		if(!!str)
	    	return document.getElementById(str);
	}
	bs.request = function(method,url,cb) {
        //创建XMLHttpRequest对象
        var xml = new XMLHttpRequest();
        xml.open(method, url);
        xml.onreadystatechange = function () {
            if (xml.readyState == 4 && xml.status == 200) {
            	var res;
            	try{
            		res = JSON.parse(xml.response);
            	}catch(e){
            		console.log(e);
            	}
                cb(res);
            }
        };
        xml.send(null);
    }



})();