import { Component, OnInit , Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-avenger-detail',
  templateUrl: './avenger-detail.component.html',
  styleUrls: ['./avenger-detail.component.css']
})
export class AvengerDetailComponent implements OnInit {

   @Input() hero:Hero;
  constructor() { }

  ngOnInit() {
  }

}
