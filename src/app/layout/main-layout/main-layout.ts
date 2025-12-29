import { Component } from '@angular/core';
import { Footer } from "../../shared/components/footer/footer";
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";
import { Header } from "../../shared/components/header/header";

@Component({
  selector: 'app-main-layout',
  imports: [Footer, RouterOutlet, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
