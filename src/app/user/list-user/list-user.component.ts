import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../service/user.service";
import { User } from "../../shared/models/user";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public users: User[];

  constructor(private router: Router, private userService: UserService) {
    this.users = [];
   }

  ngOnInit() {
    this.userService.getUsers().subscribe(data =>{
      this.users = data
    })
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  };

}
