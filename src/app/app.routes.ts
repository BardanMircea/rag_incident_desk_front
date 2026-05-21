// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { PromptComponent } from './pages/prompt/prompt.component';
import { AdminIngestionComponent } from './pages/admin-ingestion/admin-ingestion.component';
import { authGuard, adminGuard } from './core/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'prompt',
    component: PromptComponent,
    canActivate: [authGuard],
  },

  {
    path: 'admin/ingestion',
    component: AdminIngestionComponent,
    canActivate: [adminGuard],
  },

  { path: '**', redirectTo: 'login' },
];
