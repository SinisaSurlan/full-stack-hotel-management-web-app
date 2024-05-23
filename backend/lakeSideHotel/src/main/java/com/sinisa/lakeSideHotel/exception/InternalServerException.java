/*
 * Copyright (c) 2024.
 */

package com.sinisa.lakeSideHotel.exception;

import java.sql.SQLException;

public class InternalServerException extends RuntimeException {
    public InternalServerException(String message, SQLException ex){
        super(message);
    }
}
