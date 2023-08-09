import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire-title',
  templateUrl: './formulaire-title.component.html',
  styleUrls: ['./formulaire-title.component.scss'],
})
export class FormulaireTitleComponent implements OnInit {
  public formControl = new FormControl<string>(undefined);
  constructor() {}

  ngOnInit() {}
}
