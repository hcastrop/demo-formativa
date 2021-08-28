import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/shared/providers/cliente.service';
declare const swal: any;

@Component({
    selector: 'demo-hcastro-form',
    templateUrl: './hcastro-form.component.html',
    styleUrls: ['./hcastro-form.component.scss'],
})
export class HcastroFormComponent implements OnInit {
    @ViewChild('closebutton') closeButton!: ElementRef;
    @Input() clienteReg!: any;
    @Output() changeValue: EventEmitter<void> = new EventEmitter<void>();

    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private clientesService: ClienteService
    ) {
        this.form = this.fb.group({
            nombres: [
                { disabled: false, value: null },
                [Validators.required, Validators.minLength(3)],
            ],
            apellidos: [
                { disabled: false, value: null },
                [Validators.required, Validators.minLength(3)],
            ],
            edad: [{ disabled: false, value: null }, [Validators.required]],
            correo: [{ disabled: false, value: null }, [Validators.required]],
        });
    }

    ngOnInit(): void {}

    onClickUpdate(id: number) {}

    onClickSave() {
      console.log(this.form.value);
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
      this.clientesService.save(this.form.value).subscribe(() => {
        swal('Se registro el cliente', {
          icon: 'success',
        });
        this.changeValue.emit();
        this.form.reset();
        this.closeButton.nativeElement.click();
      });
    }
    
}
