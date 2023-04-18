import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  constructor(private router: Router) {}
  onClick(): void {
    this.router.navigate(['/features/email']);
  }
}
