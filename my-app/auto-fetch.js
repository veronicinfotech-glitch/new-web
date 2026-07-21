const { spawn, execSync } = require('child_process');

console.log("==================================================");
console.log("🚀 Veronic Automatic Live Instagram Fetcher");
console.log("==================================================");

// 1. Run the authenticated Instagram fetch immediately
console.log("📡 Initializing authenticated connection to Instagram...");
try {
  execSync('node fetch-live-ig.js', { stdio: 'inherit' });
} catch (e) {
  console.log("⚠️ Initial fetch encountered an issue, but starting app anyway...");
}

// 2. Start the React app
console.log("🚀 Starting React application...");
const reactApp = spawn('npm', ['run', 'start-react'], { stdio: 'inherit', shell: true });

// 3. Auto-fetch every 10 minutes (600000 ms) to keep posts perfectly live automatically!
setInterval(() => {
  console.log("🔄 Auto-fetching live Instagram updates in background...");
  try {
    execSync('node fetch-live-ig.js', { stdio: 'inherit' });
  } catch (e) {
    // Silently continue if background fetch fails
  }
}, 600000);
