package com.sinisa.lakeSideHotel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Entity
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookedRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column(name = "check_in")
    private LocalDate checkInDate;

    @Column(name = "check_out")
    private LocalDate checkOutDate;

    @Column(name = "guest_full_name")
    private String guestFullName;

    @Column(name = "email")
    private String guestEmail;

    @Column(name = "adults")
    private int NumOfAdults;

    @Column(name = "children")
    private int NumOfChildren;

    @Column(name = "total_guests")
    private int TotalNumOfGuests;

    @Column(name = "confirmation_code")
    private String bookingConfirmationCode;

    @ManyToOne(fetch = FetchType.LAZY)

    @JoinColumn(name = "room_id")
    private Room room;

    public void calculateNumOfGuests(){
        this.TotalNumOfGuests = this.NumOfAdults + this.NumOfChildren;
    }

    public void setNumOfAdults(int numOfAdults) {
        NumOfAdults = numOfAdults;
        calculateNumOfGuests();
    }

    public void setNumOfChildren(int numOfChildren) {
        NumOfChildren = numOfChildren;
        calculateNumOfGuests();
    }

    public void setBookingConfirmationCode(String bookingConfirmationCode) {
        this.bookingConfirmationCode = bookingConfirmationCode;
    }
}
