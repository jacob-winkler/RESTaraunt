import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  //none of this would normally be kept in code like this.
  //I'm doing this only to save time
  private readonly apiKey: string = "keytxEtjU0M12BrZs";
  private readonly applicationId: string = "appoA2TzT1Yz56098"

  constructor() { }

  getAPIKey(): string
  {
    return this.apiKey;
  }

  getApplicationId(): string
  {
    return this.applicationId;
  }
}
