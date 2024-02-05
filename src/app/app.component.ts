import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pf-Ortiz';
  isLoading = false;

  constructor(private loadingService: LoadingService){
    this.loadingService.isLoading$.subscribe({
      next: (value) => {
        setTimeout(()=>{
          this.isLoading = value;
        });
      },
    });
  }
}
