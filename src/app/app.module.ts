import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductServiceService } from './category/product-service.service';
import { AppComponent } from './app.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductInformationComponent } from './product-detail/product-information/product-information.component';
import { CategoryComponent } from './category/category.component';
import { FootwearComponent } from './category/footwear/footwear.component';
import { FurnitureComponent } from './category/furniture/furniture.component';
import { ElectronicComponent } from './category/electronic/electronic.component';
import { ClothComponent } from './category/cloth/cloth.component';
import { HeaderComponent } from './category/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductInformationComponent,
    CategoryComponent,
    FootwearComponent,
    FurnitureComponent,
    ElectronicComponent,
    ClothComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
