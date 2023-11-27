import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';



@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {

  @Output() realizarBusca = new EventEmitter();
  @Input() variant: 'primary' | 'secondary' = 'primary'

  constructor(public formBuscaService : FormBuscaService) {}

  buscar () {
    const formBuscaValue = this.formBuscaService.formBusca.value
    this.realizarBusca.emit(formBuscaValue);
  }



}
