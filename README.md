# TASK PRODUCTIVITY (Backend Project)

##  Features
- JWT Authentication, Password Hashing and Input validation
- User Creation and Login
- User Info. Update/Delete
-  TASK Created by User
-  Update Task
-  Get Task Insights
  
##  Installation & Setup

## 1. Clone the repository
git clone https://github.com/NishantT-dev/Productivity_task_api.git
cd tasks_api

## 2. Install dependencies ( express mongoose jsonwebtoken bcryptjs express-validator morgan dotenv )
## 3. Configure environment variables
MONGO_URI=mongodb://localhost:27017/tasks OR Mongo Atlas URI
PORT=5000
## 4. Run server

## Task API Endpoints (request and response)

## 1. POST api/users (Create User)

<img width="940" height="415" alt="image" src="https://github.com/user-attachments/assets/d8b6ae30-3398-4ea8-ba45-510f4cf32205" />

## 2. POST api/users/login (Login User - JWT auth)

<img width="940" height="398" alt="image" src="https://github.com/user-attachments/assets/1f94b17f-9f55-4dac-80d5-188cd478973c" />

## 3. POST api/tasks (Create Task - Task linked with User)

<img width="940" height="497" alt="image" src="https://github.com/user-attachments/assets/361dda79-8067-4d9a-97a4-a59c478224f7" />

## 4. GET api/tasks/insight?range=year (Get task insights (range = day,week,year))

<img width="940" height="421" alt="image" src="https://github.com/user-attachments/assets/7e766d8c-f1a1-4eb3-85a3-fe360cb29223" />

## 5. PATCH api/tasks/:id/complete (To complete a task by ID)

<img width="1363" height="533" alt="image" src="https://github.com/user-attachments/assets/a412f635-2043-47d5-8373-1e36588c635e" />


