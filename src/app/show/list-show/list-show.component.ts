import { Component, OnInit } from '@angular/core';

import { ShowService } from '../../service/show.service';
import { Show } from '../../shared/models/show';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
  styleUrls: ['./list-show.component.css']
})
export class ListShowComponent implements OnInit {

  shows: Show[];

  constructor(private showService: ShowService) {
    this.shows = [];
   }

  ngOnInit() {
    this.showService.getShows().subscribe(
      data =>{
        this.shows = data
      }
    )
  }

}
