#!/bin/bash

echo "🔧 Fixing PAL-Imperator Project..."

# Navigate to project directory
cd ~/ai_modular_interface || exit 1

# Ensure Git is tracking the latest version
git reset --hard origin/main

# Pull the latest version of LandingPage.jsx from Git
git pull origin main

# Reset dependencies (only if necessary)
rm -rf node_modules .vite package-lock.json
npm install

# Restart Vite
npm run dev

echo "✅ Fix complete! Open http://localhost:5173/ to see updates."

