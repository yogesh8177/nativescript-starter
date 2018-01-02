import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class ListDetailsService {
    public item: any;

    getItem(): any {
        return this.item;
    }

    setItem(_item: any) {
        this.item = _item;
    }
}