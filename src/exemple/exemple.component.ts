import { Component, OnInit } from '@angular/core';
import { IHeaderInfo } from '../shared/model/headerInfo.model';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css'],
})
export class ExempleComponent implements OnInit {
  public headerInfo: IHeaderInfo = {
    title: 'Je suis un titre attitré',
    subtitle: 'Je suis un sous-titre, mais pas sous les ordres de titre !',
    description: [
      {
        infoPrimaire: 'Je suis une description primaire mais pas secondaire',
        infoSecondaire:
          'Je suis une description secondaire mais pourtant plutôt primaire',
      },
      {
        infoPrimaire:
          'Je suis une description primaire secondaire mais pas secondairement primaire',
        infoSecondaire:
          'Je suis une description secondaire secondaire mais pourtant plutôt primaire secondaire quand même',
      },
    ],
  };
  constructor() {}

  ngOnInit() {}
}
