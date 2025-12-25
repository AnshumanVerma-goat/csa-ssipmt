from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# ============= API CONSTANTS =============
API_VERSION = "v1"
BASE_URL = f"/api/{API_VERSION}"

# ============= DATA STORES (In-memory for now) =============
events_data = [
    {
        "id": 1,
        "title": "Coding Competition 2025",
        "description": "Annual coding competition with exciting prizes",
        "date": "2025-03-25",
        "time": "10:00 AM",
        "venue": "Computer Lab",
        "category": "Competition",
        "status": "upcoming",
        "image": "/placeholder.svg",
        "registrations": 45
    },
    {
        "id": 2,
        "title": "Machine Learning Workshop",
        "description": "Learn the basics of Machine Learning and AI",
        "date": "2025-04-10",
        "time": "2:00 PM",
        "venue": "Seminar Hall",
        "category": "Workshop",
        "status": "upcoming",
        "image": "/placeholder.svg",
        "registrations": 32
    },
    {
        "id": 3,
        "title": "Tech Fest 2025",
        "description": "Annual technical festival with multiple events",
        "date": "2025-05-15",
        "time": "9:00 AM",
        "venue": "Main Campus",
        "category": "Festival",
        "status": "registration-open",
        "image": "/placeholder.svg",
        "registrations": 120
    }
]

clubs_data = [
    {
        "id": 1,
        "name": "CSA - Computer Science Association",
        "description": "The official CS club of SSIPMT",
        "members": 150,
        "established": "2020",
        "head": "Dr. John Doe",
        "image": "/placeholder.svg",
        "activities": ["Coding competitions", "Tech talks", "Workshops"]
    },
    {
        "id": 2,
        "name": "CSI - Computer Society of India",
        "description": "Student chapter of CSI",
        "members": 80,
        "established": "2018",
        "head": "Prof. Jane Smith",
        "image": "/placeholder.svg",
        "activities": ["Research seminars", "Industry visits", "Certifications"]
    }
]

certificates_data = [
    {
        "id": 1,
        "event_name": "Coding Competition 2024",
        "student_name": "John Doe",
        "certificate_type": "Winner",
        "issue_date": "2024-12-15",
        "certificate_url": "/certificates/001.pdf"
    },
    {
        "id": 2,
        "event_name": "Web Development Workshop",
        "student_name": "Jane Smith",
        "certificate_type": "Participation",
        "issue_date": "2024-11-20",
        "certificate_url": "/certificates/002.pdf"
    }
]

gallery_data = [
    {
        "id": 1,
        "title": "Tech Fest 2024",
        "description": "Moments from Tech Fest 2024",
        "date": "2024-11-15",
        "images": [
            {"url": "/placeholder.svg", "caption": "Opening ceremony"},
            {"url": "/placeholder.svg", "caption": "Coding competition"},
            {"url": "/placeholder.svg", "caption": "Prize distribution"}
        ],
        "category": "events"
    },
    {
        "id": 2,
        "title": "Workshop Series",
        "description": "Technical workshop moments",
        "date": "2024-10-20",
        "images": [
            {"url": "/placeholder.svg", "caption": "ML Workshop"},
            {"url": "/placeholder.svg", "caption": "Web Dev Session"}
        ],
        "category": "workshops"
    }
]

notices_data = [
    {
        "id": 1,
        "title": "Registration Open: Tech Fest 2025",
        "content": "Registration is now open for Tech Fest 2025. Don't miss out!",
        "date": "2025-03-15",
        "priority": "high",
        "category": "event"
    },
    {
        "id": 2,
        "title": "Workshop: Machine Learning Basics",
        "content": "Join us for a comprehensive ML workshop on April 10th",
        "date": "2025-03-10",
        "priority": "medium",
        "category": "workshop"
    }
]

faculty_data = [
    {
        "id": 1,
        "name": "Dr. John Doe",
        "designation": "Professor & HOD",
        "department": "Computer Science",
        "email": "john.doe@ssipmt.edu",
        "phone": "+91-1234567890",
        "specialization": "Machine Learning, Data Science",
        "image": "/placeholder.svg"
    },
    {
        "id": 2,
        "name": "Prof. Jane Smith",
        "designation": "Associate Professor",
        "department": "Computer Science",
        "email": "jane.smith@ssipmt.edu",
        "phone": "+91-0987654321",
        "specialization": "Web Development, Cloud Computing",
        "image": "/placeholder.svg"
    }
]

registrations_data = []

# ============= EVENTS APIs =============
@app.route(f'{BASE_URL}/events', methods=['GET'])
def get_events():
    """Get all events or filter by category/status"""
    category = request.args.get('category')
    status = request.args.get('status')
    
    filtered_events = events_data
    
    if category:
        filtered_events = [e for e in filtered_events if e['category'].lower() == category.lower()]
    
    if status:
        filtered_events = [e for e in filtered_events if e['status'].lower() == status.lower()]
    
    return jsonify({
        "success": True,
        "count": len(filtered_events),
        "data": filtered_events
    })

