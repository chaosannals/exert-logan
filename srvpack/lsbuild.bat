@echo off

set LOGON_SRV_DIR=%~dp0\..\logan\Logan\LoganSite

npm i
npm run build
