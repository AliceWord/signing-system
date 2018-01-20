package top.wdy07.service;

import java.sql.SQLException;
import java.util.List;

import top.wdy07.dao.TestDao;
import top.wdy07.domain.Student;

public class TestService {

	
	public List<Student> findAllStudent() throws SQLException {
		
		TestDao dao = new TestDao();
		return dao.findAllStudent();
	}

}
