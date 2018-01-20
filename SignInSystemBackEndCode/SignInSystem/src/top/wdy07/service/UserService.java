package top.wdy07.service;

import java.sql.SQLException;

import top.wdy07.dao.UserDao;
import top.wdy07.domain.EditeUserInfo;
import top.wdy07.domain.Student;

public class UserService {

	public Student getUserInfo(String wechatid) throws SQLException {
		// TODO Auto-generated method stub
		UserDao dao = new UserDao();
		Student stu = dao.getUserInfo(wechatid);
		return stu;
	}

	public void editeUserInfo(EditeUserInfo editeUI) throws SQLException {
		// TODO Auto-generated method stub
		UserDao dao = new UserDao();
		dao.editeUserInfo(editeUI);
	}

}
