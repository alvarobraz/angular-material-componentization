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

  buscar() {
    if (this.formBuscaService.formEstaValido) {
      const formBuscavalue = this.formBuscaService.obterDadosBusca();
      this.realizarBusca.emit(formBuscavalue);
    } else {
      alert('O formulário precisa ser preenchido')
    }
  }



}
