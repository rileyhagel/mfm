:::::::::::::::::::::::::::::::::::::::::::::::
::             Stoopid OS v0.1               ::
:: contactmonkeysformonkeys+twelve@gmail.com ::
:::::::::::::::::::::::::::::::::::::::::::::::

@echo off
color 0e
cls

: Start Screen
echo Stoopid OS version 0.1
echo Loading Files...

: Check Boot Mode
set /P bootmode=<system/config/bootmode.set
IF %bootmode% EQU setup goto setup
IF %bootmode% EQU start goto start


:setup
rem Work on later

:start
echo.
[....................]   0 %

