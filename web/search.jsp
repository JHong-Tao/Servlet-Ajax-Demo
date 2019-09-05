<%--
  Created by IntelliJ IDEA.
  User: PC-Tao
  Date: 2019/9/6
  Time: 0:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>search</title>
    <link rel="stylesheet" href="css/search.css">
    <script type="text/javascript" src="js/search.js"></script>
  </head>
  <body>
    <div id="mydiv">
      <!--输入框-->
      <input type="text" size="50" id="keyword" onkeyup="getMoreContents()"/>
      <input type="button" value="百度一下" width="50px"/>
    </div>
  </body>
</html>
