# CSA SSIPMT Website

A modern, responsive, and animated website for the Computer Science Association at SSIPMT with a complete Flask backend API.

## 🚀 Features

### Frontend
- ✨ **Smooth Animations**: Powered by Framer Motion for beautiful page transitions and interactions
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- 🎨 **Modern UI**: Built with React, TypeScript, and Shadcn/ui components
- ⚡ **Fast Performance**: Optimized with Vite for lightning-fast development and builds
- 🎯 **Type Safe**: Full TypeScript support for better developer experience

### Backend
- 🔥 **Flask API**: Complete RESTful API with all endpoints
- 📦 **Comprehensive APIs**: Events, Clubs, Certificates, Gallery, Faculty, Registrations, and more
- 🔍 **Filtering & Search**: Advanced query parameters for filtering data
- 📊 **Statistics**: Dashboard stats endpoint for analytics
- 🔒 **CORS Enabled**: Ready for frontend integration
- 📖 **API Documentation**: Built-in documentation endpoint

## 📋 Prerequisites

- Node.js (v16 or higher)
- Python 3.8 or higher
- npm



## 🛠️ Installation & How to Run

### Frontend Setup

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd csa-ssipmt

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Create .env file with API URL
echo "VITE_API_URL=http://localhost:5000/api/v1" > .env

# Step 5: Start the development server with auto-reloading.
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (optional but recommended):
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows: `venv\Scripts\activate`
- macOS/Linux: `source venv/bin/activate`

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the Flask server:
```bash
python app.py
```

The backend API will be available at `http://localhost:5000`

## 🌐 API Documentation

Visit `http://localhost:5000/api/v1/docs` for complete API documentation.

### Available Endpoints

#### Events
- `GET /api/v1/events` - Get all events (filters: `?category=`, `?status=`)
- `GET /api/v1/events/:id` - Get specific event
- `POST /api/v1/events` - Create new event

#### Clubs
- `GET /api/v1/clubs` - Get all clubs
- `GET /api/v1/clubs/:id` - Get specific club

#### Certificates
- `GET /api/v1/certificates` - Get all certificates (filters: `?student_name=`)
- `GET /api/v1/certificates/:id` - Get specific certificate

#### Gallery
- `GET /api/v1/gallery` - Get all gallery items (filters: `?category=`)
- `GET /api/v1/gallery/:id` - Get specific gallery item

#### Notices
- `GET /api/v1/notices` - Get all notices (filters: `?priority=`, `?category=`)
- `GET /api/v1/notices/:id` - Get specific notice

#### Faculty
- `GET /api/v1/faculty` - Get all faculty members
- `GET /api/v1/faculty/:id` - Get specific faculty member

#### Registrations
- `POST /api/v1/registrations` - Register for an event
- `GET /api/v1/registrations` - Get all registrations (filters: `?event_id=`)

#### Contact
- `POST /api/v1/contact` - Submit contact form

#### Stats
- `GET /api/v1/stats` - Get overall statistics

## 🎨 Features Breakdown

### Animations
- Smooth page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects on cards and buttons
- Animated navigation menu
- Loading states and transitions

### Responsive Design
- Mobile-first approach
- Breakpoints for all screen sizes
- Touch-friendly interface
- Optimized layouts for tablets and desktops

## 📱 Pages

1. **Home** - Landing page with hero section, features, and latest updates
2. **About** - Information about CSA and SSIPMT
3. **Events** - Upcoming and past events
4. **Gallery** - Photo galleries from events
5. **Certificates** - Certificate verification and download
6. **Clubs** - CSA, CSI, and other clubs
7. **Contact** - Contact form and information

## 🔧 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **State Management**: TanStack Query

### Backend
- **Framework**: Flask 3.1
- **CORS**: Flask-CORS
- **Python Version**: 3.8+

## 🚀 Running Both Frontend and Backend

**Terminal 1** - Start the backend:
```bash
cd backend
python app.py
```

**Terminal 2** - Start the frontend:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

### Frontend
```bash
npm run build
```

The build output will be in the `dist` directory.

## 👥 Contact

- Email: info@ssipmt.com
- Phone: 0771-3501600

---

Made with ❤️ by CSA SSIPMT
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?





Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.


