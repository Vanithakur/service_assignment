import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories:any ='';
  productCatName:any;
  @Output() featureSelected = new EventEmitter<string>();
  OnSelect(feature:string) {
    this.featureSelected.emit(feature);
 
  }
  constructor(private product_service: ProductServiceService) { }

  ngOnInit(): void {
    this.categories = this.product_service.Onget();
    const key = 'category';
    const arrayUniqueByKey = [...new Map(this.categories.map((item: { [x: string]: any; }) =>[item[key], item])).values()];
    this.productCatName = arrayUniqueByKey;
    console.log(this.productCatName);
  }
  
  
}
