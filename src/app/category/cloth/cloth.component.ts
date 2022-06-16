import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {
clothes:any='';
  constructor(private product_service: ProductServiceService) { }

  ngOnInit(): void {
    this.clothes = this.product_service;
    console.log(this.clothes);
    
  }

}
