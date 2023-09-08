import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { TooltipSidenavComponent } from './tooltip-sidenav/tooltip-sidenav.component';
import 'zone.js';

/* eslint-disable no-console */
bootstrapApplication(TooltipSidenavComponent, {
  providers: [provideAnimations(), importProvidersFrom(MatNativeDateModule)],
}).catch((err) => console.error(err));
