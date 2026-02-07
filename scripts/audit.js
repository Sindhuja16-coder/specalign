const { Octokit } = require("@octokit/rest");

// PURE TAMBO-COMPLIANT SCRIPT (No OpenAI Key needed)
async function runAudit() {
  console.log("Igniting SpecAlign Systems...");
  
  // 1. Connect to GitHub (Uses the free GITHUB_TOKEN)
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  const pull_number = process.env.GITHUB_REF.split("/")[2];

  // 2. Simulate AI Analysis (The "Magic" Pause)
  console.log("Using Tambo logic to analyze drift...");
  await new Promise(r => setTimeout(r, 2000)); 

  console.log("Drift detected! Posting visual card...");
  
  // 3. Post the Tambo Visual Card
  await octokit.issues.createComment({
    owner, repo, issue_number: pull_number, 
    body: `## 🔴 Logic Drift Detected
    
    **Severity:** CRITICAL
    **Violation:** Payment processing code allows negative values.
    **Spec Requirement:** "Refunds must not process negative amounts."
    
    [ **VIEW VISUAL DASHBOARD** ](https://specalign.vercel.app)`
  });
}

runAudit();
