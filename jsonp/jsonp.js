function jsonpCallback(data) {
    console.log(data.name)
}
var JSONP = document.createElement("script");
JSONP.type = "text/javascript";
JSONP.src = "http://localhost:8089/jsonp/data.js"; //跨域  默认端口为8080
document.getElementsByTagName("head")[0].appendChild(JSONP);


