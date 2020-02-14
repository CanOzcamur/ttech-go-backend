package com.kafein.demo.ttechgoserver.help;

import java.util.ArrayList;
import java.util.List;

import com.kafein.demo.ttechgoserver.model.Basket;
import com.kafein.demo.ttechgoserver.model.Package;
import com.kafein.demo.ttechgoserver.model.Subscriber;
import com.kafein.demo.ttechgoserver.model.SubscriberPackages;
import com.kafein.demo.ttechgoserver.util.DateUtil;

public class DataGenerator {
	
	private static SubscriberPackages subscriberPackages1 = new SubscriberPackages();
	private static SubscriberPackages subscriberPackages2 = new SubscriberPackages();
	
	private static Basket basket = new Basket();
	
	static {
		  Subscriber subscriber1 = new Subscriber(1001,"5325320000", "ali", "taş", false);
		  Subscriber subscriber2 = new Subscriber(1002,"5335330000", "osman", "akkay", true);
		  
		  Package pack1 = new Package(101,"tv+", "tv+ - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...", 19.50, DateUtil.stringToDate("01.03.2020"));
		  Package pack2 = new Package(102,"fizy", "fizy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...", 29.50, DateUtil.stringToDate("02.03.2020"));
		  Package pack3 = new Package(103,"gollercepte", "gollercepte - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...", 39.50, DateUtil.stringToDate("03.03.2020"));
		  Package pack4 = new Package(104,"lifebox", "lifebox - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...", 49.50, DateUtil.stringToDate("04.03.2020"));
		  Package pack5 = new Package(105,"dergilik", "dergilik - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...", 59.50, DateUtil.stringToDate("05.03.2020"));
		  Package pack6 = new Package(106,"bip", "bip - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...", 69.50, DateUtil.stringToDate("06.03.2020"));
		  Package pack7 = new Package(107,"platinum", "platinum - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...", 79.50, DateUtil.stringToDate("07.03.2020"));

		  
		  List<Package> list1 = new ArrayList<Package>();
		  list1.add(pack1);
		  list1.add(pack2);
		  list1.add(pack3);
		  list1.add(pack4);
		  list1.add(pack5);
		  
		  List<Package> list2 = new ArrayList<Package>();
		  list2.add(pack1);
		  list2.add(pack2);
		  list2.add(pack6);
		  list2.add(pack7);
		  
		  subscriberPackages1.setSubscriber(subscriber1);
		  subscriberPackages1.setPackages(list1);
		
		  subscriberPackages2.setSubscriber(subscriber2);
		  subscriberPackages2.setPackages(list2);
		  
		  basket.setSubscriber(subscriber1);
		  basket.setPackages(list1);
	}

	
	  public static SubscriberPackages generateTestData4Package(String msisdn) {
		  
		  if (msisdn.equals(subscriberPackages1.getSubscriber().getMsisdn())) {
			  return subscriberPackages1;
		  } else if (msisdn.equals(subscriberPackages2.getSubscriber().getMsisdn())) {
			  return subscriberPackages2;
		  }
		  

		  
		  return null;
	  }
	  
	  public static Basket generateTestBaData4Basket() {
		  return basket;
	  }
}
