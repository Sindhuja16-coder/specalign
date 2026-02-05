const { Octokit } = require("@octokit/rest");
const OpenAI = require("openai");

async function runAudit() {
  console.log("Igniting SpecAlign Systems...");
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  
  // Get PR details
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  const pull_number = process.env.GITHUB_REF.split("/")[2];

  // Fetch the code changes (diff)
  const { data: diff } = await octokit.pulls.get({ 
    owner, repo, pull_number, mediaType: { format: "diff" } 
  });
  
  // Ask AI to check for logic drift
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are SpecAlign. Check for logic errors. Return 'DRIFT_DETECTED' if found." },
      { role: "user", content: `CODE DIFF:\n${diff}` }
    ]
  });

  // If drift is found, post the visual dashboard link
  if (completion.choices[0].message.content.includes("DRIFT_DETECTED")) {
    await octokit.issues.createComment({
      owner, repo, issue_number: pull_number, 
      body: `## 🔴 Logic Drift Detected\n\n[ **VIEW VISUAL DASHBOARD** ](https://specalign-hackathon.vercel.app/report?pr=${pull_number})`
    });
  }
}

runAudit();
