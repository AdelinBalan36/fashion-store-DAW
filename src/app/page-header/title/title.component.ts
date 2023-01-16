import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  animations:[
    trigger('fadeInTitle',[ 
      state('default',style ({opacity:0})),
      state('fade',style({opacity:1})),
      transition('*=>*',[animate('200ms ease-in-out')])
    ])
  ]
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
