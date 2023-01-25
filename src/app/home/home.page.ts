import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Profession } from '../models/profession.models';
import { User } from '../models/user.models';
import { DataJSONService } from '../services/data-json.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  usuarios: User[] = [];
  professions: Profession[] = [];
  profession!:Profession;

  constructor( private data: DataJSONService, private nav:NavController) {
  }

  ngOnInit(){
    this.data.getProfessions().subscribe({
      next: res => {
        this.professions = res;
      },
      error: res => {
        console.log("Error");
      }
    });
  }

  getProfession(id:number){
    this.profession = this.professions.filter(prof => prof.id == id)[0];
    this.nav.navigateForward("/profession",{
      "queryParams":{
        "profession":this.profession
      }
    })
  }

}
