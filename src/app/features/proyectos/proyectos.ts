import { Component } from '@angular/core';
import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-proyectos',
  imports: [ProjectCard],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {

  
  projects = [
    {
      title: 'Calvin',
      description: 'TheColvinCo.com es una tienda online especializada en la venta y envío de flores, plantas y regalos a domicilio, con enfoque en ramos y arreglos florales para ocasiones especiales como cumpleaños, aniversarios, celebraciones, fechas señaladas y momentos de detalle.',
      image: 'images/calvin_web_venta_flores.webp',
      repoUrl: 'https://github.com/Horacioxbarrios',
      liveUrl: 'https://www.thecolvinco.com/'
    },
    {
      title: 'Viajeros con B',
      description: 'Viajeros con B es una plataforma de contenido de viajes vinculada a B travel, enfocada en inspirar a los usuarios a través de artículos, experiencias y recomendaciones sobre destinos, turismo y estilos de viaje, presentada en formato editorial y audiovisual.',
      image: 'images/viajeros_con_B_web_de_viajes.webp',
      repoUrl: 'https://github.com/usuario/demo',
      liveUrl: 'https://viajerosconb.btravel.com/'
    },
        {
      title: 'Calvin',
      description: 'TheColvinCo.com es una tienda online especializada en la venta y envío de flores, plantas y regalos a domicilio, con enfoque en ramos y arreglos florales para ocasiones especiales como cumpleaños, aniversarios, celebraciones, fechas señaladas y momentos de detalle.',
      image: 'images/calvin_web_venta_flores.webp',
      repoUrl: 'https://github.com/Horacioxbarrios',
      liveUrl: 'https://www.thecolvinco.com/'
    },
    {
      title: 'Viajeros con B',
      description: 'Viajeros con B es una plataforma de contenido de viajes vinculada a B travel, enfocada en inspirar a los usuarios a través de artículos, experiencias y recomendaciones sobre destinos, turismo y estilos de viaje, presentada en formato editorial y audiovisual.',
      image: 'images/viajeros_con_B_web_de_viajes.webp',
      repoUrl: 'https://github.com/usuario/demo',
      liveUrl: 'https://viajerosconb.btravel.com/'
    },
            {
      title: 'Calvin',
      description: 'TheColvinCo.com es una tienda online especializada en la venta y envío de flores, plantas y regalos a domicilio, con enfoque en ramos y arreglos florales para ocasiones especiales como cumpleaños, aniversarios, celebraciones, fechas señaladas y momentos de detalle.',
      image: 'images/calvin_web_venta_flores.webp',
      repoUrl: 'https://github.com/Horacioxbarrios',
      liveUrl: 'https://www.thecolvinco.com/'
    },
    {
      title: 'Viajeros con B',
      description: 'Viajeros con B es una plataforma de contenido de viajes vinculada a B travel, enfocada en inspirar a los usuarios a través de artículos, experiencias y recomendaciones sobre destinos, turismo y estilos de viaje, presentada en formato editorial y audiovisual.',
      image: 'images/viajeros_con_B_web_de_viajes.webp',
      repoUrl: 'https://github.com/usuario/demo',
      liveUrl: 'https://viajerosconb.btravel.com/'
    }
  
  ];
}
