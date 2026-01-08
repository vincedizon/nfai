import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersComponent } from './partners';

describe('Partners', () => {
  let component: PartnersComponent;
  let fixture: ComponentFixture<PartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
