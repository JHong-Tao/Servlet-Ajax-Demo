// 定义全局变量xmlHttp
var xmlHttp;

// 获得用户输入内容的关联信息的函数
function getMoreContents() {
    // 首先要获得用户的输入
    var content = document.getElementById("keyword");
    if(content.value == ""){
        return;
    }
    // 测试键盘弹起 alert(content.value);
    // 然后要给服务器发送用户输入的内容，因为我们采用的是ajax异步发送数据
    // 所有我们要使用一个对象，XmlHttp对象
    xmlHttp =creatXMLHttp();

    alert(xmlHttp);
}

// 获取XmlHttp对象的函数
function creatXMLHttp() {
    // 对于大多数的浏览器都是用w3c标准,浏览器中自带了XMLHttpRequest对象
    var xmlHttp;
    if (window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }
    // 微软的浏览器
    if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        if(!xmlHttp){
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    return xmlHttp;
}