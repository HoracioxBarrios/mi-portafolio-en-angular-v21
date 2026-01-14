import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  text: string = "";

    constructor() {
    const year = new Date().getFullYear();
    this.text = `Diseñado y desarrollado por Horacio Barrios · © ${year}`;
  }

}
