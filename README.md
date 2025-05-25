# MCA Faculty Profile Management

This project is a web application for managing and displaying faculty profiles for the MCA department at Modern College of Engineering. It is designed as a **testing and learning project for MCA students at Modern College**. The application includes detailed information about faculty members, their qualifications, experience, courses, research, outreach activities, and blog posts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [Reporting Issues](#reporting-issues)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mcoe_mca.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mcoe_mca
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the application locally, use the following command:

```bash
npm start
```

This will start the development server and you can view the application in your browser at `http://localhost:3000`.

## Project Structure

The project structure is as follows:

```
mcoe_mca/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── faculty_profile/
│   │   │   │   ├── [id]/
│   │   │   │   │   ├── data/
│   │   │   │   │   │   └── facultyData.ts
│   │   │   │   │   ├── FacultyProfile.tsx
│   │   │   │   │   └── FacultyProfile.module.css
│   │   ├── components/
│   │   ├── styles/
│   │   └── App.tsx
│   ├── assets/
│   ├── index.tsx
│   └── ...
├── public/
├── package.json
├── README.md
└── ...
```

## How to Contribute

We welcome contributions to improve this project! This project is intended for learning and testing by MCA students at Modern College. Please follow these steps to contribute:

1. **Fork the repository** on GitHub.
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/your-username/mcoe_mca.git
   cd mcoe_mca
   ```
3. **Create a new feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** in the codebase.
5. **Stage your changes**:
   ```bash
   git add .
   ```
6. **Commit your changes** with a meaningful message:
   ```bash
   git commit -m "Add: short description of your feature or fix"
   ```
7. **Pull the latest changes** from the main branch to avoid conflicts:
   ```bash
   git pull origin main
   ```
8. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
9. **Create a Pull Request** from your branch to the main repository.

### Building and Manual Testing

- Before pushing, check that the project builds successfully:
  ```bash
  npm run build
  ```
- Manually test your changes in the browser at `http://localhost:3000`.
- **Note:** There are currently no automated tests. Please ensure your changes do not break existing functionality.

## Reporting Issues

If you find a bug or want to request a feature or enhancement, please use the following GitHub issue templates:

- [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)
- [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md)
- [Enhancement](.github/ISSUE_TEMPLATE/enhancement.md)

When reporting issues, provide as much detail as possible to help us reproduce and fix the problem.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
