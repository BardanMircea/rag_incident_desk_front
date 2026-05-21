// src/app/pages/login/login.component.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  loading = false;
  error = '';

  login(): void {
    this.loading = true;
    this.error = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        this.authService.saveSession(res);

        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin/ingestion']);
        } else {
          this.router.navigate(['/prompt']);
        }
      },
      error: () => {
        this.error = 'Email ou mot de passe incorrect.';
        this.loading = false;
      },
    });
  }
}
