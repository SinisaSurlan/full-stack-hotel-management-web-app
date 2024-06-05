/*
 * Copyright (c) 2024.
 */

package com.sinisa.lakeSideHotel.repository;

import com.sinisa.lakeSideHotel.model.BookedRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<BookedRoom, Long> {

    List<BookedRoom> findByRoomId(Long roomId);


    List<BookedRoom> findByGuestEmail(String email);

    BookedRoom findByBookingConfirmationCode(String confirmationCode);
}
