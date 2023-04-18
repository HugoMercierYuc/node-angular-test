import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  { path: '', redirectTo: '/email', pathMatch: 'full' },
  { path: 'email', component: EmailComponent },
];

@NgModule({
  declarations: [
    EmailComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
