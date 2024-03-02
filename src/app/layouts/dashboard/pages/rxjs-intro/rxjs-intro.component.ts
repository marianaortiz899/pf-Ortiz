import { Component } from '@angular/core';
import { Observable, Subject, filter } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-rxjs-intro',
  templateUrl: './rxjs-intro.component.html',
})
export class RxjsIntroComponent {
 numberObservable$=new Observable((subscriber)=>{
    subscriber.next(1);
    subscriber.next(2);
  });
  isLoading = false;
  

  constructor(private LoadingService : LoadingService, private alertsService: AlertsService){
    this.getUsuarios()
  }
  numbersSubject$=new Subject();

  getUsuarios(): void{
    const obs = new Observable<string[]>((subscriber)=> {
      setTimeout(()=>{
        subscriber.complete();
      },2000)
    });

    this.LoadingService.setIsLoading(true);

    obs.pipe(
      filter((data)=> !!data.length)
    ).subscribe({
      next: (usuarios)=> {
      this.alertsService.showSuccess('Realizado','Se cargaron los datos')
      },
      complete: () =>{
        this.LoadingService.setIsLoading(false)
      }
    })
  }
}
