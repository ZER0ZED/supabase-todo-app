# Supabase To-Do List App

Welcome to the **Supabase To-Do List App**! This project is a simple, modern to-do list application built with **React** and **Supabase**. It includes user authentication and CRUD operations for managing tasks.

---

## ✨ Features

- **User Authentication:** Sign up and sign in with email/password.
- **Task Management:** Create, update, and delete tasks effortlessly.
- **Real-Time Updates:** Live task updates as you interact.
- **Responsive UI:** A clean and simple user interface.

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript (Create React App)
- **Backend:** Supabase (PostgreSQL, Auth, and REST APIs)
- **Deployment:** Netlify or Vercel (optional)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js & npm:** [Download Node.js](https://nodejs.org/)
- **Supabase Account:** [Sign up on Supabase](https://supabase.com/)
- **Git:** (Optional for version control)

### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ZER0ZED/supabase-todo-app.git
   cd supabase-todo-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add your Supabase credentials:

   ```env
   REACT_APP_SUPABASE_URL=YOUR_SUPABASE_URL
   REACT_APP_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
   ```

4. **Run the Application:**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📊 Supabase Setup

1. **Create a Supabase Project:**
   - Log in to [Supabase](https://supabase.com/).
   - Create a new project and note your **Supabase URL** and **anon key**.

2. **Set Up the Database:**
   - In the Supabase dashboard, navigate to the SQL Editor.
   - Run this SQL command to create the `todos` table:

     ```sql
     create table todos (
       id uuid primary key default uuid_generate_v4(),
       task text not null,
       is_complete boolean default false,
       created_at timestamp with time zone default now()
     );
     ```

3. **Enable Authentication:**
   - Go to **Authentication (Auth)**.
   - Enable **Email/Password** authentication under Sign In Methods.

---

## 📁 Project Structure

```
supabase-todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth.js        # User authentication component
│   │   └── TodoList.js    # To-do list management component
│   ├── supabaseClient.js  # Supabase client configuration
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── .env                   # Environment variables (ignored in Git)
├── .gitignore
├── package.json
└── README.md
```

---

## 🌐 Deployment

### Option 1: Netlify

- **Connect your GitHub repository** to Netlify.
- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Add environment variables** in Netlify settings.
- **Deploy** and share the live URL.

### Option 2: Vercel

- **Import your GitHub repository** into Vercel.
- **Preset:** Create React App
- **Add environment variables** via the Vercel dashboard.
- **Deploy** and share your live link.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Supabase Documentation](https://supabase.com/docs)
- [Create React App Documentation](https://create-react-app.dev/)
- Built with ❤️ by **ZER0ZED**
