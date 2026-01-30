:: MFM Launcher v0.1
:: from the Monkeys for Monkeys website: [ https://rileyhagel.github.io/mfm ]
:: For any questions, please e-mail me at: contactmonkeysformonkeys+software@gmail.com

@echo off
title MFM Launcher
color e4
cls

set "URL="

echo.
echo 	* * * * * * * * * * * *
echo 	* MONKEYS FOR MONKEYS *
echo 	*       LAUNCHER      *
echo 	* * * * * * * * * * * *
echo.
echo.
echo 	1. MFM Homepage
echo 	2. Banana Blog
echo 	3. Games
echo 	4. Downloads
echo.
choice /c 1234 /n
IF %ERRORLEVEL% EQU 4 goto downloads
IF %ERRORLEVEL% EQU 3 goto downloads

:MFMhomepage

:bananaBlog

:games

:downloads