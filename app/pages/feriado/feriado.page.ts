import { Component, OnInit } from '@angular/core';
import { FeriadoService } from '../../service/feriado.service';

@Component({
  selector: 'app-feriado',
  templateUrl: './feriado.page.html',
  styleUrls: ['./feriado.page.scss'],
})
export class FeriadoPage implements OnInit {

  constructor(private feriadoService: FeriadoService) { }

  

  ngOnInit() {
    this.feriadoService.getTopHeadLines().subscribe(resp => 
      {console.log('feriado',resp)});
  };

}
