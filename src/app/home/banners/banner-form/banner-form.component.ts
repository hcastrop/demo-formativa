import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BannersService } from 'src/app/shared/providers/banners.service';
// import * as bootstrap from 'bootstrap/';
declare const swal: any;

@Component({
    selector: 'demo-banner-form',
    templateUrl: './banner-form.component.html',
    styleUrls: ['./banner-form.component.scss'],
})
export class BannerFormComponent implements OnInit {
    form!: FormGroup;

    @ViewChild('closebutton') closeButton!: ElementRef;
    @Output() changeValue: EventEmitter<void> = new EventEmitter<void>();
    constructor(
        private bannersService: BannersService,
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            name: [{ disabled: false, value: 'name' }, null],
            mimetype: [{ disabled: false, value: 'mimetype' }, null],
            path: [{ disabled: false, value: 'path' }, null],
            size: [{ disabled: false, value: 'size' }, null],
        });
    }

    ngOnInit(): void {
        // this.name.valueChanges.subscribe((res) => console.log(res));
        // this.mimetype.valueChanges.subscribe((res) => console.log(res));
    }

    onClickSave() {
        console.log(this.form.value);
        this.bannersService.save(this.form.value).subscribe(() => {
            swal('Se guardo correctamente la información', {
                icon: 'success',
            });

            this.changeValue.emit();

            this.form.reset();

            // const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            //   keyboard: false
            // });

            // const modalToggle: any = document.getElementById('exampleModal');
            // modalToggle.hide();
            this.closeButton.nativeElement.click();
        });
    }
}
