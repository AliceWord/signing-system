package top.wdy07.web;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import top.wdy07.domain.Course;
import top.wdy07.domain.SignCourse;
import top.wdy07.service.CourseService;

public class CourseTodayServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String Wechatid = request.getParameter("Wechatid");
		String day = request.getParameter("day");
		CourseService service = new CourseService();
		List<SignCourse> signCourseList = null;
		try {
			signCourseList =  service.getTodayCourse(Wechatid,day);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		List<SignCourse> signCourseList2=new ArrayList<SignCourse>();;
		for(SignCourse sc:signCourseList)
		{
			if(sc!=null) {
				signCourseList2.add(sc);
			}
		}
		response.setCharacterEncoding("UTF-8");
		JSONArray listArray=JSONArray.fromObject(signCourseList2);
		System.out.println("listArray:"+listArray.toString());
		response.getWriter().write(listArray.toString());
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}