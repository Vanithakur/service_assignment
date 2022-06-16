import { keyframes } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductServiceService } from './product-service.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories:any[] =[];
  loadedFeature = '';
  productCatName:any;
  // key:any='';
  @Output() featureSelected = new EventEmitter<string>();
  OnSelect(feature:string) {
    this.featureSelected.emit(feature);
 
  }
  onNavigate(feature:any) {
    this.loadedFeature = feature; 
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






// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../services/product.service';

// @Component({
//   selector: 'app-list-product',
//   templateUrl: './list-product.component.html',
//   styleUrls: ['./list-product.component.css']
// })
// export class ListProductComponent implements OnInit {
  
//   toggleProduct = false;
//   productData:any;
//   productData1 = [];
//   productCatName:any;
//   constructor(private productService: ProductService) { }

//   ngOnInit(): void {
//     this.productData = this.productService.getProductData();
//     const key = 'category';
//     const arrayUniqueByKey = [...new Map(this.productData.map((item: { [x: string]: any; }) =>
//       [item[key], item])).values()];
//     this.productCatName = arrayUniqueByKey;
//   }

//   showProduct(values: any) {
//     console.log(values);
//     this.toggleProduct = true;
//     this.productData1 = this.productData.filter((item: { category: any; }) => item.category === values);
//     console.log(this.productData1);
//   }
// }