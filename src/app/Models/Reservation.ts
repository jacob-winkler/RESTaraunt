export interface Reservation {
    id: string,
    //This is not at all what I would normally do.
    //If I had access to the server side API I would modify the returned object there instead of shoving a bunch of fields in a sublist
    //this was painful to do.
    fields: {name: string, 
             createdTime: Date, 
             table: number, 
             datetime: Date, 
             numberOfGuests: number, 
             phoneNumber: string}
    createdTime: Date,
}