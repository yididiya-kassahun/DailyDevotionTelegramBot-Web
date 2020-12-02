import { Component, OnInit } from '@angular/core';
import {AddBotService} from "../../../service/add-bot/add-bot.service";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-add-bot',
  templateUrl: './add-bot.component.html',
  styleUrls: ['./add-bot.component.scss']
})
export class AddBotComponent implements OnInit {
    ispopupOpened = false;

  constructor(private addTelegramBotService:AddBotService,
              private matDialog: MatDialog,
             private dialog?: MatDialog) { }

  ngOnInit() {
  }



}
