# Deployment Steps

## Step 1 — Extract ZIP
Right click the ZIP and extract it.

## Step 2 — Create GitHub repo
Go to GitHub and create a new repository.
Suggested name: 100x-vijay-singh-voicebot

## Step 3 — Upload project files
Upload everything from the extracted folder:
- api
- public
- package.json
- vercel.json
- README.md
- INTERVIEW_ANSWERS.md
- DEPLOYMENT_STEPS.md

## Step 4 — Deploy on Vercel
Open Vercel.
Click New Project.
Import the GitHub repository.
Click Deploy.

## Step 5 — Add OpenAI API key
Open Vercel project.
Go to Settings → Environment Variables.
Add:
OPENAI_API_KEY = your OpenAI API key

Optional:
OPENAI_MODEL = gpt-4.1-mini

## Step 6 — Redeploy
Go to Deployments.
Click the latest deployment menu.
Click Redeploy.

## Step 7 — Test
Open the live Vercel URL and test:
- What should we know about your life story?
- What is your number one superpower?
- What are your top three growth areas?
- What misconception do your coworkers have about you?
- How do you push your boundaries and limits?
- Why are you interested in AI agents?
- Why should 100x hire you?
- Tell me about your internship.
- How do you explain your CGPA?

## Step 8 — Submit
Send only the final Vercel URL to 100x.
