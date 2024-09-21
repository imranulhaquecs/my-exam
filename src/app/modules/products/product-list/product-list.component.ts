import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { products } from '../../../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent {

  allproducts = [...products];

  categories = ['All Products', 'Electronics', 'Clothing', 'Accessories'];
  selectedCategory = 'All Products';
  searchTerm = '';

  filterByCategory() {
    if (this.selectedCategory === 'All Products') {
      this.allproducts = products;
    } else {
      this.allproducts = products.filter(product => product.category === this.selectedCategory);
    }
  }

  searchProducts() {
    const term = this.searchTerm.toLowerCase();
    this.allproducts = products.filter(product => 
      product.name.toLowerCase().includes(term) &&
      (this.selectedCategory === 'All Products' || product.category === this.selectedCategory)
    );
  }

}
