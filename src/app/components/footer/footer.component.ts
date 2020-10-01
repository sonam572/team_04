import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'lacc-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    year: number = new Date().getFullYear();
    url: string;
    company: string;
    createdby: string;

    ngOnInit(): void {
        this.url = 'http://www.pratian.com//';
        this.company = 'pratian.com';
        this.createdby = 'Website designed by';
    }
}
