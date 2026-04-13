# My Dashboard App

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## Description

**My Dashboard App** is a React-based single-page application that brings together several everyday utilities into one clean interface. It includes:

- **Counter** — Increment, decrement, or reset a numeric counter
- **Dark Mode Toggle** — Switch between light and dark themes
- **Live Clock** — Displays the current time, updated in real time
- **To-Do List** — Add and manage personal tasks
- **Users from API** — Fetches and displays a live list of users from [JSONPlaceholder](https://jsonplaceholder.typicode.com), with a search/filter field
- **Login Form** — Email and password login UI with a styled submit button

## Visuals

### Dashboard View
The dashboard shows the counter, dark mode toggle, live clock, to-do list, and the users fetched from the API — all on a single page with a clean light/dark theme.

### Login Form
A simple login form with email and password fields and a purple "Log In" button, displayed below the user list.

## Installation

**Requirements:**
- Node.js v18 or higher
- npm v9 or higher

**Steps:**

1. Clone the repository:
   ```bash
   git clone my repo
   cd interactive-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser at `http://localhost:5173`

## Usage

Once the app is running:

- Use the **+** and **−** buttons to change the counter value; click **Reset** to return to zero.
- Click **🌙 Dark Mode** to toggle the theme.
- Type in the **To-Do List** input and click **Add** to create a new task.
- Scroll the **Users from API** section or use the search box to filter users by name.
- Fill in the **Login Form** and click **Log In** to simulate authentication.

## Support

If you run into any issues or have questions, please open an issue on the [GitHub Issues page](https://github.com/ndimamhangwani/interactive-dasboard/issues).

## Roadmap

Planned features for future releases:

- User authentication with real backend integration
- Persistent to-do list using localStorage or a database
- Additional dashboard widgets (weather, calendar)
- Mobile-responsive layout improvements

## Screenshots 


<img width="1885" height="898" alt="dashboard view" src="https://github.com/user-attachments/assets/b743c68e-da24-4e03-b14e-acd3b9f5592d" />
<img width="1879" height="567" alt="dashboard" src="https://github.com/user-attachments/assets/5533fba8-2361-41e9-bbae-632e5183f089" />


## Authors and Acknowledgment

- **[Ndima Mhangwani | Techbriddlefoundation learner]** — Initial development
- Thanks to [JSONPlaceholder](https://jsonplaceholder.typicode.com) for the free fake REST API used in the Users section.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Project Status

This project is actively maintained. New features and bug fixes are released regularly. Contributions and feedback are encouraged.
