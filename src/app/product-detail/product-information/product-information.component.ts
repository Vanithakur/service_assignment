import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {
@Input() product_information:any = {
  title:'', reviews:'', description:'', price:'', size:'', color:''
};
//   product_images = [
//     '../../assets/css/reddress.jpg',
//     '../../assets/css/greendress.jpeg',
//     '../../assets/css/pinkdress.jpg',
//     '../../assets/css/skybluedress.jpeg'
 
//  ];
  constructor() { }

  ngOnInit(): void {
  }

}
