import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  enviarMensagem(event: Event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! Obrigada pelo contato.');

  }
}

