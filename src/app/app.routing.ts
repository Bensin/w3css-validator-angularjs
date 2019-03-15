import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ScanComponent } from './scan/scan.component';

const appRoutes: Routes = [

  /* =========================================================
   Phase-I
  ============================================================= */
  { path: '', component: ScanComponent, pathMatch: 'full' },


  // Simple pages
  { path: 'scan', component: ScanComponent, pathMatch: 'full' },

  { path: '404', component: ScanComponent },

  // {path: '**',  redirectTo: '404' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
