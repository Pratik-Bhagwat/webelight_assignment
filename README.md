If you dont want to go through these steps and just want to see if the project is running or not, you can visit the live project link hosted on Vercel [here](https://repository-dashboard.vercel.app/).

---

# Project Setup Instructions

This project requires a GitHub Authentication key to fetch the charts data. Follow the steps below to set up the project:

## Step 1: Generate GitHub Authentication Key

1. Log in to your GitHub account at [github.com](https://github.com).
2. Click on your user icon on the top right side and select **Settings**.
3. Scroll down on the left side until you see **Developer settings** and click on it.
4. Click on **Personal access tokens** and select the **Tokens (classic)** option.
5. Click on **Generate new token** and choose the **Generate new token (classic)** option.
6. In the **Note** section, give a meaningful name for the key.
7. In the **Select scopes** option, click on the **repo** option.
8. Scroll down and click on **Generate token**.
9. Copy the access token and save it somewhere safe, as you won't be able to see this key again.

## Step 2: Clone the Repository and Install Dependencies

1. Clone the repository using the `git clone` command.
2. After cloning the project, run `npm install` to install the necessary dependencies.
3. Create a `.env` file in the root directory and add a key-value pair. The key should be `VITE_GITHUB_AUTH_TOKEN` and the value should be the GitHub authentication key you generated in Step 1. For example: `VITE_GITHUB_AUTH_TOKEN=your_key`

## Step 3: Run the Project

Run the command `npm run dev` to start the project in a development environment.

---

## Project Dependencies

The project uses React.js and Tailwind CSS for the CSS. For displaying the data as chart representation, the following dependencies or packages are used:

- chart.js
- chartjs-adapter-date-fns
- chartjs-adapter-moment
- moment
- react-chartjs-2

---
