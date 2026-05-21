/// <reference types="jasmine" />

import { TestBed } from '@angular/core/testing';

import { RagService } from './rag.service';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('RagService', () => {
  let service: RagService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(RagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});