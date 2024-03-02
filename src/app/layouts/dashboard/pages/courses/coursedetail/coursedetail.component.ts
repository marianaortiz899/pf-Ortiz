import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrl: './coursedetail.component.scss'
})
export class CoursedetailComponent {
  course: Course = {
    id: 0,
    name: '',
    description: '',
    schedule: '',
    price: 0
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    if (state) 
      this.course = {
        id: state['id'],
        name: state['name'],
        description: state['description'],
        schedule: state['schedule'],
        price: state['price']
      };
  }
}
