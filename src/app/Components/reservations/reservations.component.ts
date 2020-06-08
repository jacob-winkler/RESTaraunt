import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/Models/Reservation';
import { ReservationService } from 'src/app/Services/reservation.service';
import {NgForm} from '@angular/forms';
import { AirTableRowSet } from 'src/app/Models/AirTableRowSet';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void
  {
    this.reservationService.getAllReservations().subscribe(reservations => {
      this.reservations = reservations['records']
    });   
  }

  add(reservation: NgForm): void {
    var res = { fields: {
      name: reservation.value["name"],
      table: parseInt(reservation.value["tableNumber"]) as number,
      phoneNumber: reservation.value["phoneNumber"],
      datetime: reservation.value["time"],
      numberOfGuests: parseInt(reservation.value["guestCount"]) as number} } as Reservation

    var rowSet = { records: [] } as AirTableRowSet;
    rowSet.records.push(res);

    console.log(rowSet);

    this.reservationService.addReservation(rowSet)
      .subscribe(reservation => {
        this.reservations.push(rowSet.records[0]);
      });
  }

  delete(reservation: Reservation): void {
    // this.reservations = this.reservations.filter(r => r !== reservation);
    // this.reservationService.deleteReservation(reservation).subscribe();
  }

}
