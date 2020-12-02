import { Component, OnInit } from '@angular/core';
import {AddBotComponent} from "./add-bot/add-bot.component";
import {MatDialog} from "@angular/material";
import {AddBotService} from "../../service/add-bot/add-bot.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    ispopupOpened = false;
    page:number;

    constructor(private addTelegramBotService:AddBotService,
                private matDialog: MatDialog,
                private dialog?: MatDialog) {
      this.page =1
    }

  ngOnInit() {
  }

    addBot() {
        this.ispopupOpened = true;
        const dialogRef = this.dialog.open(AddBotComponent,{
        data:{}
        });

        dialogRef.afterClosed().subscribe(result => {
          //  this.collectionOfcon(this.page);
            this.ispopupOpened = false;
        })
    }
}
