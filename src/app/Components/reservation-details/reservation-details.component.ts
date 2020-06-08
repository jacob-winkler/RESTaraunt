import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ReservationService } from 'src/app/Services/reservation.service';
import { Reservation } from 'src/app/Models/Reservation';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  @Input() reservation: Reservation;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getReservation();
  }

  getReservation(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.reservationService.getReservation(id)
      .subscribe(reservation => {this.reservation = reservation});
  }

  goBack(): void {
    this.location.back();
  }

}
