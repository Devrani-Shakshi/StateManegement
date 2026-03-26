import { Routes } from '@angular/router';
import { Pages } from './components/pages/pages';
import { SignalRdemo } from './components/signal-rdemo/signal-rdemo';


export const routes: Routes = [

    { path: 'pages', component: Pages },

   { path: 'signal', component: SignalRdemo },
];
