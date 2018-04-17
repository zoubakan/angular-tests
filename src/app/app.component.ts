import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Le PSG et le désert économique français',
      content: 'Le gendarme financier du football français, la DNCG, vient de publier son dernier rapport. Sans surprise, il indique que le PSG n’évolue pas sur la même planète que les autres clubs de Ligue 1.',
      loveIts: 0,
      created_at : new Date()
    }, {
      title: 'Une allergie d’origine extraterrestre',
      content: 'Une rougeur accompagnée de démangeaisons s’est manifestée sur le doigt d’un homme portant une alliance qui contenait de petits éclats de météorite.',
      loveIts: 0,
      created_at : null
    }, {
      title: 'Il donne de l’argent à son auxiliaire de vie',
      content: 'Au cours des trois années qui précèdent son décès, Marcel verse 30 000 euros à Corinne, son auxiliaire de vie. Ses héritiers demandent que Corinne rapporte la somme à la succession, du fait qu’une « clause de probité » lui interdisait de la recevoir.',
      loveIts: 0,
      created_at : null
    }
  ];
}
