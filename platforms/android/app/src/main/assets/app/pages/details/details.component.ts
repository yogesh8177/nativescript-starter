import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Label } from "ui/label";
import { ListDetailsService } from "../../shared/services/list-details.communicate";

@Component({
  selector: "details",
  templateUrl: "./pages/details/details.component.html",
  styleUrls: ["./pages/details/details.common.css"]
})
export class DetailsComponent implements OnInit{

  news: any;
  constructor(private listItem: ListDetailsService) {
      console.log('Details component');
  }

  ngOnInit(): void {
    this.news = this.listItem.getItem();
  }
}