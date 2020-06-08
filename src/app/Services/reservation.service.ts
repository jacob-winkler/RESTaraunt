import { Injectable } from '@angular/core';
import { Reservation } from '../Models/Reservation'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorizationService } from './authorization.service';
import { AirTableRowSet } from '../Models/AirTableRowSet';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly reservationAPIUrl: string;

  constructor(private http: HttpClient,
              private authorizationService: AuthorizationService) {
    this.reservationAPIUrl = `https://api.airtable.com/v0/${authorizationService.getApplicationId()}/Reservation`
  }

  getReservation(id: string): Observable<Reservation>
  {
    var ret = this.http.get<Reservation>(`${this.reservationAPIUrl}/${id}`);
    console.log(ret);
    return ret;
  }

  getAllReservations(): Observable<Reservation[]>
  {
    return this.http.get<Reservation[]>(this.reservationAPIUrl);
  }

  addReservation(reservation: AirTableRowSet)
  {
    return this.http.post<AirTableRowSet>(this.reservationAPIUrl, reservation);
  }
}
