import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.html',
  styleUrls: ['./contact-page.css']
})
export class ContactPage {
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