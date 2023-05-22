import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  countries: any = [
    {
      name: 'France',
      flag: 'c/c3/Flag_of_France.svg',
      area: 640679,
      population: 64979548,
      description:
        "France, the largest country in Western Europe, has long been a gateway between the continent's northern and southern regions.",
    },
    {
      name: 'India',
      flag: '4/41/Flag_of_India.svg',
      area: 3287263,
      population: 1324171354,
      description:
        'India (Hindi: Bhārat), officially the Republic of India (Hindi: Bhārat Gaṇarājya) is a country in South Asia.',
    },
    {
      name: 'Germany',
      flag: 'b/ba/Flag_of_Germany.svg',
      area: 357114,
      population: 82114224,
      description:
        'Germany is a country located in the heart of Western Europe.',
    },
  ];
}
