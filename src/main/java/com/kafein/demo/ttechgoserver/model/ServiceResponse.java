package com.kafein.demo.ttechgoserver.model;

import com.kafein.demo.ttechgoserver.util.AppConstants;

public class ServiceResponse {

	private String returnCode;
	private String returnMsg;
	private Object data;

	public ServiceResponse() {
		this.returnCode 	= AppConstants.RETURN_CODE_ERROR;
		this.returnMsg	= AppConstants.RETURN_MSG_ERROR_INVALID_BASKET;
		this.data 		= null;
	}
	
	public ServiceResponse(String returnCode, String returnMsg, Object data) {
		super();
		this.returnCode = returnCode;
		this.returnMsg = returnMsg;
		this.data = data;
	}

	
	public String getReturnCode() {
		return returnCode;
	}

	public void setReturnCode(String returnCode) {
		this.returnCode = returnCode;
	}

	public String getReturnMsg() {
		return returnMsg;
	}

	public void setReturnMsg(String returnMsg) {
		this.returnMsg = returnMsg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.returnCode 	= AppConstants.RETURN_CODE_SUCCESS;
		this.returnMsg	= null;		
		this.data 		= data;
	}

}
