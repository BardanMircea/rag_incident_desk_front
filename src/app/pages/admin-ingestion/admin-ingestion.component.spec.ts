import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIngestionComponent } from './admin-ingestion.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AdminIngestionComponent', () => {
  let component: AdminIngestionComponent;
  let fixture: ComponentFixture<AdminIngestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminIngestionComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminIngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
