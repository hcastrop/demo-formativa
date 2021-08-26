import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/shared/providers/banners.service';
import { StorageService } from 'src/app/shared/providers/storage.service';
declare const swal: any;

@Component({
    selector: 'demo-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss'],
})
export class BannersComponent implements OnInit {
    banners!: any[];
    bannerSelected: any;
    constructor(
        private bannersService: BannersService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.showBaners();
        const demo = "Ejemplo";
        console.log(btoa(demo));
        console.log(atob(btoa(demo)));

        this.storageService.set('demon', { name: 'anthony', edad: 25 });
        console.log(this.storageService.get('demon'));
        this.storageService.delete('demon');
    }
    onClickImage(banner: any) {
        console.log(banner);
        this.bannerSelected = banner;
    }
    onClickDelete(id: number) {
        swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this imaginary file!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete: any) => {
            if (willDelete) {
                this.bannersService.delete(id).subscribe(() => {
                    swal('Poof! Your imaginary file has been deleted!', {
                        icon: 'success',
                    });
                    this.showBaners();
                });
            } else {
                swal('Your imaginary file is safe!');
            }
        });
    }

    onChangeSave() {
        this.showBaners();
    }

    private showBaners() {
        this.bannersService.get().subscribe((res: any[]) => {
            console.log(res);
            this.banners = res;
        });
    }
}
