import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'demo-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    form: FormGroup;
    personsStore: any[] = [];
    get persons() {
        return this.form.controls.persons as FormArray;
    }
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            persons: this.fb.array([this.addGroup()]),
        });
    }

    ngOnInit(): void {
    }

    onClickSave() {
      this.personsStore.push(... this.persons.value);
      this.persons.clear();
      this.persons.reset();
      this.persons.push(this.addGroup());
    }

    onClickDeletePerson(position: number) {
      this.personsStore = this.personsStore.filter((_: any, index: number) => position !== index);
    }

    onClickAddGroup() {
        this.persons.push(this.addGroup());
    }

    onClickDelete(index: number) {
      this.persons.removeAt(index)
    }

    getFormGroup(item: any) {
        return item as FormGroup;
    }

    private addGroup() {
        return this.fb.group({ name: [null, null], lastName: [null, null] });
    }
}
