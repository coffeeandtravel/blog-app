# React Blog Application

This is a React-based blog application that allows users to perform CRUD operations on blog posts. It is built using React, React Router, `Axios` for API requests, and Tailwind CSS for styling. The backend API is expected to be set up on a server (e.g., `http://localhost:5000`), which handles the blog post data.

## Features:
- View a list of blog posts
- Edit an existing blog post
- Delete a blog post
- Add a new blog post

## Project Setup

Follow these steps to set up and run the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager, typically installed with Node.js)
- A running backend API (e.g., `http://localhost:5000`) which manages the blog posts.

### Getting Started

1. **Clone the repository:**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone <repository_url>
   ```
   

2. Navigate to folder

```sh
cd <project_folder>
```

3. Install dependencies

```sh
npm i
```

4. Start the development server

```sh
npm run dev
```

### Backend Setup (if not already set up)

- If you are setting up your backend locally, ensure that the API server is running at `http://localhost:5000`.
- The backend should handle requests such as:
    - `GET /posts`: To fetch all blog posts
    - `POST /posts`: To create a new blog post
    - `PUT /posts/:id`: To update an existing blog post
    - `DELETE /posts/:id`: To delete a blog post


5. Run the server locally:
```sh
npm run mock-api
```

### Additional Notes

- **Axios** is used to make API requests from the React frontend to the backend server.
- **Tailwind CSS** is used for styling and layout management.

### Technologies Used:

- React
- React Router DOM
- Axios
- Tailwind CSS
- JSON server (for mock API, if you're using a mock setup)
- React Icons
- Vite

