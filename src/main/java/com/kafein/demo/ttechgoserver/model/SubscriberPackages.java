package com.kafein.demo.ttechgoserver.model;

import java.util.List;

public class SubscriberPackages {

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
	
	
}
