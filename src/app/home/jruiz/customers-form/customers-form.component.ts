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
import { CustomersService } from 'src/app/shared/providers/customers.service';
declare const swal: any;

@Component({
  selector: 'demo-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.scss'],
})
export class CustomersFormComponent implements OnInit {
  @ViewChild('closebutton') closeButton!: ElementRef;
  @Input() customer!: any;
  @Output() changeValue: EventEmitter<void> = new EventEmitter<void>();

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService
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

  onClickUpdate(id: number) {
    console.log(id, this.form.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.customersService.edit(id, this.form.value).subscribe(() => {
      swal('Se guardo correctamente la información', {
        icon: 'success',
      });
      this.changeValue.emit();
      //this.form.reset();
      this.closeButton.nativeElement.click();
    });
  }

  onClickSave() {
    console.log(this.form.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.customersService.save(this.form.value).subscribe(() => {
      swal('Se guardo correctamente la información', {
        icon: 'success',
      });
      this.changeValue.emit();
      this.form.reset();
      this.closeButton.nativeElement.click();
    });
  }
}
