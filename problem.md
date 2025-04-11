### 🧠 Problem Title: Build a Mongoose Task Manager with Full CRUD Functionality

---

### ✅ Objective:

Develop a modular Task Manager application using **Mongoose** to handle tasks with complete CRUD (Create, Read, Update, Delete) operations and advanced schema features.

---

### 📦 Task Schema Requirements:

```js
Task {
  title: String (required, minLength: 3, maxLength: 100)
  description: String (optional, maxLength: 500)
  dueDate: Date (required, must be future)
  priority: String ("Low" | "Medium" | "High", default: "Medium")
  isCompleted: Boolean (default: false)
  tags: [String] (optional, all lowercase)
  createdAt: Date (default: current timestamp)
}
```

---

### 🔄 CRUD Operations:

- `createTask`: function that creates and saves a new task
- `getAllTasks`: function that returns all tasks
- `getTasksByPriority`: function that returns tasks with a specific priority
- `getLowCompletedTasks`: function that returns first 5 tasks with priority "Low" and `isCompleted: true`
- `getCompletedTasks`: function that returns tasks where `isCompleted` is true
- `getOverdueTasks`: function that returns overdue tasks (`dueDate` < now, `isCompleted` false)
- `getTaskByTitle`: function that returns a task by its title
- `getTasksByTag`: function that returns tasks that contain a specific tag
- `updateTaskById`: function that updates task fields by ID
- `deleteTaskById`: function that deletes a task by ID
- `getMediumPriorityNotCompletedTasks`: function that returns tasks where priority is "Medium", `isCompleted` is false.
- `getHighPriorityDueTodayTasks`: function that returns tasks where priority is "High", dueDate is today, and title contains the word "urgent"

---

### 🧠 Advanced Mongoose Features (Optional):

- `isOverdue` (virtual): returns true if `dueDate` is past and `isCompleted` is false
- `getUrgentTasks` (static): returns tasks with priority `"High"` and `isCompleted: false`
- Pre-save Middleware: logs `"Saving task: <title>"` before saving
- Post-delete Middleware: logs `"Deleted task: <title>"` after deletion

---

### 🛠️ Requirements:

- Modular: Each operation should be a reusable function
- Validated: Schema-level validation (e.g., future `dueDate`, valid `priority`)
- Organized: Separate schema, connection, and functions into separate file
- Error-handled: Use try-catch blocks and provide clear error messages
- Modern: Use async/await

---

### 📡 Task Manager API — CRUD Endpoints

#### 📘 Create a Task

**POST** `/api/tasks`

**Body:**

```json
{
  "title": "urgent team sync",
  "description": "Daily scrum call",
  "dueDate": "2025-04-12T10:00:00Z",
  "priority": "High",
  "tags": ["sync", "meeting"]
}
```

#### 📗 Get All Tasks

**GET** `/api/tasks`

#### 📙 Get Task by ID

**GET** `/api/tasks/:id`

#### 📕 Update Task by ID

**PUT** `/api/tasks/:id`
**Body (example):**

```json
{
  "title": "Updated urgent task title",
  "priority": "Medium"
}
```

#### ❌ Delete Task by ID

**DELETE** `/api/tasks/:id`

---

### 🎯 Custom Filters

- `GET /api/tasks/priority/High` — Tasks with priority = High
- `GET /api/tasks/completed` — Tasks where isCompleted = true
- `GET /api/tasks/overdue` — Tasks with past dueDate and not completed
- `GET /api/tasks/tag/meeting` — Tasks containing the "meeting" tag
- `GET /api/tasks/title/urgent` — Tasks with "urgent" in the title
- `GET /api/tasks/low-completed` — First 5 tasks with priority: Low and isCompleted: true
- `GET /api/tasks/high-today-urgent` — High priority, due today, title includes "urgent"
