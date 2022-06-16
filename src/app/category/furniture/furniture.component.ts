import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  constructor(private product_service: ProductServiceService) { }

  ngOnInit(): void {
  }

}
