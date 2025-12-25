# CSA SSIPMT Backend API

Flask backend API for the Computer Science Association website.

## Installation

```bash
pip install -r requirements.txt
```

## Running the Server

```bash
python app.py
```

The server will start on `http://localhost:5000`

## API Documentation

Visit `http://localhost:5000/api/v1/docs` for complete API documentation.

## Available Endpoints

### Events
- `GET /api/v1/events` - Get all events
- `GET /api/v1/events/:id` - Get specific event
- `POST /api/v1/events` - Create new event

### Clubs
- `GET /api/v1/clubs` - Get all clubs
- `GET /api/v1/clubs/:id` - Get specific club

### Certificates
- `GET /api/v1/certificates` - Get all certificates
- `GET /api/v1/certificates/:id` - Get specific certificate

### Gallery
- `GET /api/v1/gallery` - Get all gallery items
- `GET /api/v1/gallery/:id` - Get specific gallery item

### Notices
- `GET /api/v1/notices` - Get all notices
- `GET /api/v1/notices/:id` - Get specific notice

### Faculty
- `GET /api/v1/faculty` - Get all faculty members
- `GET /api/v1/faculty/:id` - Get specific faculty member

### Registrations
- `POST /api/v1/registrations` - Register for an event
- `GET /api/v1/registrations` - Get all registrations

### Contact
- `POST /api/v1/contact` - Submit contact form

### Stats
- `GET /api/v1/stats` - Get overall statistics

## Features

- RESTful API design
- CORS enabled for frontend integration
- Comprehensive error handling
- In-memory data storage (easily replaceable with database)
- Filter and search capabilities
- API documentation endpoint
