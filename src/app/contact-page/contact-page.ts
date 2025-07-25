import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: './contact.html',
  styles: './contact.css' ,
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  successMessage = '';

  onSubmit() {
    console.log('Formulaire soumis', this.form);

    this.successMessage = "✅ Votre message a été envoyé avec succès !";

    // Réinitialiser le formulaire
    this.form = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
