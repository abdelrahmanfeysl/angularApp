import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-movices',
  templateUrl: './movices.component.html',
  styleUrls: ['./movices.component.css']
})
export class MovicesComponent implements OnInit {
  users:any;
  constructor(_usersService:UsersService) {
    this.users = _usersService.users;
  }

  ngOnInit(): void {
  }

}
