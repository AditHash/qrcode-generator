# QR Code Generator

A simple QR Code Generator application built with React Vite (frontend) and FastAPI (backend), deployed using Docker and Nginx.

## Features

- Generate QR codes from text or URLs.
- Frontend built with React and Vite.
- Backend built with FastAPI.
- Dockerized for easy deployment.
- Nginx reverse proxy for seamless communication between frontend and backend.

## Installation

### Prerequisites

- Docker and Docker Compose installed on your machine.
- Node.js and npm (for local development).

### Steps

1. Clone the Repository:
    ```bash
    git clone https://github.com/AditHash/qrcode-generator.git
    cd qrcode-generator
    ```

2. Build and Run with Docker Compose:
    ```bash
    docker-compose up --build
    ```

    The application will be available at:
    - Frontend: [http://localhost:8080](http://localhost:8080)
    - Backend: [http://localhost:8000](http://localhost:8000)

3. Access the Application:
    Open your browser and navigate to [http://localhost:8080](http://localhost:8080).
    Enter a text or URL and click "Generate QR Code" to see the result.

## Project Structure

```plaintext
qrcode-generator/
├── backend/
│   ├── main.py            # FastAPI backend code
│   ├── requirements.txt   # Python dependencies
│   ├── Dockerfile         # Dockerfile for backend
│   └── ...
├── frontend/
│   ├── src/               # React frontend code
│   ├── public/            # Static assets
│   ├── package.json       # Node.js dependencies
│   ├── Dockerfile         # Dockerfile for frontend
│   └── ...
├── nginx.conf             # Nginx configuration
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # Project documentation
```

## Development

### Running Locally (Without Docker)

#### Backend:

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Start the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

#### Frontend:

1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

### Access the Application:

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:8000](http://localhost:8000)

## Deployment

### Docker Compose

Build and run the application:
```bash
docker-compose up --build
```

### Docker Swarm (Optional)

1. Initialize Docker Swarm:
    ```bash
    docker swarm init
    ```

2. Deploy the stack:
    ```bash
    docker stack deploy -c docker-compose.yml qrcode-stack
    ```

## Technologies Used

- Frontend: React, Vite, TypeScript
- Backend: FastAPI, Python
- Deployment: Docker, Docker Compose, Nginx

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- FastAPI for the backend framework.
- React for the frontend library.
- Docker for containerization.