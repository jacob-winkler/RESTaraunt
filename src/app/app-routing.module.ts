import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './Components/reservations/reservations.component';
import { ReservationDetailsComponent } from './Components/reservation-details/reservation-details.component';

const routes: Routes = [
  {path: 'reservations', component: ReservationsComponent},
  {path: '', redirectTo: '/reservations', pathMatch: 'full' },
  {path: 'detail/:id', component: ReservationDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
