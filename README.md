# Vijay Singh — Final AI Voice Bot

This is the final project for the 100x Stage 1 AI Engineer assessment.

## Candidate
Vijay Singh  
Jaipur, Rajasthan  
B.Tech Electrical Engineering, IIT (ISM) Dhanbad  
Fresher, actively looking for technical roles

## What this app does
- Allows voice input through the browser microphone.
- Also supports typed questions.
- Responds in Vijay Singh's interview style.
- Speaks the answer back using browser text-to-speech.
- Uses a server-side OpenAI API key from Vercel Environment Variables.
- Includes fallback answers for important interview questions.

## Files
- `public/index.html` — main web page
- `public/style.css` — design
- `public/app.js` — microphone, typed question, response display, and speech output
- `api/chat.js` — backend AI endpoint and Vijay Singh candidate persona
- `INTERVIEW_ANSWERS.md` — final answer base
- `DEPLOYMENT_STEPS.md` — step-by-step deployment guide

## Vercel setup
Add this Environment Variable in Vercel:

OPENAI_API_KEY = your OpenAI API key

Optional:

OPENAI_MODEL = gpt-4.1-mini

Important: Do not paste your API key in any frontend file.
