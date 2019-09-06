<%--
  Created by IntelliJ IDEA.
  User: JHong.Tao
  Date: 2019/9/6
  Time: 0:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>search</title>
    <link rel="stylesheet" href="css/search.css">
    <script type="text/javascript" src="./js/search.js"></script>
  </head>
  <body>
    <div id="mydiv">
      <%--输入框--%>
      <input type="text" size="50" id="keyword" onkeyup="getMoreContents()" onblur="kewordBlur()" onfocus="getMoreContents()"/>
      <input type="button" value="百度一下" width="50px"/>
      <div id="popDiv">
        <table id="content_table" bgcolor="#FFFAFA" border="0" cellspacing="0" cellpadding="0">
          <tbody id="content_table_body">
            <%--动态查询出来的数据显示在这个地方--%>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</html>
