import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {
categories:any ='';
  constructor(private product_service: ProductServiceService) { }

  ngOnInit(): void {
    this.categories = this.product_service;
  }

}
