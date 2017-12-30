import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../../shared/models/user";
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: "list",
  providers: [UserService],
  templateUrl: "./pages/list/list.component.html",
  styleUrls: ["./pages/list/list.common.css"]
})
export class ListComponent {

  constructor() {
      console.log('List component');
  }

}