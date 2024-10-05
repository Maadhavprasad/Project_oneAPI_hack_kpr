Taak maker
Overview
The Taak maker is an intelligent web-based application designed to help users plan and track their daily activities efficiently. Using Natural Language Processing (NLP), it suggests personalized tasks, tracks their completion, and provides real-time feedback on user progress.

Features:

Personalized Routine Suggestions: The app suggests tasks based on user inputs and task difficulty levels.
Task Tracking: Users can track their daily routines and receive prompts for task completion.
Goal Setting: Allows users to input their personal and professional goals, with tracking for ongoing goals and achievements.
Dynamic Planning: The app dynamically adjusts suggestions based on user performance and completed tasks.
Weekly Progress: Users can monitor weekly progress and adjust their schedules accordingly.
Task Rescheduling: If a task is incomplete, the app suggests alternate tasks or rescheduling options to ensure goal achievement.

Project Structure
diff

- open.html: First page of the application.
- login.html: User login and signup page.
- main.html: Main landing page after user authentication.
- student.html: Page for collecting user details.
- routine.html: Page for entering daily routines.
- goal.html: Page for inputting user goals.
- confirmation.html: Displays confirmed routines and provides submission options.
- app.html: Options for Regular Day, Special Day, and Achievements tracking.
- CSS and JS files: Custom styling and JavaScript for dynamic functionality.

Technologies Used

Backend: Django
Frontend: HTML, CSS, JavaScript
Database: SQLite
Machine Learning: LSTM model for predicting and managing routines
NLP: Used for understanding and suggesting tasks based on user input

Setup Instructions

Clone the repository:
git clone https://github.com/your-repo/dynamic-day-planner.git

Create a virtual environment:
python -m venv env
source env/bin/activate  # For Linux/MacOS
env\Scripts\activate # For Windows

Install dependencies:
pip install -r requirements.txt

Migrate the database:
python manage.py migrate

Run the server:
python manage.py runserver
How to Use
Open the app: Access the app via localhost:8000.
Sign up or log in: Use the login page to access your dashboard.
Set your routine: Enter your tasks and goals for the day or week.
Track progress: View your routines and progress through the confirmation and app pages.
Receive suggestions: The app will offer personalized suggestions and track your completion rates.
Future Enhancements
Integration with Google Calendar for seamless syncing of schedules.
Mobile App Version for easy access and on-the-go tracking.
Improved NLP models to better understand user tasks and preferences.
