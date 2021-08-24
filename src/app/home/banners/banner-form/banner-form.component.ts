import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { bettweenYearValidator } from 'src/app/core/validators/bettween-year.validator';
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
            name: [{ disabled: false, value: null }, [Validators.required, bettweenYearValidator(2000, 2021)]],
            mimetype: [{ disabled: false, value: null }, [Validators.required, bettweenYearValidator(2021, 2022)]],
            path: [{ disabled: false, value: null }, [Validators.required]],
            size: [{ disabled: false, value: null }, [Validators.required]],
        });
    }

    ngOnInit(): void {
        // this.name.valueChanges.subscribe((res) => console.log(res));
        // this.mimetype.valueChanges.subscribe((res) => console.log(res));
    }

    onClickSave() {
        console.log(this.form.value);
        if (this.form.invalid){
            this.form.markAllAsTouched();
            return;
        }
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
