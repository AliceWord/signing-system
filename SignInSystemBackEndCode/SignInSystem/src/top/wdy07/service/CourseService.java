package top.wdy07.service;

import java.sql.SQLException;
import java.util.List;

import top.wdy07.dao.CourseDao;
import top.wdy07.domain.Course;
import top.wdy07.domain.SignCourse;

public class CourseService {

	public List<Course> getCourse(String wechatid) throws SQLException {
		// TODO Auto-generated method stub
		CourseDao dao = new CourseDao();
		List<Course> courseList = dao.getCourse(wechatid);
		return courseList;
	}

	public Course searchCourse(String courseName) throws SQLException {
		// TODO Auto-generated method stub
		CourseDao dao = new CourseDao();
		Course course = dao.searchCourse(courseName);
		return course;
	}

	public List<SignCourse> getTodayCourse(String wechatid, String day) throws SQLException {
		// TODO Auto-generated method stub
		CourseDao dao = new CourseDao();
		List<SignCourse> signCourseList = dao.getTodayCourse(wechatid,day);
		return signCourseList;
	}


}
