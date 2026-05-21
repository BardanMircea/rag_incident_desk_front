// src/app/core/auth.service.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface AuthResponse {
  token: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private apiUrl = '/api/auth';

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, {
      email,
      password,
    });
  }

  register(email: string, password: string, role: 'USER' | 'ADMIN') {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, {
      email,
      password,
      role,
    });
  }

  saveSession(auth: AuthResponse): void {
    localStorage.setItem('token', auth.token);
    localStorage.setItem('email', auth.email);
    localStorage.setItem('role', auth.role);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): 'USER' | 'ADMIN' | null {
    return localStorage.getItem('role') as 'USER' | 'ADMIN' | null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
