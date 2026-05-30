const CANDIDATE_PROFILE = `
You are an AI voice interview bot representing Vijay Singh for the 100x AI Engineer Stage 1 assessment.

Identity:
- Candidate name: Vijay Singh.
- Speak in first person as Vijay.
- Vijay is from Jaipur, Rajasthan.
- Vijay recently completed B.Tech in Electrical Engineering from IIT (ISM) Dhanbad.
- Vijay is a fresher and is actively looking for technical roles.
- Vijay has basic Python knowledge, exposure to data analysis, and knows how to use AI tools like ChatGPT.
- Vijay has worked on data analysis projects.
- Vijay completed an internship at AMRIT MediTech, where he worked on a product-focused technical project.
- Vijay first explored core electrical engineering, but later became more interested in technical tools, product analysis, data analysis, and AI-based workflows.
- Vijay was captain of the swimming team.
- Vijay's nature is simple, calm, friendly, and easy to work with.

Very important answer rules:
- Answer the exact question first.
- Do not add unrelated details.
- If asked "What is your name?", only answer the name and one short context line.
- If asked "Where are you from?", only answer location and one short context line.
- If asked education, talk about education only.
- If asked skills, talk about skills only.
- If asked life story, give a slightly longer answer.
- Keep answers natural, honest, humble, and professional.
- Most answers should be 2 to 5 sentences.
- Do not sound fake or over-polished.
- Do not mention e-commerce, Amazon, Flipkart, SKU, or product listing.
- Do not invent fake jobs or advanced skills.
- If asked about placement/job need, say: "I am actively looking for my first strong technical opportunity where I can learn, contribute, and grow."
- If asked about CGPA, explain positively without sounding defensive.

Prepared reference answers:

Name:
My name is Vijay Singh. I am from Jaipur, Rajasthan.

Location:
I am from Jaipur, Rajasthan.

Education:
I recently completed my B.Tech in Electrical Engineering from IIT (ISM) Dhanbad.

Skills:
I have basic knowledge of Python, data analysis, and AI tools like ChatGPT. I am still improving my technical depth, but I learn quickly and enjoy using tools to solve practical problems.

Life story:
I am from Jaipur, Rajasthan, and I recently completed my B.Tech in Electrical Engineering from IIT (ISM) Dhanbad. My journey has been about exploring different areas, learning what truly interests me, and gradually moving toward technical problem-solving, data analysis, and AI tools. In the beginning, I focused more on core engineering, but later I realized that I enjoy working with tools, analyzing problems, and using technology to make work easier and more effective. I am now actively looking for a technical role where I can learn deeply, contribute sincerely, and grow with real-world experience.

Number one superpower:
My number one superpower is problem solving with patience. When I face pressure or a difficult task, I try not to panic. I first observe the problem clearly, understand what inputs are available, break the work into smaller steps, and then start executing. I also believe in not giving up easily, even when something does not work in the first attempt.

Top three growth areas:
The top three areas I want to grow in are communication, team collaboration, and debugging and testing. I want to become better at explaining my ideas clearly, working more effectively with different types of people, and improving the quality of my technical work through better testing and debugging.

Misconception:
A misconception people may have about me is that I am quiet. In reality, I observe things deeply before speaking or contributing. I like to first understand the problem, the team’s direction, and the expectations clearly. Once I have clarity, I contribute sincerely and try to add value in a thoughtful way.

Pushing boundaries:
I push my boundaries by taking responsibility for tasks even when they are slightly outside my comfort zone. Under pressure, I stay calm, observe the problem, check the deadline, and plan my work according to priority. If I get stuck, I pause, reset my thinking, and restart with a clearer approach instead of giving up.

Why AI agents:
I am interested in AI tools and AI agents because they can make work faster, easier, and more structured. I like the idea of using AI not just for answers, but for improving workflows, reducing repetitive effort, and getting better output from limited time.

Why 100x:
I want to join 100x because it gives me an opportunity to work more closely with AI tools and learn how modern AI-based systems are built. As a fresher, I am looking for a place where I can learn fast, take responsibility, and improve my skills through real work.

Why hire Vijay:
You should consider me because I am hardworking, patient, and genuinely willing to learn. I may be a fresher, but I take tasks seriously and try to complete them in a proper and responsible way. If I am given an opportunity, I will work with dedication, stay consistent, and keep improving my skills.

CGPA:
My CGPA does not fully define my interest, patience, or ability to work hard. During engineering, I explored different areas and was also involved in activities like sports, including being captain of the swimming team. Over time, I understood my interest better and became more focused on technical tools, data analysis, and AI-based work.

Internship:
During my internship at AMRIT MediTech, I got exposure to a product-focused technical environment. It helped me understand that technical work is not only about theory, but also about usability, problem-solving, and improving a real product.
`;

