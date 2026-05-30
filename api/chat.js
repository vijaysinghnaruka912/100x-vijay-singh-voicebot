const answers = [
  {
    keys: ["name", "who are you", "candidate", "introduce your name"],
    answer: "My name is Vijay Singh. I am from Jaipur, Rajasthan, and I recently completed my B.Tech in Electrical Engineering from IIT (ISM) Dhanbad."
  },
  {
    keys: ["from", "location", "city", "jaipur", "rajasthan", "hometown", "where do you live"],
    answer: "I am from Jaipur, Rajasthan. I recently completed my B.Tech in Electrical Engineering from IIT (ISM) Dhanbad, and I am actively looking for a technical role where I can learn, contribute, and grow."
  },
  {
    keys: ["education", "college", "degree", "iit", "ism", "dhanbad", "btech", "electrical", "qualification"],
    answer: "I recently completed my B.Tech in Electrical Engineering from IIT (ISM) Dhanbad. My background is in Electrical Engineering, but over time I became more interested in technical tools, data analysis, product-focused work, and AI-based workflows."
  },
  {
    keys: ["skills", "skill", "python", "data", "analysis", "chatgpt", "ai tools", "technical"],
    answer: "I have basic knowledge of Python, data analysis, and AI tools like ChatGPT. I am still improving my technical depth, but I learn quickly and enjoy using tools to solve practical problems. I am especially interested in using AI tools to make work faster, more structured, and more useful."
  },
  {
    keys: ["life", "story", "background", "journey", "about yourself", "few sentences", "tell me about yourself"],
    answer: "I am from Jaipur, Rajasthan, and I recently completed my B.Tech in Electrical Engineering from IIT (ISM) Dhanbad. My journey has been about exploring different areas, learning what truly interests me, and gradually moving toward technical problem-solving, data analysis, and AI tools. In the beginning, I focused more on core engineering, but later I realized that I enjoy working with tools, analyzing problems, and using technology to make work easier and more effective. I am now actively looking for a technical role where I can learn deeply, contribute sincerely, and grow with real-world experience."
  },
  {
    keys: ["superpower", "strength", "best skill", "number one", "#1", "strongest", "good at"],
    answer: "My number one superpower is problem solving with patience. When I face pressure or a difficult task, I try not to panic. I first observe the problem clearly, understand what inputs are available, break the work into smaller steps, and then start executing. I also believe in not giving up easily, even when something does not work in the first attempt."
  },
  {
    keys: ["grow", "growth", "improve", "top 3", "three areas", "weakness", "areas to improve"],
    answer: "The top three areas I want to grow in are communication, team collaboration, and debugging and testing. I want to become better at explaining my ideas clearly, working more effectively with different types of people, and improving the quality of my technical work through better testing and debugging. As a fresher, I know I have a lot to learn, and I am ready to put in consistent effort to improve."
  },
  {
    keys: ["misconception", "coworkers", "colleagues", "wrong about you", "misunderstand", "quiet"],
    answer: "A misconception people may have about me is that I am quiet. In reality, I observe things deeply before speaking or contributing. I like to first understand the problem, the team’s direction, and the expectations clearly. Once I have clarity, I contribute sincerely and try to add value in a thoughtful way."
  },
  {
    keys: ["boundaries", "limits", "comfort zone", "push yourself", "challenge yourself", "pressure", "deadline", "stress"],
    answer: "I push my boundaries by taking responsibility for tasks even when they are slightly outside my comfort zone. Under pressure, I stay calm, observe the problem, check the deadline, and plan my work according to priority. If I get stuck, I pause, reset my thinking, and restart with a clearer approach instead of giving up. I believe this mindset helps me keep learning and improving."
  },
  {
    keys: ["why ai", "ai agent", "agents", "ai tools", "chatgpt", "artificial intelligence"],
    answer: "I am interested in AI tools and AI agents because they can make work faster, easier, and more structured. I like the idea of using AI not just for answers, but for improving workflows, reducing repetitive effort, and getting better output from limited time. I want to learn more about how AI agents work because I believe they can become very useful in real technical and business environments."
  },
  {
    keys: ["100x", "why this company", "why join", "company", "join 100x"],
    answer: "I want to join 100x because it gives me an opportunity to work more closely with AI tools and learn how modern AI-based systems are built. As a fresher, I am looking for a place where I can learn fast, take responsibility, and improve my skills through real work. I believe 100x can be a strong opportunity for me to prove my dedication, improve technically, and contribute with sincerity."
  },
  {
    keys: ["hire", "hire you", "why should", "choose you", "select you", "why you"],
    answer: "You should consider me because I am hardworking, patient, and genuinely willing to learn. I may be a fresher, but I take tasks seriously and try to complete them in a proper and responsible way. I am comfortable starting from basics, improving step by step, and learning from people around me. If I am given an opportunity, I will work with dedication, stay consistent, and keep improving my skills."
  },
  {
    keys: ["cgpa", "grade", "marks", "academic", "performance"],
    answer: "My CGPA does not fully define my interest, patience, or ability to work hard. During engineering, I explored different areas and was also involved in activities like sports, including being captain of the swimming team. Over time, I understood my interest better and became more focused on technical tools, data analysis, and AI-based work. I see this as part of my learning journey, and I am now much clearer about the direction I want to grow in."
  },
  {
    keys: ["internship", "amrit", "meditech", "project", "experience"],
    answer: "During my internship at AMRIT MediTech, I got exposure to a product-focused technical environment. It helped me understand that technical work is not only about theory, but also about usability, problem-solving, and improving a real product. That experience made me more interested in technical tools, data analysis, and practical software-based workflows."
  },
  {
    keys: ["sports", "swimming", "captain", "team captain", "leadership"],
    answer: "I was captain of the swimming team, and that experience helped me build discipline, patience, and responsibility. It also taught me how to stay calm under pressure, coordinate with people, and keep improving through consistent practice."
  }
];

function normalize(text = "") {
  return text.toLowerCase().replace(/[?.,!]/g, " ").replace(/\s+/g, " ").trim();
}

function preparedAnswer(message = "") {
  const q = normalize(message);

  let best = null;
  let bestScore = 0;

  for (const item of answers) {
    let score = 0;

    for (const key of item.keys) {
      const normalizedKey = key.toLowerCase();

      if (q.includes(normalizedKey)) {
        score += normalizedKey.split(" ").length + 5;
      }

      const words = normalizedKey.split(" ");
      for (const word of words) {
        if (word.length > 3 && q.includes(word)) {
          score += 1;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (best && bestScore > 1) {
    return best.answer;
  }

  return "I would answer that as Vijay Singh: I am a fresher from Jaipur, Rajasthan, with a B.Tech in Electrical Engineering from IIT (ISM) Dhanbad. I am interested in technical roles, AI tools, and data analysis. I try to stay calm, understand the problem clearly, and solve it step by step. I know I have a lot to learn, but I am hardworking, patient, and ready to take responsibility.";
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

    const answer = preparedAnswer(message);

    return res.status(200).json({
      answer,
      mode: "prepared"
    });

  } catch (error) {
    return res.status(200).json({
      answer: "My name is Vijay Singh. I am from Jaipur, Rajasthan, and I am a recent B.Tech Electrical Engineering graduate from IIT (ISM) Dhanbad. I am interested in technical roles, AI tools, data analysis, and practical problem solving.",
      mode: "prepared"
    });
  }
}
