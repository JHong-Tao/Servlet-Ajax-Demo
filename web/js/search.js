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
    // 测试xmlHttp对象  alert(xmlHttp);
    // 给服务器发送数据
    var url = "search?keyword="+escape(content.value);
    xmlHttp.open("GET",urL,true);   //true 表示javascript脚本会在send（）方法之后继续执行，而不会等待来自服务器的响应
    // xmlHttp绑定回调方法，这个回调方法会在xmlHttp状态改变的时候被调用
    // xmlHttp的状态：0-4，我们只关心4（表示完成）
    // 当完成后调用回调方法
    xmlHttp.onreadyStatechange=callback;
    xmlHttp.send(null);
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

// 回调函数
function callback() {
    if(xmlHttp.readyState == 4){
        // 200代表服务器响应成功 ，400 资源没找到， 500 程序出错
        if( xmlHttp.status == 200){
            var result = xmlHttp.responseText;
            // 解析获得的数据
            var json = eval("("+result+")");
            // 获得数据后可以动态的显示数据，将数据显示到输入框的下面
        }
    }
}