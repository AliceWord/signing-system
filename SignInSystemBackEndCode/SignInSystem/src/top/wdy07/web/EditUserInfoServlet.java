package top.wdy07.web;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import top.wdy07.domain.EditeUserInfo;
import top.wdy07.service.UserService;

public class EditUserInfoServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<String, String[]> edite = request.getParameterMap();
		EditeUserInfo editeUI=new EditeUserInfo();
		
		try {
			BeanUtils.populate(editeUI, edite);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		editeUI.setWechatid(request.getParameter("Wechatid"));
		UserService service = new UserService();
		try {
			service.editeUserInfo(editeUI);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(editeUI.getKey());
		
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}