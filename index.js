const { execSync } = require('child_process');
const fs = require('fs');

// Function to execute shell commands
const executeCommand = (command) => {
    execSync(command, { stdio: 'inherit' });
};

// Provide the path to your local repository directory
const repoPath = process.cwd();
// Navigate to your repository directory
process.chdir(repoPath);

// Make changes or generate new files
fs.writeFileSync('daily_changes.txt', 'Some daily changes');

// Add all changes
executeCommand('git add .');

// Commit changes with a timestamp
const timestamp = new Date().toISOString();
executeCommand(`git commit -m "Daily update: ${timestamp}"`);

// Push changes to the remote repository (assuming the branch is 'main')
executeCommand('git push origin main');
