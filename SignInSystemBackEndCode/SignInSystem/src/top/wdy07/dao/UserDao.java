package top.wdy07.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import top.wdy07.domain.EditeUserInfo;
import top.wdy07.domain.Student;
import top.wdy07.utils.DataSourceUtils;

public class UserDao {

	public Student getUserInfo(String wechatid) throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner  = new QueryRunner(DataSourceUtils.getDataSource());
		String sql = "select * from studenttb where Wechatid=?";
		Student stu = runner.query(sql, new BeanHandler<Student>(Student.class), wechatid);
		return stu;
	}

	public void editeUserInfo(EditeUserInfo editeUI) throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner  = new QueryRunner(DataSourceUtils.getDataSource());
		String sql=null;
		if(editeUI.getKey().equals("StudentName")) {
			sql = "update studenttb set StudentName=? where Wechatid=?";//editeUI.getKey(),
		}else if(editeUI.getKey().equals("Studentid")) {
			System.out.println(editeUI.getKey());
			System.out.println(editeUI.getValue());
			sql = "update studenttb set Studentid=? where Wechatid=?";
		}else {
			sql = "update studenttb set SchoolName=? where Wechatid=?";
		}
		runner.update(sql,editeUI.getValue(),editeUI.getWechatid());
		
		
	}

}
