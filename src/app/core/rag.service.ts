// src/app/core/rag.service.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AskResponse {
  answer: string;
}

@Injectable({
  providedIn: 'root',
})
export class RagService {
  private http = inject(HttpClient);
  private apiUrl = '/api/rag';

  ask(question: string) {
    return this.http.post<AskResponse>(`${this.apiUrl}/ask`, {
      question,
    });
  }
}
