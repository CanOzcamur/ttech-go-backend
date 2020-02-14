package com.kafein.demo.ttechgoserver.model;

import java.io.Serializable;

public class Subscriber implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
	private String msisdn;
	private String name;
	private String surname;
	private boolean isCorporate;
	
	
	public Subscriber() {
		super();
	}

	public Subscriber(long id, String msisdn, String name, String surname, boolean isCorporate) {
		super();
		this.id = id;
		this.msisdn = msisdn;
		this.name = name;
		this.surname = surname;
		this.isCorporate = isCorporate;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getMsisdn() {
		return msisdn;
	}
	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public boolean isCorporate() {
		return isCorporate;
	}
	public void setCorporate(boolean isCorporate) {
		this.isCorporate = isCorporate;
	}
	
	@Override
	public String toString() {		
		StringBuffer buf = new StringBuffer();
		buf.append("id: " + id + ", ");
		buf.append("msisdn" + msisdn + ", ");
		buf.append("name" + name + ", ");
		buf.append("surname: " + surname + ", ");
		buf.append("isCorporate: " + isCorporate);
		
		return buf.toString();
	}
}