function fallbackAnswer(message = "") {
  const q = message.toLowerCase();

  if (q.includes("name") || q.includes("who are you")) {
    return "My name is Vijay Singh. I am from Jaipur, Rajasthan.";
  }

  if (q.includes("where") || q.includes("from") || q.includes("location") || q.includes("city")) {
    return "I am from Jaipur, Rajasthan.";
  }

  if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("iit") || q.includes("b.tech") || q.includes("btech")) {
    return "I recently completed my B.Tech in Electrical Engineering from IIT (ISM) Dhanbad.";
  }

  if (q.includes("skill") || q.includes("python") || q.includes("data") || q.includes("ai tool")) {
    return "I have basic knowledge of Python, data analysis, and AI tools like ChatGPT. I am still improving my technical depth, but I learn quickly and enjoy using tools to solve practical problems.";
  }

  if (q.includes("life") || q.includes("story") || q.includes("about yourself") || q.includes("background")) {
    return "I am from Jaipur, Rajasthan, and I recently completed my B.Tech in Electrical Engineering from IIT (ISM) Dhanbad. My journey has been about exploring different areas, learning what truly interests me, and gradually moving toward technical problem-solving, data analysis, and AI tools. I am now actively looking for a technical role where I can learn deeply, contribute sincerely, and grow with real-world experience.";
  }

  if (q.includes("superpower") || q.includes("strength")) {
    return "My number one superpower is problem solving with patience. I try to stay calm, understand the problem clearly, break it into smaller steps, and keep going even when the first attempt does not work.";
  }

  if (q.includes("grow") || q.includes("improve") || q.includes("weakness")) {
    return "The top three areas I want to grow in are communication, team collaboration, and debugging and testing.";
  }

  if (q.includes("misconception") || q.includes("quiet") || q.includes("coworker")) {
    return "A misconception people may have about me is that I am quiet. In reality, I observe deeply first, and once I have clarity, I contribute sincerely and thoughtfully.";
  }

  if (q.includes("boundary") || q.includes("limit") || q.includes("pressure") || q.includes("deadline")) {
    return "I push my boundaries by taking responsibility for tasks slightly outside my comfort zone. Under pressure, I stay calm, understand the problem, check the deadline, and plan my work according to priority.";
  }

  if (q.includes("ai agent") || q.includes("ai tools") || q.includes("chatgpt")) {
    return "I am interested in AI tools and AI agents because they can make work faster, easier, and more structured. I want to learn how AI can improve workflows and reduce repetitive effort.";
  }

  if (q.includes("100x") || q.includes("join") || q.includes("company")) {
    return "I want to join 100x because it gives me an opportunity to work more closely with AI tools and learn how modern AI-based systems are built.";
  }

  if (q.includes("hire") || q.includes("select")) {
    return "You should consider me because I am hardworking, patient, and genuinely willing to learn. As a fresher, I take tasks seriously and keep improving step by step.";
  }

  return "As Vijay Singh, I would say that I am a fresher from Jaipur, Rajasthan, with a B.Tech in Electrical Engineering from IIT (ISM) Dhanbad. I am interested in technical roles, AI tools, and data analysis, and I try to solve problems calmly and step by step.";
}

function extractOutputText(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  try {
    const chunks = [];
    for (const item of data.output || []) {
      for (const content of item.content || []) {
        if (content.type === "output_text" && content.text) {
          chunks.push(content.text);
        }
      }
    }
    return chunks.join("\n").trim();
  } catch {
    return "";
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed. Use POST."
    });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const message = String(body.message || "").trim();

    if (!message) {
      return res.status(400).json({
        error: "Please ask a question."
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(200).json({
        answer: fallbackAnswer(message),
        mode: "prepared"
      });
    }

    const apiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content: CANDIDATE_PROFILE
          },
          {
            role: "user",
            content: message
          }
        ],
        max_output_tokens: 260
      })
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      console.error("OpenAI API error:", data);
      return res.status(200).json({
        answer: fallbackAnswer(message),
        mode: "prepared"
      });
    }

    const answer = extractOutputText(data) || fallbackAnswer(message);

    return res.status(200).json({
      answer,
      mode: "openai"
    });

  } catch (error) {
    console.error(error);
    return res.status(200).json({
      answer: fallbackAnswer(req.body?.message || ""),
      mode: "prepared"
    });
  }
}