@app.route(f'{BASE_URL}/events/<int:event_id>', methods=['GET'])
def get_event(event_id):
    """Get a specific event by ID"""
    event = next((e for e in events_data if e['id'] == event_id), None)
    
    if event:
        return jsonify({
            "success": True,
            "data": event
        })
    else:
        return jsonify({
            "success": False,
            "message": "Event not found"
        }), 404

@app.route(f'{BASE_URL}/events', methods=['POST'])
def create_event():
    """Create a new event"""
    data = request.json
    
    new_event = {
        "id": len(events_data) + 1,
        "title": data.get('title'),
        "description": data.get('description'),
        "date": data.get('date'),
        "time": data.get('time'),
        "venue": data.get('venue'),
        "category": data.get('category'),
        "status": data.get('status', 'upcoming'),
        "image": data.get('image', '/placeholder.svg'),
        "registrations": 0
    }
    
    events_data.append(new_event)
    
    return jsonify({
        "success": True,
        "message": "Event created successfully",
        "data": new_event
    }), 201

# ============= CLUBS APIs =============
@app.route(f'{BASE_URL}/clubs', methods=['GET'])
def get_clubs():
    """Get all clubs"""
    return jsonify({
        "success": True,
        "count": len(clubs_data),
        "data": clubs_data
    })

@app.route(f'{BASE_URL}/clubs/<int:club_id>', methods=['GET'])
def get_club(club_id):
    """Get a specific club by ID"""
    club = next((c for c in clubs_data if c['id'] == club_id), None)
    
    if club:
        return jsonify({
            "success": True,
            "data": club
        })
    else:
        return jsonify({
            "success": False,
            "message": "Club not found"
        }), 404

# ============= CERTIFICATES APIs =============
@app.route(f'{BASE_URL}/certificates', methods=['GET'])
def get_certificates():
    """Get all certificates or search by student name"""
    student_name = request.args.get('student_name')
    
    filtered_certs = certificates_data
    
    if student_name:
        filtered_certs = [c for c in filtered_certs if student_name.lower() in c['student_name'].lower()]
    
    return jsonify({
        "success": True,
        "count": len(filtered_certs),
        "data": filtered_certs
    })

@app.route(f'{BASE_URL}/certificates/<int:cert_id>', methods=['GET'])
def get_certificate(cert_id):
    """Get a specific certificate by ID"""
    cert = next((c for c in certificates_data if c['id'] == cert_id), None)
    
    if cert:
        return jsonify({
            "success": True,
            "data": cert
        })
    else:
        return jsonify({
            "success": False,
            "message": "Certificate not found"
        }), 404

# ============= GALLERY APIs =============
@app.route(f'{BASE_URL}/gallery', methods=['GET'])
def get_gallery():
    """Get all gallery items"""
    category = request.args.get('category')
    
    filtered_gallery = gallery_data
    
    if category:
        filtered_gallery = [g for g in filtered_gallery if g['category'].lower() == category.lower()]
    
    return jsonify({
        "success": True,
        "count": len(filtered_gallery),
        "data": filtered_gallery
    })

@app.route(f'{BASE_URL}/gallery/<int:gallery_id>', methods=['GET'])
def get_gallery_item(gallery_id):
    """Get a specific gallery item by ID"""
    item = next((g for g in gallery_data if g['id'] == gallery_id), None)
    
    if item:
        return jsonify({
            "success": True,
            "data": item
        })
    else:
        return jsonify({
            "success": False,
            "message": "Gallery item not found"
        }), 404

# ============= NOTICES APIs =============
@app.route(f'{BASE_URL}/notices', methods=['GET'])
def get_notices():
    """Get all notices"""
    priority = request.args.get('priority')
    category = request.args.get('category')
    
    filtered_notices = notices_data
    
    if priority:
        filtered_notices = [n for n in filtered_notices if n['priority'].lower() == priority.lower()]
    
    if category:
        filtered_notices = [n for n in filtered_notices if n['category'].lower() == category.lower()]
    
    return jsonify({
        "success": True,
        "count": len(filtered_notices),
        "data": filtered_notices
    })

@app.route(f'{BASE_URL}/notices/<int:notice_id>', methods=['GET'])
def get_notice(notice_id):
    """Get a specific notice by ID"""
    notice = next((n for n in notices_data if n['id'] == notice_id), None)
    
    if notice:
        return jsonify({
            "success": True,
            "data": notice
        })
    else:
        return jsonify({
            "success": False,
            "message": "Notice not found"
        }), 404

# ============= FACULTY APIs =============
@app.route(f'{BASE_URL}/faculty', methods=['GET'])
def get_faculty():
    """Get all faculty members"""
    return jsonify({
        "success": True,
        "count": len(faculty_data),
        "data": faculty_data
    })

