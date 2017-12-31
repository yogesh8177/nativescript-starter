import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Config } from "../config";

@Injectable()
export class NewsService {
    constructor(private http: Http) {console.log('News service instantiated')}

    getTopHeadlines() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(
            Config.newsApiUrl,
            { headers: headers }
          ).map((res: Response) => res.json())
          .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}