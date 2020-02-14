package com.kafein.demo.ttechgoserver.model;

import java.io.Serializable;
import java.util.Date;

public class Package implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private long id;
	private String name;
	private String description;
	private Double amount;
	private Date expiryDate;
	
	public Package() {
		super();
	}

	public Package(long id, String name, String description, Double amount, Date expiryDate) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.amount = amount;
		this.expiryDate = expiryDate;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public Date getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}
	
	
	@Override
	public String toString() {		

		StringBuffer buf = new StringBuffer();
		buf.append("id: " + id + ", ");
		buf.append("name" + name + ", ");		
		buf.append("description" + description + ", ");
		buf.append("amount: " + amount + ", ");
		buf.append("expiryDate: " + expiryDate);
		return buf.toString();
	}
}
