package com.kafein.demo.ttechgoserver.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kafein.demo.ttechgoserver.help.DataGenerator;
import com.kafein.demo.ttechgoserver.model.Basket;
import com.kafein.demo.ttechgoserver.model.ServiceResponse;
import com.kafein.demo.ttechgoserver.model.SubscriberPackages;
import com.kafein.demo.ttechgoserver.util.AppConstants;
import com.kafein.demo.ttechgoserver.validations.InputValidator;

@RestController
@RequestMapping("/api/")
public class SubscriberController {

	@PostMapping("/inquiryBasket")
	Basket inquiryBasket(@RequestParam("msisdn") String msisdn) {
		
		System.out.println("new call to inquiryBasket service");
//		ServiceResponse response = new ServiceResponse();
//		
//		if (InputValidator.msisdnValidation(msisdn)) {
//			SubscriberPackages packages = DataGenerator.generateTestData(msisdn);
//			if (packages != null) {
//				response.setData(packages);
//			} else {
//				response.setReturnMsg(AppConstants.RETURN_MSG_ERROR_NO_DATA_FOUND);
//			}
//		} else {
//			response.setReturnMsg(AppConstants.RETURN_MSG_ERROR_INVALID_MSISDN);
//		}

		return DataGenerator.generateTestBaData4Basket();
	}
	
	
	
	@PostMapping("/inquiryPackages")
	ServiceResponse inquiryPackages(@RequestParam("msisdn") String msisdn) {

		System.out.println("new call to inquiryPackages service");
		ServiceResponse response = new ServiceResponse();

		if (InputValidator.msisdnValidation(msisdn)) {
			SubscriberPackages packages = DataGenerator.generateTestData4Package(msisdn);
			if (packages != null) {
				response.setData(packages);
			} else {
				response.setReturnMsg(AppConstants.RETURN_MSG_ERROR_NO_DATA_FOUND);
			}
		} else {
			response.setReturnMsg(AppConstants.RETURN_MSG_ERROR_INVALID_MSISDN);
		}

		return response;
	}

	
	
	@PostMapping("/submit")
	ServiceResponse submit(@RequestBody Basket basket) {

		System.out.println("new call to submit service");
		ServiceResponse response = new ServiceResponse();

		if (InputValidator.basketValidation(basket)) {
			System.out.println("valid");
			response.setReturnCode(AppConstants.RETURN_CODE_SUCCESS);
			response.setReturnMsg(null);

			printBasket(basket);
		} else {
			System.out.println("not valid");
			response.setReturnMsg(AppConstants.RETURN_MSG_ERROR_INVALID_BASKET);
		}

		return response;
	}

	private void printBasket(Basket basket) {
		System.out.println("**************** USER BASKET ****************");
		System.out.println(basket);
		System.out.println("*********************************************");
	}

}
