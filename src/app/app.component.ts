import { Component } from '@angular/core';
import { ProductServiceService } from './category/product-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature ='';
  categories:any[] =[];
  product_info = [{
    images:['../../assets/css/reddress.jpg','../../assets/css/greendress.jpeg','../../assets/css/pinkdress.jpg','../../assets/css/skybluedress.jpeg'],
    title:'Red Dress',
    reviews: 100,
    description:'2020 clothing trends include mid-length skirts, luxe velvet fabric, trendy athleisure, hot off-the-shoulder tops, attractive statement sleeves, cool stripes and embroidered patches.',
    price:'$999',
    size:'small',
    color:'blue'
  }]
  title = 'directive_project';
  onNavigate(feature:any) {
    this.loadedFeature = feature;   
  }
  constructor(private product_service: ProductServiceService){}
  ngOnInit(): void {
    this.categories = this.product_service.Onget();
        
  }

}
