/*
 * Copyright (c) 2024.
 */

package com.sinisa.lakeSideHotel.response;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
public class RoomResponse {
    private Long id;
    private String roomType;
    private BigDecimal roomPrice;
    private boolean isBooked = false;
    private String photo;
    private List<BookingResponse> bookings;

    public RoomResponse(Long id, String roomType, BigDecimal roomPrice) {
        this.id = id;
        this.roomType = roomType;
        this.roomPrice = roomPrice;
    }

    public RoomResponse(Long id, boolean isBooked, byte[] photoBytes, BigDecimal roomPrice, String roomType, List<BookingResponse> bookings) {
        this.id = id;
        this.isBooked = isBooked;
        this.photo = photoBytes != null ? Base64.encodeBase64String(photoBytes) : null;
        this.roomPrice = roomPrice;
        this.roomType = roomType;
        this.bookings = bookings;
    }

    public RoomResponse(Long id, boolean isBooked, byte[] photoBytes, BigDecimal roomPrice, String roomType) {
        this.id = id;
        this.isBooked = isBooked;
        this.photo = photoBytes != null ? Base64.encodeBase64String(photoBytes) : null;
        this.roomPrice = roomPrice;
        this.roomType = roomType;
    }
}
