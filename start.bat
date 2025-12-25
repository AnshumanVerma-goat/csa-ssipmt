@echo off
echo Starting CSA SSIPMT Website...
echo.

echo [1/2] Starting Flask Backend Server...
start cmd /k "cd backend && python app.py"
timeout /t 3 /nobreak >nul

echo [2/2] Starting React Frontend...
start cmd /k "npm run dev"

echo.
echo ========================================
echo Both servers are starting!
echo.
echo Backend API: http://localhost:5000
echo Frontend: http://localhost:5173
echo API Docs: http://localhost:5000/api/v1/docs
echo ========================================
echo.
echo Press any key to exit this window...
pause >nul
