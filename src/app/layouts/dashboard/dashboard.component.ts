import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller=false;
  showFiller2=false;

  click1() {
    this.showFiller = !this.showFiller;
    if (this.showFiller) this.showFiller2 = false;
  }

  click2() {
    this.showFiller2 = !this.showFiller2;
    if (this.showFiller2) this.showFiller = false;
  }
}
