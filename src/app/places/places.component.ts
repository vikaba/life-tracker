import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  @Input() places;

  constructor() { }

  ngOnInit() {
  }

}
