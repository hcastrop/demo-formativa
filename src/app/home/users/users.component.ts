import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/providers/users.service';

@Component({
  selector: 'demo-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.get().subscribe((res) => {
      console.log(res);
    });
  }

}
