import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../../shared/models/user";
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: "list",
  providers: [UserService],
  templateUrl: "./pages/list/list.component.html",
  styleUrls: ["./pages/list/list.common.css"]
})
export class ListComponent implements OnInit{

  newsList: Array<Object> = [];
  constructor() {
      console.log('List component');
  }

  ngOnInit(): void {
    this.newsList.push({title: 'News 1'});
    this.newsList.push({title: 'News 2'});
    this.newsList.push({title: 'News 3'});
  }

}