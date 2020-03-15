import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filteredProducts: IProduct[];
    errorMessage: string;

    constructor(private productService: ProductService) {
    }

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
    }
    products: IProduct[] = [];

    onRatingClicked(message:string): void {
        this.pageTitle = `Product List: ${message}`;
    }

    performFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => this._listFilter === '' || product.productName.toLocaleLowerCase().indexOf(this._listFilter) !== -1)
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    };
    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: error => this.errorMessage = error
        });
    };
}
