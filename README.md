# Starter Project Guide

Welcome to the Starter Project! This guide will help you get up and running with both the backend and mobile parts of the project.

## Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd backend/
    ```
2. **Install dependencies:**

    ```bash
    npm install
    ```
    3. **Set up your environment variables:**

   Copy the `.env.example` file to a new file named `.env` and fill in the necessary environment variables.

4. **Start the server:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:8000`.

## Mobile Setup

1. **Navigate to the mobile directory:**

    ```bash
    cd mobile/
    ```
2. **Install dependencies:**

    ```bash
    npm install
    ```
3. **Start the app:**

    ```bash
    npx expo start
    ```
    In the output, you'll find options to open the app in a development build, Android emulator, iOS simulator, or Expo Go.


## Development

* **Backend Development:** The backend code is located in the `backend/src` directory. You can add new modules, utilities, or middleware as needed.
* **Mobile Development:** The mobile app's entry point is `mobile/app/index.tsx`. The project uses file-based routing, so you can add new screens by creating new files or directories in the app directory.