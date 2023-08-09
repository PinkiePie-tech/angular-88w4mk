import { Component, OnInit } from '@angular/core';
import { IHeaderInfo } from '../shared/model/headerInfo.model';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.scss'],
})
export class ExempleComponent implements OnInit {
  public headerInfo: IHeaderInfo = {
    title: 'Je suis un titre attitré',
    subtitle: 'Je suis un sous-titre, mais pas sous les ordres de titre !',
    description: {
      infoPrimaire: 'Je suis une description primaire mais pas secondaire',
      infoSecondaire:
        'Je suis une description secondaire mais pourtant plutôt primaire',
    },
  };
  constructor() {}

  ngOnInit() {}

  public save(newInfo: IHeaderInfo) {
    console.log(newInfo);
    this.headerInfo = newInfo;
  }
}
