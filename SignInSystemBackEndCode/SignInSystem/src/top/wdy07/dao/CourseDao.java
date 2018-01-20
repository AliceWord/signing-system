package top.wdy07.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import top.wdy07.domain.Course;
import top.wdy07.domain.CourseId;
import top.wdy07.domain.SignCourse;
import top.wdy07.domain.Student;
import top.wdy07.domain.Teacher;
import top.wdy07.utils.DataSourceUtils;

public class CourseDao {

	public List<Course> getCourse(String wechatid) throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner  = new QueryRunner(DataSourceUtils.getDataSource());
		UserDao dao = new UserDao();
		Student stu = dao.getUserInfo(wechatid);
		int studentId = stu.getStudentId();
		System.out.println(stu.getStudentId());
		String sql = "select * from choicecoursetb where Studentid=?";
		List<CourseId> courseIdList = runner.query(sql, new BeanListHandler<CourseId>(CourseId.class),studentId);
		List<Course> courseList=new ArrayList<Course>();
		Course course = null;
		String sql1 =null;
		System.out.println(courseIdList.toString());
		for(CourseId CID : courseIdList)
		{
			sql1 = "select CourseName,TeachingBuilding,ClassRoom,Date,Section,Period,SelectNum,Teacherid,Date from coursetb c,coursescheduletb cs where c.Courseid = ? and cs.Courseid = ?";
			 course = runner.query(sql1, new BeanHandler<Course>(Course.class),CID.getCourseid(),CID.getCourseid());
			 courseList.add(course);
		}
		Teacher t = new Teacher();
		List<Teacher> teacherList=new ArrayList<Teacher>();
		String sql2=null;
		for(Course c:courseList)
		{
			sql2="select TeacherName from teachertb where Teacherid=?";
			t=runner.query(sql2, new BeanHandler<Teacher>(Teacher.class),c.getTeacherid());
			teacherList.add(t);
		}
		int index=0;
		for(Course c:courseList)
		{
			c.setTeacherName(teacherList.get(index).getTeacherName());
			index++;
			
		}
		
		return courseList;
		
		//return null;
	}

	public Course searchCourse(String courseName) throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner  = new QueryRunner(DataSourceUtils.getDataSource());
		String sql= "select CourseName,TeachingBuilding,ClassRoom,Date,Section,Period,SelectNum,Teacherid,Date from coursetb c,coursescheduletb cs where CourseName=?";
		Course course = runner.query(sql, new BeanHandler<Course>(Course.class),courseName);
		Teacher t = new Teacher();
		String sql2 = "select TeacherName from teachertb where Teacherid=?";
		t=runner.query(sql2, new BeanHandler<Teacher>(Teacher.class),course.getTeacherid());
		course.setTeacherName(t.getTeacherName());
		return course;
	}

	public List<SignCourse> getTodayCourse(String wechatid, String day) throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner  = new QueryRunner(DataSourceUtils.getDataSource());
		UserDao dao = new UserDao();
		Student stu = dao.getUserInfo(wechatid);
		                       System.out.println("微信号："+wechatid);
		                       System.out.println("学生对象："+stu);
		int studentId = stu.getStudentId();
		String sql = "select * from choicecoursetb where Studentid=?";
		List<CourseId> courseIdList = runner.query(sql, new BeanListHandler<CourseId>(CourseId.class),studentId);
		List<SignCourse> signCourseList = new ArrayList<SignCourse>();
		SignCourse signCourse = null;
		String sql1 =null;
		System.out.println(courseIdList.toString());
		for(CourseId CID : courseIdList)
		{
			sql1 = "select CourseName,SignUpStartTime,SignUpEndTime,Latitude,Longitude from coursetb c,coursescheduletb cs where c.Courseid = ? and cs.Courseid = ? and cs.Date=?";
			 signCourse = runner.query(sql1, new BeanHandler<SignCourse>(SignCourse.class),CID.getCourseid(),CID.getCourseid(),day);
			 signCourseList.add(signCourse);
		}
		//String sql="select CourseName,TeachingBuilding,ClassRoom,Date,Section,Period,SelectNum,Teacherid,Date from coursetb c,coursescheduletb cs where CourseName=?";
		return signCourseList;
	}

}
