package top.wdy07.web;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import top.wdy07.domain.Course;
import top.wdy07.service.CourseService;

public class CourseSearchServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String courseName = request.getParameter("courseName");
		CourseService service = new CourseService();
		Course course = null;
		try {
			course = service.searchCourse(courseName);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response.setCharacterEncoding("UTF-8");
		 JSONObject json = JSONObject.fromObject(course);
		 //JSONArray array=JSONArray.fromObject(course);
		response.getWriter().write(json.toString());
		System.out.println(json.toString());
		
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}