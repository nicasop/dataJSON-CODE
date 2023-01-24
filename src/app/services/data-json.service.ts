import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profession } from '../models/profession.models';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class DataJSONService {

  constructor( private http:HttpClient) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }

  getProfessions():Observable<Profession[]>{
    return this.http.get<Profession[]>("https://raw.githubusercontent.com/nicasop/dataJSON/main/proffesion.json");
  }

}
