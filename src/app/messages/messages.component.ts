import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
export interface Message {
  text: string;
  user: string;
}

@Component({
  selector: 'chat-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})

export class MessagesComponent implements OnInit {
  messages: Array<Message>;
  userName: string;
  messageText:string;
  chatForm=new FormGroup({
    userName: new FormControl(),
    messageText: new FormControl()
  });
  constructor(private pusherService: PusherService,private formBuilder: FormBuilder,) {
    this.messages = [];
  }

  ngOnInit(): void {
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    });
  }
  sendMessage(user: string, text: string) {
    const message: Message = {
       user: user,
       text: text,
    }
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message);
  }
}
