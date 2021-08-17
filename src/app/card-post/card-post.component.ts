import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';
declare const swal: any;

@Component({
  selector: 'demo-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {
  date!: string;
  constructor() { 
    moment.locale('es')
    this.date = moment().format('MMMM Do YYYY, h:mm:ss a').toUpperCase();
  }

  ngOnInit(): void {
  }

  onClickAlerta() {
    swal("Good job!", "You clicked the button!", "success");
  }

}
