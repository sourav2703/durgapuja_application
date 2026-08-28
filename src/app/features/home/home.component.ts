import { Component } from '@angular/core';
import { PujaEvent, PrasadProduct } from '../../core/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loadingSchedule = false;

  events: PujaEvent[] = [
    {
      id: 1,
      date: '2026-10-17',
      dayName: 'षष्ठी',
      eventName: 'बोधन एवं कल्पारंभ',
      startTime: '06:00 PM',
      endTime: '08:00 PM',
      description: 'माँ दुर्गा की पूजा का शुभारंभ।',
      venue: 'Ranchi Railway Station Durga Puja Pandal',
      isActive: true
    },
    {
      id: 2,
      date: '2026-10-18',
      dayName: 'सप्तमी',
      eventName: 'नवपत्रिका पूजा एवं सप्तमी आरती',
      startTime: '09:00 AM',
      endTime: '11:00 AM',
      description: 'सप्तमी पूजा एवं आरती।',
      venue: 'Ranchi Railway Station Durga Puja Pandal',
      isActive: true
    },
    {
      id: 3,
      date: '2026-10-19',
      dayName: 'अष्टमी',
      eventName: 'महाअष्टमी पूजा एवं संधि पूजा',
      startTime: '08:00 AM',
      endTime: '12:30 PM',
      description: 'महाअष्टमी पूजा एवं विशेष संधि पूजा।',
      venue: 'Ranchi Railway Station Durga Puja Pandal',
      isActive: true
    },
    {
      id: 4,
      date: '2026-10-20',
      dayName: 'नवमी',
      eventName: 'महानवमी पूजा एवं आरती',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
      description: 'महानवमी पूजा एवं विशेष आरती।',
      venue: 'Ranchi Railway Station Durga Puja Pandal',
      isActive: true
    },
    {
      id: 5,
      date: '2026-10-21',
      dayName: 'दशमी',
      eventName: 'विजया दशमी एवं विसर्जन',
      startTime: '10:00 AM',
      endTime: '04:00 PM',
      description: 'विजया दशमी पूजा एवं माँ की विदाई।',
      venue: 'Ranchi Railway Station Durga Puja Pandal',
      isActive: true
    }
  ];

  featuredPrasad: PrasadProduct = {
    id: 1,
    name: 'माँ दुर्गा प्रसाद',
    description: 'पूजा समिति द्वारा उपलब्ध कराया जाने वाला पावन प्रसाद।',
    price: 101,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    availableDate: '17–21 October 2026',
    availability: 100,
    capacity: 200,
    collectionMethods: [
      'ON_PREMISES',
      'HOME_DELIVERY'
    ],
    isActive: true
  };

  trackById(index: number, event: PujaEvent): number {
    return event.id;
  }
}