import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profession } from 'src/app/models/profession.models';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.page.html',
  styleUrls: ['./profession.page.scss'],
})
export class ProfessionPage implements OnInit {

  profession!: Profession;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    let params = this.route.snapshot.queryParams;
    this.profession = params["profession"];  
  }

}
