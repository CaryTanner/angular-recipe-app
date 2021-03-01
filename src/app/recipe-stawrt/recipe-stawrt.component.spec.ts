import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStawrtComponent } from './recipe-stawrt.component';

describe('RecipeStawrtComponent', () => {
  let component: RecipeStawrtComponent;
  let fixture: ComponentFixture<RecipeStawrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeStawrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeStawrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
