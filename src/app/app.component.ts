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
      name: 'Vietnam',
      flag: '2/21/Flag_of_Vietnam.svg',
      area: 331212,
      population: 96462106,
      description:
        'Vietnam (Vietnamese: Việt Nam), officially the Socialist Republic of Vietnam (Vietnamese: Cộng hòa Xã hội chủ nghĩa Việt Nam) is a country in Southeast Asia.',
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
