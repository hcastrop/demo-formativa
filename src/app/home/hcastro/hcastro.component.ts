import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/providers/cliente.service';
declare const swal: any;

@Component({
    selector: 'demo-hcastro',
    templateUrl: './hcastro.component.html',
    styleUrls: ['./hcastro.component.scss'],
})
export class HcastroComponent implements OnInit {
    clientesStore: any[] = [];
    clienteReg!:any;

    constructor(private clienteService: ClienteService) {}

    ngOnInit(): void {
      this.mostrarClientes();
    }

    onClickAdd() {}

    onClickEditCustomer(item: any) {}

    onClickDeleteCustomer(id: number) {
      swal({
        title: '¿Esta seguro?',
        text: `De eliminar el cliente ${id}`,
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete: any) => {
        if (willDelete) {
          this.clienteService.delete(id).subscribe(() => {
            swal('Cliente eliminado!', {
              icon: 'success',
            });
            this.mostrarClientes();
          });
        } else {
          swal('Se ha cancelado la eliminación');
        }
      });
      
    }

    onChangeSave(){
      this.mostrarClientes();
    }

    private mostrarClientes() {
        this.clienteService.get().subscribe((items) => {
            this.clientesStore = items;
        });
    }
}
