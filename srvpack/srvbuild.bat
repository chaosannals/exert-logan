@echo off

set JAVA_HOME=D:\Java\jdk1.8.0_251
set LOGON_SRV_DIR=%~dp0\..\logan\Logan\Server
set LOGON_WAR_PATH=%LOGON_SRV_DIR%\target\logan-web-beta-1.0-SNAPSHOT.war

cd %LOGON_SRV_DIR%

call mvn package

copy %LOGON_WAR_PATH% %~dp0\webapps\ROOT.war
call mvn clean
