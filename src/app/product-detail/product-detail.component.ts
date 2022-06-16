import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
@Output() productSelected = new EventEmitter<void>();
@Input() product_information:any = {
  title:'', reviews:'', description:'', price:'', size:'', color:''
};
product_info = [{
  title:'Red Dress',
  reviews: 100,
  description:'2020 clothing trends include mid-length skirts, luxe velvet fabric, trendy athleisure, hot off-the-shoulder tops, attractive statement sleeves, cool stripes and embroidered patches.',
  price:'$999',
  size:'small',
  color:'blue'
}];
  constructor() { }

  ngOnInit(): void {
  }
onSelected(){
this.productSelected.emit();
}
}
