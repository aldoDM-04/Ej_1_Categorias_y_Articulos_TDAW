import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosformComponent } from './articulosform.component';

describe('ArticulosformComponent', () => {
  let component: ArticulosformComponent;
  let fixture: ComponentFixture<ArticulosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticulosformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticulosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
