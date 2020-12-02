import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {DevotionsService} from "../dashboard/dashboard.service";
import {DevotionService} from "../../service/devotion/devotion.service";

@Component({
  selector: 'app-devotions',
  templateUrl: './devotions.component.html',
  styleUrls: ['./devotions.component.scss']
})
export class DevotionsComponent implements OnInit {

    loading: boolean;
    current_page: string;
    per_page: number;
    total: number;
    page: number;
    dataSource: any;

  constructor(private devotionService:DevotionService) {  this.page = 1;}

  ngOnInit() {
    this.collectionOfcon(this.page);
  }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    collectionOfcon(e) {
        this.loading = true;
        if (e) {
            this.page = e;
        }

        const headers = new HttpHeaders()
        // .append('Access-Control-Allow-Origin', '*')
        // .append('Access-Control-Allow-Methods', 'GET')
        // .append('X-Requested-With', 'XMLHttpRequest')
        // .append('Access-Control-Allow-Headers', 'Content-Type')
        // .append('Authorization', `Bearer ${this.storageService.getStorage('accessToken')}`);
        return this.devotionService.gets(headers, '/getDevotions?page=' + this.page)
            .subscribe((res: any) => {
                this.loading = false;
                this.dataSource = res.posts.data;
                // this.per_page = res.members.per_page;
            }, (httpErrorResponse: HttpErrorResponse) => {
                this.loading = false;
            })
    }

}
