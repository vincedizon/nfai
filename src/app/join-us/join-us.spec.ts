import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Required for ngModel tests
import { JoinUsComponent } from './join-us';

describe('JoinUsComponent', () => {
  let component: JoinUsComponent; // Changed from JoinUs
  let fixture: ComponentFixture<JoinUsComponent>; // Changed from JoinUs

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Important: adds support for your [(ngModel)]
      declarations: [JoinUsComponent] // Changed from JoinUs
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinUsComponent); // Changed from JoinUs
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});