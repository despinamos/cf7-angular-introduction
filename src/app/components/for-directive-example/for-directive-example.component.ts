import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Myrah",
      "surName": "Reeken",
      "email": "mreeken0@barnesandnoble.com",
      "age": 1,
      "address": "PO Box 641"
    }, {
      "givenName": "Devland",
      "surName": "O'Flaverty",
      "email": "doflaverty1@psu.edu",
      "age": 2,
      "address": "3rd Floor"
    }, {
      "givenName": "Sawyere",
      "surName": "Authers",
      "email": "sauthers2@army.mil",
      "age": 3,
      "address": "Room 265"
    }, {
      "givenName": "Laurence",
      "surName": "Mowatt",
      "email": "lmowatt3@gravatar.com",
      "age": 4,
      "address": "Apt 1448"
    }, {
      "givenName": "Mendie",
      "surName": "Devany",
      "email": "mdevany4@indiatimes.com",
      "age": 5,
      "address": "2nd Floor"
    }, {
      "givenName": "Tandi",
      "surName": "Arsnell",
      "email": "tarsnell5@un.org",
      "age": 6,
      "address": "Suite 8"
    }, {
      "givenName": "Abdel",
      "surName": "Bushby",
      "email": "abushby6@nih.gov",
      "age": 7,
      "address": "Apt 10"
    }, {
      "givenName": "Keeley",
      "surName": "Heeks",
      "email": "kheeks7@miitbeian.gov.cn",
      "age": 8,
      "address": "Suite 50"
    }, {
      "givenName": "Anetta",
      "surName": "Le Brom",
      "email": "alebrom8@sogou.com",
      "age": 9,
      "address": "Apt 889"
    }, {
      "givenName": "Sanford",
      "surName": "Petrak",
      "email": "spetrak9@statcounter.com",
      "age": 10,
      "address": "Apt 1716"
    }, {
      "givenName": "Ainslie",
      "surName": "Sigge",
      "email": "asiggea@sfgate.com",
      "age": 11,
      "address": "Suite 43"
    }, {
      "givenName": "Revkah",
      "surName": "Bellinger",
      "email": "rbellingerb@cocolog-nifty.com",
      "age": 12,
      "address": "Apt 1737"
    }, {
      "givenName": "Bernadine",
      "surName": "Whittick",
      "email": "bwhittickc@soup.io",
      "age": 13,
      "address": "13th Floor"
    }, {
      "givenName": "Carmina",
      "surName": "Lummus",
      "email": "clummusd@icio.us",
      "age": 14,
      "address": "PO Box 1998"
    }, {
      "givenName": "Myles",
      "surName": "Sauvan",
      "email": "msauvane@webeden.co.uk",
      "age": 15,
      "address": "Suite 61"
    }, {
      "givenName": "Miquela",
      "surName": "Fromont",
      "email": "mfromontf@yolasite.com",
      "age": 16,
      "address": "Suite 26"
    }, {
      "givenName": "Tom",
      "surName": "Tofano",
      "email": "ttofanog@youtu.be",
      "age": 17,
      "address": "Suite 41"
    }, {
      "givenName": "Gayle",
      "surName": "Laing",
      "email": "glaingh@theguardian.com",
      "age": 18,
      "address": "PO Box 5794"
    }, {
      "givenName": "Wynn",
      "surName": "Gallahue",
      "email": "wgallahuei@cargocollective.com",
      "age": 19,
      "address": "PO Box 80243"
    }, {
      "givenName": "Myrtie",
      "surName": "Goldin",
      "email": "mgoldinj@webmd.com",
      "age": 20,
      "address": "PO Box 80770"
    }
  ]
}
