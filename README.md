# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/432f0d07-8ecd-4365-b58b-5cea9ed9b6e9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/432f0d07-8ecd-4365-b58b-5cea9ed9b6e9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## AI Features Configuration

The application includes AI capabilities powered by Claude 3.5 Sonnet. To enable these features:

1. Copy `.env.example` to create a new `.env` file
2. Add your Claude API key to the `.env` file:
   ```
   VITE_CLAUDE_API_KEY=your_api_key_here
   ```

The AI assistant is enabled by default and can be accessed from the dashboard. You can:
- Ask questions about farming practices
- Get crop recommendations
- Receive soil management advice
- Get weather interpretation assistance

To disable/enable the AI features, use the AI Model Settings panel in the dashboard.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/432f0d07-8ecd-4365-b58b-5cea9ed9b6e9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
