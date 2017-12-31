import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page, ShownModallyData, NavigatedData } from "tns-core-modules/ui/page";
import * as LabelModule from "tns-core-modules/ui/label";
import { topmost, NavigationEntry } from "tns-core-modules/ui/frame";

import { User } from "../../shared/models/user";
import { NewsService } from '../../shared/services/news.service';

@Component({
  selector: "list",
  providers: [NewsService],
  templateUrl: "./pages/list/list.component.html",
  styleUrls: ["./pages/list/list.common.css"]
})
export class ListComponent implements OnInit{

  newsList: Array<Object> = [];
  topFrame = topmost();
  constructor(private newsService: NewsService, private router: Router) {
      console.log('List component');
  }

  ngOnInit(): void {
    this.newsService.getTopHeadlines()
    .subscribe((data) => this.newsList = data.articles)
  }

  viewNews(news: any) {
    const navigationEntry = {
      moduleName: "./pages/newsDetails/news.component",
      context: news,
      animated: true
  };
  console.dir(news);
    this.topFrame.navigate(navigationEntry);
  }
}