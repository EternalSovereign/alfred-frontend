
# Flashcard Learning App Frontend

This is the frontend for the Flashcard Learning App, a web application that allows users to create, review, and manage flashcards for learning purposes. The frontend is built using React, Tailwind CSS, and React Router.

## Features

- User authentication (login, register, logout)
- Create, read, update, and delete flashcards
- Review flashcards based on a spaced repetition algorithm
- Dark mode support
- Responsive design

## Technologies Used

- React
- Tailwind CSS
- React Router
- Axios
- React Toastify

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flashcard-learning-app-frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd flashcard-learning-app-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. In `config/serverConfig.js` put the url of backend:
   ```
   server=your_backend_url
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.

## Project Structure

The project structure is organized as follows:

```
src/
├── components/
│   ├── AddFlashcardModal.jsx
│   ├── Flashcard.jsx
│   ├── FlashcardList.jsx
│   ├── Login.jsx
│   ├── Navbar.jsx
│   ├── Register.jsx
│   └── index.js
├── contexts/
│   └── AuthContext.jsx
├── hooks/
│   └── useAuth.js
├── services/
│   ├── authService.js
│   ├── flashcardService.js
│   └── index.js
├── App.js
├── index.js
├── tailwind.css
└── vercel.json
```

## Thought Process

### Objective
To create a frontend application that allows users to manage flashcards effectively and securely. The frontend should provide a user-friendly interface for authentication, flashcard management, and reviewing flashcards based on a spaced repetition algorithm.

### Steps

1. **Setup Environment**: Set up the development environment by installing React, Tailwind CSS, and other necessary dependencies.

2. **User Authentication**: Implement user authentication using context and hooks to manage authentication state. Secure routes with React Router to ensure only authenticated users can access certain pages.

3. **Flashcard Management**: Develop components for creating, reading, updating, and deleting flashcards. Ensure that each flashcard is displayed based on the review schedule.

4. **Spaced Repetition**: Implement a spaced repetition algorithm to determine the next review date for each flashcard. This algorithm helps optimize the review schedule for better learning retention.

5. **Dark Mode Support**: Add dark mode support to provide a better user experience for users who prefer dark mode.

6. **Responsive Design**: Ensure the application is responsive and works well on different devices and screen sizes.

7. **Error Handling and Notifications**: Use React Toastify to display notifications for various actions such as adding, updating, and deleting flashcards. Handle errors gracefully and provide user feedback.

8. **Deploy to Vercel**: Configure the project for deployment on Vercel. Create a `vercel.json` configuration file and ensure environment variables are set correctly.

### Challenges

- **User Authentication**: Ensuring secure user authentication and authorization. Used context and hooks to manage authentication state.

- **Responsive Design**: Making sure the application is responsive and provides a good user experience on different devices.

### Conclusion

The frontend application was successfully developed to provide a user-friendly and secure way for users to manage their flashcards. The project is now ready for deployment and use. Future improvements could include optimizing the spaced repetition algorithm and adding more advanced features for flashcard management.

## Deployment

To deploy the frontend to Vercel, ensure you have a `vercel.json` file configured and follow the steps:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Follow the prompts to complete the deployment process.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
