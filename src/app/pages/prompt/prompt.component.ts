// src/app/pages/prompt/prompt.component.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RagService } from '../../core/rag.service';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.scss',
})
export class PromptComponent {
  private ragService = inject(RagService);

  question = '';
  answer = '';
  loading = false;
  error = '';

  ask(): void {
    if (!this.question.trim()) return;

    this.loading = true;
    this.answer = '';
    this.error = '';

    this.ragService.ask(this.question).subscribe({
      next: (res) => {
        this.answer = res.answer;
        this.loading = false;
      },
      error: () => {
        this.error =
          'Une erreur est survenue pendant la génération de la réponse.';
        this.loading = false;
      },
    });
  }
}
