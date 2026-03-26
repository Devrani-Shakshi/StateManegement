import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectDepartments, selectloading } from './store/selector';
import { loadDepartment } from './store/action';
import { AsyncPipe } from '@angular/common';
import { Pages } from "./components/pages/pages";
import { SignalRdemo } from "./components/signal-rdemo/signal-rdemo";
// import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
 ngOnInit(): void {
   this.store.dispatch(loadDepartment())
 }
 private store = inject(Store);
 department$ = this.store.select(selectDepartments);
 loading$ = this.store.select(selectloading)
 
}
