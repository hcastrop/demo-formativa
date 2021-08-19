import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';
declare const swal: any;

@Component({
  selector: 'demo-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {
  @Input() index!: number;
  @Input() title!: string;
  @Input() type!: string;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  date!: string;
  constructor() { 
    moment.locale('es')
    this.date = moment().format('MMMM Do YYYY, h:mm:ss a').toUpperCase();
  }

  ngOnInit(): void {
  }

  onClickDelete() {
    this.delete.emit(this.index);
  }

  onClickAlerta() {
    swal("Good job!", "You clicked the button!", "success");
  }

}
