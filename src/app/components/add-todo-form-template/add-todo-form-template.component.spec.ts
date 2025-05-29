import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoFormTemplateComponent } from './add-todo-form-template.component';

describe('AddTodoFormTemplate', () => {
  let component: AddTodoFormTemplateComponent;
  let fixture: ComponentFixture<AddTodoFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodoFormTemplateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddTodoFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
