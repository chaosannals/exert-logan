@echo off
set JAVA_HOME=D:\Java\jdk1.8.0_251
set LOGON_SRV_DIR=%~dp0\..\logan\Logan\Server
cd %LOGON_SRV_DIR%

call mvn clean
git checkout .
