import { Component } from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = false;
    frase: any = {
        autor: 'Steve Rogers',
        mensaje: 'Puedo hacer esto todo el dia'
    };

    personajes: string[] = ['Captain America', 'Red Skull', 'Nick Fury' ];
}



