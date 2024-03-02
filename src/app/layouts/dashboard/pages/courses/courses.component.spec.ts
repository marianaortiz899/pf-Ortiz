import { TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

describe('Pruebas de CoursesComponent', () => {
  let component: CoursesComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      providers: [
        MockProvider(CoursesService, {
            getCourses: () =>
            of([{
              id: 1,
              name: 'Curso online de JavaScript',
              description: 'Dominando JavaScript: Desde Principiantes hasta Desarrolladores Avanzados',
              schedule: 'Mon, Wed, Fri 10:00 - 12:00',
              price: 70000,
            }
            ]),
        }),
      ],
    });
    component = TestBed.createComponent(CoursesComponent).componentInstance;
  });

  it('Las columnas de la tabla de cursos deben ser (displayedColumns): "id", "name", "description","schedule","price","actions"', () => {
    expect(component.displayedColumns).toContain('id');
    expect(component.displayedColumns).toContain('name');
    expect(component.displayedColumns).toContain('description');
    expect(component.displayedColumns).toContain('schedule');
    expect(component.displayedColumns).toContain('price');
    expect(component.displayedColumns).toContain('actions');
  });
});