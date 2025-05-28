import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCardListComponent } from './todo-card-list.component';

describe('TodoCardListComponent', () => {
  let component: TodoCardListComponent;
  let fixture: ComponentFixture<TodoCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
