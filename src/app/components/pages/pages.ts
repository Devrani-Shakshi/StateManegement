import { Component, inject, OnInit } from '@angular/core';
import { loadDepartment } from '../../store/action';
import { selectDepartments, selectloading } from '../../store/selector';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pages',
  imports: [AsyncPipe],
  templateUrl: './pages.html',
  styleUrl: './pages.css',
})
export class Pages implements OnInit {
 ngOnInit(): void {
   this.store.dispatch(loadDepartment())
 }
 private store = inject(Store);
 department$ = this.store.select(selectDepartments);
 loading$ = this.store.select(selectloading);

}
