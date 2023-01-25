import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profession } from '../models/profession.models';
import { User } from '../models/user.models';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataJSONService {

  constructor( private http:HttpClient, private inApp:InAppBrowser) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }

  getProfessions():Observable<Profession[]>{
    return this.http.get<Profession[]>("https://raw.githubusercontent.com/nicasop/dataJSON/main/profession.json");
  }

  open_link(ruta:string){
    this.inApp.create(ruta,'_system');
  }


}
