@echo off
where pm2 > nul
if %ERRORLEVEL% GEQ 1 (npm i pm2 -g) else (echo pm2 already installed)
npm i && pm2 start vaccineNotifier.js