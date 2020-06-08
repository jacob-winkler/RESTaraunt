import { Reservation } from './Reservation';

//really not a big fan of doing something like this locally.
//Once again, if I had access to the airtable server side API, I would perform
//business logic there to transform the data between the app and the airtable database

export interface AirTableRowSet {
    records: Reservation[]
}