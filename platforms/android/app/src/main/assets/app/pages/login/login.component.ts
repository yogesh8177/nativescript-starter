import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

import { User } from "../../shared/models/user";
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: "login",
  providers: [UserService],
  templateUrl: "./pages/login/login.component.html",
  styleUrls: ["./pages/login/login.common.css"]
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  
  constructor(
    private router: Router,
    private userService: UserService,
    private page: Page
    ) {
    this.user = new User();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  login() {
    console.log('login presssed');
    this.router.navigate(["/pages/list"]);
    // this.userService.login(this.user)
    // .subscribe(
    //   () => this.router.navigate(["/list"]),
    //   (error) => alert("Unfortunately we could not find your account.")
    // );
  }
  signUp() {
    this.userService.register(this.user);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}