:: MFM Launcher v0.1
:: from the Monkeys for Monkeys website: [ https://rileyhagel.github.io/mfm ]
:: For any questions, please e-mail me at: contactmonkeysformonkeys+software@gmail.com

@echo off
title MFM Launcher
color e4
cls

set "baseURL=https://rileyhagel.github.io/mfm"
set "URL="

echo.
echo 	* * * * * * * * * * * *
echo 	* MONKEYS FOR MONKEYS *
echo 	*       LAUNCHER      *
echo 	* * * * * * * * * * * *
echo.
echo.
echo 	1. MFM Homepage
echo 	2. Twelve Forum
echo 	3. Games
echo 	4. Downloads
echo.
choice /c 1234 /n
IF %ERRORLEVEL% EQU 4 call downloads
IF %ERRORLEVEL% EQU 3 call games
IF %ERRORLEVEL% EQU 2 call twelveforum
IF %ERRORLEVEL% EQU 1 call homepage

set finalURL=%baseURL%/%URL%
start "Loading Webpage..." %finalURL%

:homepage
set "URL="
goto :EOF

:twelveforum
set "URL=twelve/forum.htm"
goto :EOF

:games
set "URL=games.htm"
goto :EOF

:downloads
set "URL=downloads"
goto :EOF
