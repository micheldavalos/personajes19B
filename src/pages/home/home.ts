import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FotoPage} from "../foto/foto";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foto = FotoPage;
  personajes = [
    {
      nombre: "Iron Man",
      actor: "Robert Downey Jr.",
      avatar: "../assets/imgs/iron.png",
      foto: "../assets/imgs/robert.jpg"
    },
    {
      nombre: "Thor",
      actor: "Chris Hemsworth",
      avatar: "../assets/imgs/thor.jpg",
      foto: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg"
    },
    {
      nombre: "Spider Man",
      actor: "Tom Holland",
      avatar: "../assets/imgs/spider.png",
      foto: "../assets/imgs/robert.jpg"
    },
    {
      nombre: "Captain America",
      actor: "Chris Evans",
      avatar: "../assets/imgs/captain.jpg",
      foto: "../assets/imgs/robert.jpg"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  clickFoto(actor, foto) {
    this.navCtrl.push(this.foto,
      {actor: actor, foto: foto});
  }

}
