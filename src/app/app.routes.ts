import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './pages/thank-you/thank-you';

export const routes: Routes = [
  { path: '', component: ThankYouComponent },
  { path: 'thank-you', component: ThankYouComponent },
  // other routes....
  { path: '**', redirectTo: '', pathMatch: 'full' },
  //   { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
