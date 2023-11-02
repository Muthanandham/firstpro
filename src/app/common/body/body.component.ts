import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  data = [
    {
      T1: 'IND',
      T2: 'NZ',
      status: 'Yet to Bat',
    },
    {
      T3: 'ENG',
      T4: 'AFG',
      status: 'ENG Won The Toss And Opted To Bat',
    },
  ];
}
