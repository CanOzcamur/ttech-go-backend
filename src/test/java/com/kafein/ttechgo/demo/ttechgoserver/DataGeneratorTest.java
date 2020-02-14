package com.kafein.ttechgo.demo.ttechgoserver;

import static org.junit.Assert.*;

import org.junit.Test;

import com.kafein.demo.ttechgoserver.help.DataGenerator;
import com.kafein.demo.ttechgoserver.model.SubscriberPackages;

public class DataGeneratorTest {

	@Test	
	public void  testGenerateTestData4Package() {
		
		SubscriberPackages subscriberPackages = DataGenerator.generateTestData4Package("5325320000");
		assertEquals("5325320000", subscriberPackages.getSubscriber().getMsisdn());
		
		subscriberPackages = DataGenerator.generateTestData4Package("5335330000");
		assertEquals("5335330000", subscriberPackages.getSubscriber().getMsisdn());
		
		subscriberPackages = DataGenerator.generateTestData4Package("44353");
		assertNull(subscriberPackages);
		  
	  }

}
