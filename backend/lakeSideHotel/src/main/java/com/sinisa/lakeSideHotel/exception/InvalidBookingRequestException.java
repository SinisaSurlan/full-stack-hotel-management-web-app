/*
 * Copyright (c) 2024.
 */

package com.sinisa.lakeSideHotel.exception;

public class InvalidBookingRequestException extends RuntimeException{
    public InvalidBookingRequestException(String message) {
        super(message);
    }
}