@app.route(f'{BASE_URL}/faculty/<int:faculty_id>', methods=['GET'])
def get_faculty_member(faculty_id):
    """Get a specific faculty member by ID"""
    member = next((f for f in faculty_data if f['id'] == faculty_id), None)
    
    if member:
        return jsonify({
            "success": True,
            "data": member
        })
    else:
        return jsonify({
            "success": False,
            "message": "Faculty member not found"
        }), 404

# ============= REGISTRATION APIs =============
@app.route(f'{BASE_URL}/registrations', methods=['POST'])
def create_registration():
    """Register for an event"""
    data = request.json
    
    new_registration = {
        "id": len(registrations_data) + 1,
        "event_id": data.get('event_id'),
        "student_name": data.get('student_name'),
        "email": data.get('email'),
        "phone": data.get('phone'),
        "roll_number": data.get('roll_number'),
        "registration_date": datetime.now().isoformat(),
        "status": "confirmed"
    }
    
    registrations_data.append(new_registration)
    
    # Update event registration count
    event = next((e for e in events_data if e['id'] == data.get('event_id')), None)
    if event:
        event['registrations'] += 1
    
    return jsonify({
        "success": True,
        "message": "Registration successful",
        "data": new_registration
    }), 201

@app.route(f'{BASE_URL}/registrations', methods=['GET'])
def get_registrations():
    """Get all registrations or filter by event_id"""
    event_id = request.args.get('event_id')
    
    filtered_regs = registrations_data
    
    if event_id:
        filtered_regs = [r for r in filtered_regs if r['event_id'] == int(event_id)]
    
    return jsonify({
        "success": True,
        "count": len(filtered_regs),
        "data": filtered_regs
    })

# ============= CONTACT APIs =============
@app.route(f'{BASE_URL}/contact', methods=['POST'])
def contact_submit():
    """Submit a contact form"""
    data = request.json
    
    # In a real app, you'd save this to a database or send an email
    contact_data = {
        "id": 1,
        "name": data.get('name'),
        "email": data.get('email'),
        "subject": data.get('subject'),
        "message": data.get('message'),
        "submitted_at": datetime.now().isoformat(),
        "status": "received"
    }
    
    return jsonify({
        "success": True,
        "message": "Thank you for contacting us! We'll get back to you soon.",
        "data": contact_data
    }), 201

# ============= STATS APIs =============
@app.route(f'{BASE_URL}/stats', methods=['GET'])
def get_stats():
    """Get overall statistics"""
    return jsonify({
        "success": True,
        "data": {
            "total_events": len(events_data),
            "total_clubs": len(clubs_data),
            "total_registrations": len(registrations_data),
            "total_certificates": len(certificates_data),
            "total_faculty": len(faculty_data),
            "active_notices": len([n for n in notices_data if n['priority'] == 'high'])
        }
    })

# ============= API DOCUMENTATION =============
@app.route(f'{BASE_URL}/docs', methods=['GET'])
def api_docs():
    """API documentation endpoint"""
    docs = {
        "version": API_VERSION,
        "endpoints": {
            "Events": {
                "GET /api/v1/events": "Get all events (filters: ?category=, ?status=)",
                "GET /api/v1/events/:id": "Get specific event",
                "POST /api/v1/events": "Create new event"
            },
            "Clubs": {
                "GET /api/v1/clubs": "Get all clubs",
                "GET /api/v1/clubs/:id": "Get specific club"
            },
            "Certificates": {
                "GET /api/v1/certificates": "Get all certificates (filters: ?student_name=)",
                "GET /api/v1/certificates/:id": "Get specific certificate"
            },
            "Gallery": {
                "GET /api/v1/gallery": "Get all gallery items (filters: ?category=)",
                "GET /api/v1/gallery/:id": "Get specific gallery item"
            },
            "Notices": {
                "GET /api/v1/notices": "Get all notices (filters: ?priority=, ?category=)",
                "GET /api/v1/notices/:id": "Get specific notice"
            },
            "Faculty": {
                "GET /api/v1/faculty": "Get all faculty members",
                "GET /api/v1/faculty/:id": "Get specific faculty member"
            },
            "Registrations": {
                "POST /api/v1/registrations": "Register for an event",
                "GET /api/v1/registrations": "Get all registrations (filters: ?event_id=)"
            },
            "Contact": {
                "POST /api/v1/contact": "Submit contact form"
            },
            "Stats": {
                "GET /api/v1/stats": "Get overall statistics"
            }
        }
    }
    
    return jsonify(docs)

# ============= ROOT & HEALTH CHECK =============
@app.route('/', methods=['GET'])
def index():
    """Root endpoint"""
    return jsonify({
        "message": "CSA SSIPMT API Server",
        "version": API_VERSION,
        "status": "running",
        "docs": f"{BASE_URL}/docs"
    })

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.now().isoformat()
    })

# ============= ERROR HANDLERS =============
@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "message": "Endpoint not found"
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        "success": False,
        "message": "Internal server error"
    }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
