import { ChangeDetectorRef, Component, NgModule, OnInit } from '@angular/core';
import { ChatService } from './signalR.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signal-rdemo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signal-rdemo.html',
  styleUrl: './signal-rdemo.css',
})
export class SignalRdemo implements OnInit {
  user: string = '';
  message: string = '';
  messages: { user: string, message: string }[] = []; // Matches service structure

  constructor(private chatService: ChatService , private cdr : ChangeDetectorRef) {}
  ngOnInit() {
    this.chatService.startConnection();
    
    // Subscribe to the BehaviorSubject in the service
    this.chatService.messages.subscribe(data => {
      this.messages = data;
      this.cdr.detectChanges();
    });
  }

  sendMessage() {
    if (this.user && this.message) {
      this.chatService.sendMessage(this.user, this.message);
      this.message = ''; // Clears the input box
    }
  }
}
