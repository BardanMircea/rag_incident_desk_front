// src/app/pages/register/register.component.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  role: 'USER' | 'ADMIN' = 'USER';
  loading = false;
  error = '';

  register(): void {
    this.loading = true;
    this.error = '';

    this.authService.register(this.email, this.password, this.role).subscribe({
      next: (res) => {
        this.authService.saveSession(res);

        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin/ingestion']);
        } else {
          this.router.navigate(['/prompt']);
        }
      },
      error: () => {
        this.error = 'Impossible de créer le compte.';
        this.loading = false;
      },
    });
  }
}
