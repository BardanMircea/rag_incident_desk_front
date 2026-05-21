import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIngestionComponent } from './admin-ingestion.component';

describe('AdminIngestionComponent', () => {
  let component: AdminIngestionComponent;
  let fixture: ComponentFixture<AdminIngestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminIngestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminIngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
