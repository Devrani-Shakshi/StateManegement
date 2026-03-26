import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class ChatService {
    private hubConnection!: signalR.HubConnection;
    public messages = new BehaviorSubject<{ user: string; message: string }[]>([]);

startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
        // 1. Use the active port from your launchSettings (5294)
        // 2. Use 'http' instead of 'https' since that's what's active
        // 3. Match the case of '/chatHub' from your MapHub call
        .withUrl('http://localhost:5294/chatHub') 
        .withAutomaticReconnect()
        .build();

    this.hubConnection.start()
        .then(() => console.log('Connected to SignalR!'))
        .catch(err => console.error('Error while starting connection: ' + err));

    this.hubConnection.on('ReceiveMessage', (user, message) => {
        const updated = [...this.messages.value, { user, message }];
        this.messages.next(updated);
    });
}


    public sendMessage(user: string, message: string) {
        this.hubConnection.invoke('SendMessage', user, message).catch((err) => console.error(err));
    }

    public addRecieveMessageListner(callback: (user: string, message: string) => void) {
        this.hubConnection.on('ReceiveMessage', callback);
    }
}
