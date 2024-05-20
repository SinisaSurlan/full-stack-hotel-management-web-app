/*
 * Copyright (c) 2024.
 */

package com.sinisa.lakeSideHotel.repository;

import com.sinisa.lakeSideHotel.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    @Query()
    List<String> findDistinctRoomTypes();
}