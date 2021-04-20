import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product = {} as Product

  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    const nav = this.router.getCurrentNavigation();
    this.product = nav?.extras.state as Product
  }

  ngOnInit(): void {  }

  updateProduct(): void{
    this.service.update(this.product)
    .subscribe( () => {
      this.service.showMessage("Produto Atualizado");
      this.router.navigate(['/products']);
    });    
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
