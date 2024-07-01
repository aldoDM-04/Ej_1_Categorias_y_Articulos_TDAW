import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasformComponent } from './categoriasform.component';

describe('CategoriasformComponent', () => {
  let component: CategoriasformComponent;
  let fixture: ComponentFixture<CategoriasformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
