import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { BannersService } from 'src/app/shared/providers/banners.service';
// import * as bootstrap from 'bootstrap/';
declare const swal: any;

@Component({
    selector: 'demo-banner-form',
    templateUrl: './banner-form.component.html',
    styleUrls: ['./banner-form.component.scss'],
})
export class BannerFormComponent implements OnInit {
    @ViewChild('closebutton') closeButton!: ElementRef;
    @Output() change: EventEmitter<void> = new EventEmitter<void>();
    constructor(private bannersService: BannersService) {}

    ngOnInit(): void {}

    onClickSave() {
        const name: any = document.querySelector('#name');
        const mimetype: any = document.querySelector('#mimetype');
        const path: any = document.querySelector('#path');
        const size: any = document.querySelector('#size');

        this.bannersService
            .save({
                name: name.value,
                mimetype: mimetype.value,
                path: path.value,
                size: size.value,
            })
            .subscribe(() => {
                swal('Se guardo correctamente la información', {
                    icon: 'success',
                });

                this.change.emit();

                name.value = '';
                mimetype.value = '';
                path.value = '';
                size.value = '';

                // const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                //   keyboard: false
                // });

                // const modalToggle: any = document.getElementById('exampleModal');
                // modalToggle.hide();
                this.closeButton.nativeElement.click();
            });
    }
}
