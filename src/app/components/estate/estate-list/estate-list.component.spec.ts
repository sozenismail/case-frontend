import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateListComponent } from './estate-list.component';

describe('EstateListComponent', () => {
  let component: EstateListComponent;
  let fixture: ComponentFixture<EstateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstateListComponent]
    });
    fixture = TestBed.createComponent(EstateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
