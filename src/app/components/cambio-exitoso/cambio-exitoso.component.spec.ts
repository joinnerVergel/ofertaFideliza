import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioExitosoComponent } from './cambio-exitoso.component';

describe('CambioExitosoComponent', () => {
  let component: CambioExitosoComponent;
  let fixture: ComponentFixture<CambioExitosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioExitosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
