package com.kafein.demo.ttechgoserver.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

	public static Date stringToDate(String strDate) {

		Date date = null;
		try {
			date = new SimpleDateFormat(AppConstants.DATE_FORMAT).parse(strDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return date;
	}

}
