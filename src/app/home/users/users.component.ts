import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/providers/users.service';

@Component({
  selector: 'demo-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  page: number = 0;
  users!: any[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.showUsers();
  }

  onClickNavLeft() {
    this.page--;
    this.showUsers();
  }

  onClickNavRight() {
    this.page++;
    this.showUsers();
  }

  private showUsers(): void {
    this.usersService.get(this.page).subscribe((res: any) => {
      console.log(res);
      this.users = res.data;
    });
  }
}
