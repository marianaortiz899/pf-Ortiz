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
                tname:'Valentina Morales',
            }
            ]),
        }),
      ],
    });
    component = TestBed.createComponent(CoursesComponent).componentInstance;
  });

  it('Las columnas de la tabla de cursos deben ser (displayedColumns): "id", "courseName", "teacherName","actions"', () => {
    expect(component.displayedColumns).toContain('id');
    expect(component.displayedColumns).toContain('courseName');
    expect(component.displayedColumns).toContain('teacherName');
    expect(component.displayedColumns).toContain('actions');
  });
});