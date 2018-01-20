package top.wdy07.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import top.wdy07.domain.Student;
import top.wdy07.utils.DataSourceUtils;

public class TestDao {

	public List<Student> findAllStudent() throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner = new QueryRunner(DataSourceUtils.getDataSource());
		String sql = "select * from studenttb";
		List<Student> studentList = runner.query(sql, new BeanListHandler<Student>(Student.class));
		return studentList;
	}

}
