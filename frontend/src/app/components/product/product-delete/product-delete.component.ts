import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product = {} as Product;

  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id != null){
      this.service.readById(id)
        .subscribe( produto => {
          this.product = produto;
        });
    }
    
  }

  deleteProduct(){
    if(this.product.id != null){
      this.service.delete(this.product.id)
        .subscribe( () => {
          this.service.showMessage('Produto Excluido');
          this.router.navigate(['/products']);
        });
    }
  }

  cancel(){
    this.router.navigate(['/products'])
  }

}
