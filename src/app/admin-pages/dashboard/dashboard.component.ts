import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../../service/storage.service";
import {DevotionService} from "../../service/devotion/devotion.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {SendDevotionService} from "../../service/send-message/send-devotion.service";
import {TotalMembersService} from "../../service/count-members/total-members.service";
import {CountDevotionsService} from "../../service/count-devotion/count-devotions.service";
import {PostedDevotionsService} from "../../service/posted-devotions/posted-devotions.service";

interface TelegramModalInterface {
    title: string;
    content: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public _devotionForm: any;
  public memberNames: any;

    loading: boolean;
    current_page: string;
    _form: string;
    _telegramForm:any;
    per_page: number;
    total: number;
    page: number;
    countMembers:number;
    countDevotion:number;

    dataSource: any;
    dataSources:any;

  constructor(  private _formBuilder: FormBuilder,
                private devotionService: DevotionService,
                private sendDevotion : SendDevotionService,
                private recentPostService:PostedDevotionsService,
                private countMembersService :TotalMembersService,
                private countDevotionService:CountDevotionsService,
                private storageService: StorageService) {
      this.page = 1;
    }

    ngOnInit() {
        this.countTotalMembers();
        this.countTotalDevotions();
        this.recentPosts();
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
        this._telegramForm = this._formBuilder.group({
            title: ['', [Validators.required]],
            content: ['', [Validators.required]],
        });

        const headers = new HttpHeaders()
            // .append('Access-Control-Allow-Origin', '*')
            // .append('Access-Control-Allow-Methods', 'GET')
            // .append('X-Requested-With', 'XMLHttpRequest')
            // .append('Access-Control-Allow-Headers', 'Content-Type')
            // .append('Authorization', `Bearer ${this.storageService.getStorage('accessToken')}`);
        return this.devotionService.gets(headers, '/getMembers?page=' + this.page)
            .subscribe((res: any) => {
                this.loading = false;
                this.dataSource = res.members.data;
                 // this.total = res.members.total;
                 // this.per_page = res.members.per_page;
            }, (httpErrorResponse: HttpErrorResponse) => {
                this.loading = false;
            });

    }
    recentPosts(){

        const headers = new HttpHeaders()
        return this.recentPostService.gets(headers, '/recentPosts')
            .subscribe((res: any) => {
                this.loading = false;
                this.dataSources = res.recentDevotion.data;
            }, (httpErrorResponse: HttpErrorResponse) => {
                this.loading = false;
            })
    }

    postDevotion(telegramModalInterface :TelegramModalInterface) {
     //   contactsModalInterface['graduate_year'] = moment(this.date.value.toString()).year().toString();
        const headers = new HttpHeaders()
            // .append('Access-Control-Allow-Origin', '*')
            // .append('Access-Control-Allow-Methods', 'POST')
            // .append('X-Requested-With', 'XMLHttpRequest')
            // .append('Access-Control-Allow-Headers', 'Content-Type')
           // .append('Authorization', `Bearer ${this.storageService.getStorage('accessToken')}`);
        return this.sendDevotion.create(telegramModalInterface, headers, '/postMessage')
            .subscribe((res: { message: string }) => {
                //this.dialogRef.close();
               // this.showNotification01('top','right');
            }, (httpErrorResponse: HttpErrorResponse) => {
                //   this.toastr.error(httpErrorResponse.error.error, 'Error', {timeOut: 10000});
                console.log(httpErrorResponse);
            })
    }


    countTotalMembers() {
        const headers = new HttpHeaders()
            // .append('Access-Control-Allow-Origin', '*')
            // .append('Access-Control-Allow-Methods', 'GET')
            // .append('X-Requested-With', 'XMLHttpRequest')
            // .append('Access-Control-Allow-Headers', 'Content-Type')
            // .append('Authorization', `Bearer ${this.storageService.getStorage('accessToken')}`)
            // .append('Authorization', 'Bearer ' + this.storageService.getStorage('accessToken'));
        return this.countMembersService.gets(headers, '/countMembers')
            .subscribe((res: any) => {
                this.countMembers = res.totalMembers;
            }, (httpErrorResponse: HttpErrorResponse) => {
            })
    }

    countTotalDevotions() {
        const headers = new HttpHeaders()
        // .append('Access-Control-Allow-Origin', '*')
        // .append('Access-Control-Allow-Methods', 'GET')
        // .append('X-Requested-With', 'XMLHttpRequest')
        // .append('Access-Control-Allow-Headers', 'Content-Type')
        // .append('Authorization', `Bearer ${this.storageService.getStorage('accessToken')}`)
        // .append('Authorization', 'Bearer ' + this.storageService.getStorage('accessToken'));
        return this.countDevotionService.gets(headers, '/countDevotion')
            .subscribe((res: any) => {
                this.countDevotion = res.totalDevotions;
            }, (httpErrorResponse: HttpErrorResponse) => {
            })
    }

editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '250px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '400px',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
        {
            name: 'quote',
            class: 'quote',
        },
        {
            name: 'redText',
            class: 'redText'
        },
        {
            name: 'titleText',
            class: 'titleText',
            tag: 'h1',
        },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
        ['bold', 'italic'],
        ['fontSize']
    ]
};


}
