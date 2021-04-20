import { Component, OnInit } from '@angular/core';
import { Menu } from '../types';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  data: Menu[];

  constructor() {
    this.data = [
      {
        name: 'Nekkei',
        image:
          'https://www.eatperu.com/wp-content/uploads/2019/05/pulpo-with-corn-grain-cake-organic-nikkei-dish.jpg',
        takeaway: true,
        delivery: true,
      },
      {
        name: 'Mamounia',
        image:
          'https://www.lamamouniarestaurant.fr/public/img/big/d0a6a8a98c6e868dcf0de7911155c6fa1600x1200jpg_5f6323a30185b.jpg',
        takeaway: true,
        delivery: false,
      },
      {
        name: 'damascus',
        image:
          'https://c.pxhere.com/photos/49/53/canapes_settee_toast_damascus_entry_parsley-485299.jpg!d',
        takeaway: true,
        delivery: true,
      },
      {
        name: 'texas',
        image:
          'https://ewscripps.brightspotcdn.com/dims4/default/af1785d/2147483647/strip/true/crop/1200x675+0+114/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fe7%2Fcf%2F3fa5fada44fc975f91551c35c262%2Fmooyah.jpg',
        takeaway: false,
        delivery: true,
      },
      {
        name: 'Nekkei',
        image:
          'https://www.eatperu.com/wp-content/uploads/2019/05/pulpo-with-corn-grain-cake-organic-nikkei-dish.jpg',
        takeaway: true,
        delivery: true,
      },
      {
        name: 'Mamounia',
        image:
          'https://www.lamamouniarestaurant.fr/public/img/big/d0a6a8a98c6e868dcf0de7911155c6fa1600x1200jpg_5f6323a30185b.jpg',
        takeaway: true,
        delivery: false,
      },
    ];
  }

  ngOnInit(): void {}
}
