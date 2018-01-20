package top.wdy07.web;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import top.wdy07.domain.Student;
import top.wdy07.service.UserService;

public class GetUserInfoServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String Wechatid=request.getParameter("Wechatid");
		UserService service=new UserService();
		Student stu=null;
		try {
			stu = service.getUserInfo(Wechatid);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response.setCharacterEncoding("UTF-8");
		JSONObject jsonStu = JSONObject.fromObject(stu);
		System.out.println("listArray:"+jsonStu.toString());
		response.getWriter().write(jsonStu.toString());

	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}