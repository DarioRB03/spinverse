import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage {
  nombre: string = 'Dario';
  email: string = 'usuario@example.com';
  spinsLeft: number = 3;
  updateMessage: string = '';

  constructor(private firestoreService: FirestoreService) {}

  updateProfile() {
    this.firestoreService.updateUserProfile(this.nombre, this.email).then(() => {
      this.updateMessage = 'Perfil actualizado correctamente';
      setTimeout(() => {
        this.updateMessage = '';
      }, 3000); 
    });
  }
}
