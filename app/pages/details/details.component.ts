import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page, ShownModallyData, NavigatedData } from "tns-core-modules/ui/page";
import * as LabelModule from "tns-core-modules/ui/label";
import { topmost, NavigationEntry } from "tns-core-modules/ui/frame";
import { Label } from "ui/label";

import { User } from "../../shared/models/user";
import { NewsService } from '../../shared/services/news.service';
import { ListDetailsService } from "../../shared/services/list-details.communicate";

@Component({
  selector: "details",
  templateUrl: "./pages/details/details.component.html",
  styleUrls: ["./pages/details/details.common.css"]
})
export class DetailsComponent implements OnInit{

  news: any;
  topFrame = topmost();
  constructor(private listItem: ListDetailsService) {
      console.log('Details component');
  }

  ngOnInit(): void {
    this.news = this.listItem.getItem();
  }
}