package com.kafein.ttechgo.demo.ttechgoserver;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import com.kafein.demo.ttechgoserver.validations.InputValidator;

public class InputValidatorTest {

	@Test
	public void testMsisdnValidation() {
		assertTrue(InputValidator.msisdnValidation("5325320000"));
		assertFalse(InputValidator.msisdnValidation("53253200"));
		
	}
}
