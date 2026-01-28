# AgriPet Platform Development Plan

## Features Overview
1. **Animal Disease Detection** - ML-based skin/fur image analysis
2. **Doctor Portal** - Appointment management, consultations
3. **User Pet Management** - Pet profiles, booking, emergencies
4. **Voice-to-Text** - Regional language support for farmers
5. **ML Chatbot** - Disease queries, FAQs, appointment tracking
6. **Doctor Assistant** - Visit scheduling, sample collection

## Technology Stack
- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (or SQLite for development)
- **Authentication**: NextAuth.js
- **File Storage**: Cloudinary/AWS S3 for images
- **ML/AI**: TensorFlow.js for disease detection, Google Speech-to-Text API
- **Real-time**: Socket.io for chat/notifications

## Development Phases

### Phase 1: Core Infrastructure (Week 1-2)
- [x] Project initialization
- [ ] Database schema design
- [ ] Authentication system
- [ ] Basic UI components

### Phase 2: User Management (Week 2-3)
- [ ] User registration/login
- [ ] Pet management system
- [ ] Doctor registration
- [ ] Basic dashboard setup

### Phase 3: Appointment System (Week 3-4)
- [ ] Booking interface
- [ ] Doctor dashboard
- [ ] Calendar integration
- [ ] Notification system

### Phase 4: Advanced Features (Week 4-6)
- [ ] Disease detection ML model
- [ ] Voice-to-text integration
- [ ] Chatbot implementation
- [ ] Emergency system

### Phase 5: Testing & Deployment (Week 6-7)
- [ ] Comprehensive testing
- [ ] Performance optimization
- [ ] Deployment setup

## Database Schema Design

### Users Table
```sql
- id, email, password, role (user/doctor/assistant)
- name, phone, address, language_preference
- created_at, updated_at
```

### Pets Table
```sql
- id, user_id, name, species, breed, age, weight
- medical_history, allergies, medications
- created_at, updated_at
```

### Doctors Table
```sql
- id, user_id, specialization, license_number
- experience_years, consultation_fee, availability
- verified_status, rating
```

### Appointments Table
```sql
- id, user_id, doctor_id, pet_id
- appointment_date, duration, status (scheduled/completed/cancelled)
- nature_of_visit, symptoms, urgency_level
- sample_collection_required, home_visit_needed
- created_at, updated_at
```

## UI Design Ideas

### Design System
- **Color Scheme**: Green (agriculture) + Blue (healthcare)
- **Typography**: Clean, readable fonts for rural users
- **Icons**: Intuitive icons for low-literacy users
- **Mobile-first**: Responsive design for farmers with smartphones

### Page Layouts
1. **Landing Page**: Hero section with key features, quick actions
2. **Dashboard**: Role-based (User/Doctor/Assistant)
3. **Pet Profile**: Photo gallery, medical records, appointment history
4. **Appointment Booking**: Calendar view, doctor selection, symptom input
5. **Disease Detection**: Image upload, analysis results, recommendations

### Key Components
- Image upload with preview
- Voice recording button
- Calendar with time slots
- Chat interface
- Emergency alert button
- Multi-language toggle

## Next Steps
1. Install additional dependencies
2. Set up database schema
3. Create authentication system
4. Build core UI components
