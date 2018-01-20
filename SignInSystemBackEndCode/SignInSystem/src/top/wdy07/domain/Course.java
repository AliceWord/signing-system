package top.wdy07.domain;

public class Course {
	private String CourseName;
	private String TeachingBuilding;
	private String ClassRoom;
	private String Date;
	private int Section;
	private int Period;
	private int SelectNum;
	private int Teacherid;
	private String TeacherName;
	
	public String getTeacherName() {
		return TeacherName;
	}
	public void setTeacherName(String teacherName) {
		TeacherName = teacherName;
	}
	public int getTeacherid() {
		return Teacherid;
	}
	public void setTeacherid(int teacherid) {
		Teacherid = teacherid;
	}
	public int getSelectNum() {
		return SelectNum;
	}
	public void setSelectNum(int selectNum) {
		SelectNum = selectNum;
	}
	public String getCourseName() {
		return CourseName;
	}
	public void setCourseName(String courseName) {
		CourseName = courseName;
	}
	public String getTeachingBuilding() {
		return TeachingBuilding;
	}
	public void setTeachingBuilding(String teachingBuilding) {
		TeachingBuilding = teachingBuilding;
	}
	public String getClassRoom() {
		return ClassRoom;
	}
	public void setClassRoom(String classRoom) {
		ClassRoom = classRoom;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	public int getSection() {
		return Section;
	}
	public void setSection(int section) {
		Section = section;
	}
	public int getPeriod() {
		return Period;
	}
	public void setPeriod(int period) {
		Period = period;
	}
	
	
}
