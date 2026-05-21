// src/app/pages/admin-ingestion/admin-ingestion.component.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../../core/document.service';

@Component({
  selector: 'app-admin-ingestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-ingestion.component.html',
  styleUrl: './admin-ingestion.component.scss',
})
export class AdminIngestionComponent {
  private documentService = inject(DocumentService);

  selectedFile: File | null = null;
  loading = false;
  message = '';
  error = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }

  upload(): void {
    if (!this.selectedFile) return;

    this.loading = true;
    this.message = '';
    this.error = '';

    this.documentService.upload(this.selectedFile).subscribe({
      next: (res) => {
        this.message = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erreur pendant l’ingestion du document.';
        this.loading = false;
      },
    });
  }
}
