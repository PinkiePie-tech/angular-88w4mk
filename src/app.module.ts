import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetailsComponent } from './exemple/details/details.component';
import { ExempleComponent } from './exemple/exemple.component';
import { FormulaireComponent } from './exemple/formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
    DetailsComponent,
    FormulaireComponent,
  ],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
