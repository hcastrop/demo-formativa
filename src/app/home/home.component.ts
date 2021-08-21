import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    autos: string[] = ['auto 1', 'auto 2', 'auto 3', 'auto 4', 'auto 5'];
    constructor() {}

    ngOnInit(): void {
        // console.log(this.autos.find((item: string) => item === 'auto 5'));
        // console.log(this.autos.map((item: string) => ({ name: item })));

        // this.autos
        //     .map((item: string) => ({ name: item }))
        //     .forEach((item: any) => {
        //         item.place = 'DEMO';
        //         console.log(item);
        //     })


        // console.log(this.autos.filter((item: string) => item === 'auto 3'));
    }
}
