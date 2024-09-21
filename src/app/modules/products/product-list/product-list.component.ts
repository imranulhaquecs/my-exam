import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { products } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent {

  allproducts = [...products];

}
