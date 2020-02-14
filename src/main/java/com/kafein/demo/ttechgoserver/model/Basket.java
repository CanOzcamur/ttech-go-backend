package com.kafein.demo.ttechgoserver.model;

import java.io.Serializable;
import java.util.List;

public class Basket implements Serializable {

	private static final long serialVersionUID = 1L;
	private Subscriber subscriber;
	private List<Package> packages;

	public Subscriber getSubscriber() {
		return subscriber;
	}

	public void setSubscriber(Subscriber subscriber) {
		this.subscriber = subscriber;
	}

	public List<Package> getPackages() {
		return packages;
	}

	public void setPackages(List<Package> packages) {
		this.packages = packages;
	}

	@Override
	public String toString() {
		StringBuffer buf = new StringBuffer();
		buf.append("subscriber: " + subscriber + "\n");
		
		for (Package pack : packages) {
			buf.append("package: " + pack + "\n");
		}
		
		return buf.toString();
	}
}
