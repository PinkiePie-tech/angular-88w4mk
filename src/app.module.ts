import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetailsInfosPrimaryComponent } from './exemple/details/details-infos/details-infos-primary/details-infos-primary.component';
import { DetailsInfosSecondaryComponent } from './exemple/details/details-infos/details-infos-secondary/details-infos-secondary.component';
import { DetailsInfosComponent } from './exemple/details/details-infos/details-infos.component';
import { DetailsSubtitleComponent } from './exemple/details/details-subtitle/details-subtitle.component';
import { DetailsTitleComponent } from './exemple/details/details-title/details-title.component';
import { DetailsComponent } from './exemple/details/details.component';
import { ExempleComponent } from './exemple/exemple.component';
import { FormulaireComponent } from './exemple/formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
    DetailsComponent,
    FormulaireComponent,
    DetailsTitleComponent,
    DetailsSubtitleComponent,
    DetailsInfosComponent,
    DetailsInfosPrimaryComponent,
    DetailsInfosSecondaryComponent,
  ],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
