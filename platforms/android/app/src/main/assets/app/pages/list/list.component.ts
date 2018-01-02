import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page, ShownModallyData, NavigatedData } from "tns-core-modules/ui/page";
import * as LabelModule from "tns-core-modules/ui/label";
import { topmost, NavigationEntry } from "tns-core-modules/ui/frame";

import { User } from "../../shared/models/user";
import { NewsService } from '../../shared/services/news.service';
import { ListDetailsService } from "../../shared/services/list-details.communicate";

@Component({
  selector: "list",
  providers: [NewsService],
  templateUrl: "./pages/list/list.component.html",
  styleUrls: ["./pages/list/list.common.css"]
})
export class ListComponent implements OnInit{

  newsList: Array<Object> = [];
  isLoading: Boolean = true;
  topFrame = topmost();
  constructor(private newsService: NewsService, private router: Router, private listItem: ListDetailsService) {
      console.log('List component');
  }

  ngOnInit(): void {
    this.newsService.getTopHeadlines()
    .subscribe((data) =>  {
      this.newsList = data.articles;
      this.isLoading = false;
    });
  }

  viewNews(news: any) {
    console.log('loop');
    this.listItem.setItem(news);
    this.router.navigate(["/pages/details"]);
    // const navigationEntry = {
    //   moduleName: "./pages/newsDetails/news.component",
    //   context: news,
    //   animated: true
    // };
    //this.topFrame.navigate(navigationEntry);
  }
}