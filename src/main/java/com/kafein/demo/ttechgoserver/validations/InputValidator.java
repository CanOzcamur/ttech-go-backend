package com.kafein.demo.ttechgoserver.validations;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.kafein.demo.ttechgoserver.model.Basket;

public class InputValidator {

	public static boolean msisdnValidation(String msisdn) {

		String regex = "[0-9]{10}";
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(msisdn);

		return matcher.matches();
	}
	
	
	public static boolean basketValidation(Basket basket) {
		
		if (basket == null) {
			return false;
		}
		
		if (basket.getSubscriber() == null || basket.getSubscriber().getId() == 0) {
			return false;			
		}
		
		if (basket.getPackages() == null || basket.getPackages().size() == 0) {
			return false;
		}
		
		return true;
		
	}
}
