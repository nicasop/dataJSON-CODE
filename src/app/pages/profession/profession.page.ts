import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profession } from 'src/app/models/profession.models';
import { DataJSONService } from 'src/app/services/data-json.service';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.page.html',
  styleUrls: ['./profession.page.scss'],
})
export class ProfessionPage implements OnInit {

  profession!: Profession;
  constructor( private route: ActivatedRoute, private data:DataJSONService ) { }

  ngOnInit() {
    let params = this.route.snapshot.queryParams;
    this.profession = params["profession"];  
  }

  open_url(url:string){
    this.data.open_link(url)
  }

}
