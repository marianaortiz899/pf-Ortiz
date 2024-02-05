import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isLoading = false

  constructor(private loadingService: LoadingService,){
    this.loadingService.isLoading$.subscribe({
      next: (value) => {
        setTimeout(()=>{
          this.isLoading = value;
        });
      },
    });
  }


  ngOnInit() {
    // this.router.navigate(['dashboard/home',]);
  }

}
