import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'product-card-demo';

  constructor(
    private router: Router
  ) {

  }

  onProductList() {
    this.router.navigate(['products/list']);
  }

  onHome() {
    this.router.navigate(['']);
  }

}
