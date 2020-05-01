import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from "../../service/user.service";
import { User } from "../../shared/models/user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup;
  loggedUser: User;
  createError: boolean = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loggedUser = JSON.parse(window.localStorage.getItem('user'));
    this.userService.createUser(this.addForm.value, this.loggedUser)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['list-user']);
      },
        error => {
          if (error.status === 403 || error.status === 401){
            this.createError = true;
            this.errorMessage = 'you do not have enough permissions to create';
          }
        }
      );
  }

  cancel(): void {
    this.router.navigate(['list-user']);  
  };

}
