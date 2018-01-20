package top.wdy07.web;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import top.wdy07.domain.Course;
import top.wdy07.service.CourseService;

public class GetCourseWeekServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String Wechatid = request.getParameter("Wechatid");
		CourseService service = new CourseService();
		List<Course> courseList = null;
		try {
			courseList = service.getCourse(Wechatid);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response.setCharacterEncoding("UTF-8");
		JSONArray listArray=JSONArray.fromObject(courseList);
		System.out.println("listArray:"+listArray.toString());
		response.getWriter().write(listArray.toString());
		
		
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}