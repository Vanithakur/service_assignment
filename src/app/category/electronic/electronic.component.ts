import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {

  constructor(private product_service: ProductServiceService) { }

  ngOnInit(): void {
  }

}
