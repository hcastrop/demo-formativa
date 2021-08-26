import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/shared/providers/customers.service';
declare const swal: any;

@Component({
  selector: 'demo-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customersStore: any[] = [];
  customer!: any;

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.showCustomers();
  }

  onClickAgregar(){
    this.customer= null;    
  }

  onClickEditCustomer(customer: any) {
    this.customer = customer;
    console.log(this.customer);
  }

  onClickDeleteCustomer(id: number) {
    swal({
      title: '¿Esta seguro?',
      text: `De eliminar el cliente ${id}`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete: any) => {
      if (willDelete) {
        this.customersService.delete(id).subscribe(() => {
          swal('El cliente ha sido eliminado!', {
            icon: 'success',
          });
          this.showCustomers();
        });
      } else {
        swal('No se ha podido realizar la eliminación');
      }
    });
  }

  onChangeSave() {
    this.showCustomers();
  }

  private showCustomers() {
    this.customersService.get().subscribe((res: any[]) => {
      console.log(res);
      this.customersStore = res;
    });
  }
}
