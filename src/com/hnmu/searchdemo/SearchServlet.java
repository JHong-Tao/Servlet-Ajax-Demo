package com.hnmu.searchdemo;

import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class SearchServlet extends HttpServlet{
    static  List<String> datas = new ArrayList<String>();
    static {
        // 模你数据
        datas.add("ajax");
        datas.add("ajax post");
        datas.add("becky");
        datas.add("bill");
        datas.add("james");
        datas.add("jerry");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // 设置编码
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        // 访问测试
        // System.out.println("测试");
        // 首先获得客户端发送来的数据keyword
        String keyword = request.getParameter("keyword");
        // 获得关键字之后进行处理，得到关联数据
        List<String> listData = getDate(keyword);
        // 返回json格式的数据
        JSONArray jsonArray = JSONArray.fromObject(listData);
        response.getWriter().write(jsonArray.toString());

    }

    // 获取数据函数
    public List<String> getDate(String keyword){
        List<String> list = new ArrayList<String>();
        for (String data : datas) {
            if(data.contains(keyword)){
                list.add(data);
            }
        }
        return list;
    }
}
