import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products:any[] = [];
  Onget(){
    return this.products = [
      {
          title: 'shoe',
          image:'../../assets/images/footwear1.jpeg',
          price: '$230',
          size: '8',
          category: 'footware'
      },
      {
          title: 'chair',
          image:'../../assets/images/furniture2.jpeg',
          price: '$230',
          color: 'red',
          size: '23',
          category: 'furniture'
      },
      {
          title: 'Laptop',
          image:'../../assets/images/electronics1.webp',
          price: '$923',
          color: 'black',
          size: '23',
          category: 'electronic'
      },
      {
          title: 'winter cloths',
          image:'../../assets/images/cloth3.jpg',
          price: '$67',
          color: 'red',
          size: '45',
          category: 'cloth'
      },
      {
          title: 'refigirator',
          image:'../../assets/images/cloth1.jpg',
          price: '$30',
          color: 'red',
          size: '45',
          category: 'cloth'
      },
      {
          title: 'AC',
          image:'../../assets/images/electronics2.jpeg',
          price: '$672',
          color: 'red',
          size: '45',
          category: 'electronic'
      },
      {
          title: 'Table',
          image: '../../assets/images/furniture1.webp',
          price: '$30',
          color: 'red',
          size: '48',
          category: 'furniture'
      },
      {
          title: 'Men Cloth',
          image:'../../assets/images/watch1.jpeg',
          price: '$230',
          color: 'red',
          size: '45',
          category: 'Accessories'
      },
      {
          title: 'children cloth',
          image:'../../assets/images/cloth2.jpeg',
          price: '$23',
          color: 'red',
          size: '45',
          category: 'cloth'
      },
      {
          title: 'phone',
          image:'../../assets/images/footwear2.jpg',
          price: '$24',
          color: 'red',
          size: '45',
          category: 'footware'
      }
    ];
  }
  
  constructor() { }
}
