import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  cadastroForm: FormGroup | null = null

  getCadastro(): FormGroup | null {
      return this.cadastroForm
  }

  setCadastro(form: FormGroup) {
      this.cadastroForm = form
  }


}

