package top.wdy07.domain;

public class SignCourse {
	private String CourseName;
	private int Date;
	private String SignUpStartTime;
	private String SignUpEndTime;
	private float Latitude;
	public String getCourseName() {
		return CourseName;
	}
	public void setCourseName(String courseName) {
		CourseName = courseName;
	}
	public int getDate() {
		return Date;
	}
	public void setDate(int date) {
		Date = date;
	}
	public String getSignUpStartTime() {
		return SignUpStartTime;
	}
	public void setSignUpStartTime(String signUpStartTime) {
		SignUpStartTime = signUpStartTime;
	}
	public String getSignUpEndTime() {
		return SignUpEndTime;
	}
	public void setSignUpEndTime(String signUpEndTime) {
		SignUpEndTime = signUpEndTime;
	}
	public float getLatitude() {
		return Latitude;
	}
	public void setLatitude(float latitude) {
		Latitude = latitude;
	}
	public float getLongitude() {
		return Longitude;
	}
	public void setLongitude(float longitude) {
		Longitude = longitude;
	}
	private float Longitude;
}
