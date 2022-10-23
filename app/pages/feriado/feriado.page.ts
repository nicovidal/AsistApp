import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { FeriadoService } from '../../service/feriado.service';

@Component({
  selector: 'app-feriado',
  templateUrl: './feriado.page.html',
  styleUrls: ['./feriado.page.scss'],
})
export class FeriadoPage implements OnInit {

  feriado: Article[] = [];

  constructor(private feriadoService: FeriadoService) { }

  

  ngOnInit() {
    this.feriadoService.getTopHeadLines().subscribe(resp => 
      {this.feriado = resp ;

  });
  };

}
