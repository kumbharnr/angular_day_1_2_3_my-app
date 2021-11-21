import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  URL="http//localhost:3000/users";

  getUsers()
  {
    this.http.get <User[]>(this.URL)
  }
}
