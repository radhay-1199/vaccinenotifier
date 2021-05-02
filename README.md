# VaccineNotifier
VaccineNotifier checks the cowin portal periodically to find vaccination slots available in your pin code and for your age. If slot found in next 10 days it will send you email for slots and exit.


<font size="6"> Steps to run the script: </font> 

Step 1) Enable and Set Application Password on your gmail with steps given here:
https://support.google.com/accounts/answer/185833?hl=en
\
Step 2) Enter the details in the file .env, present in the same folder
\
Step 3) Check if npm installed. (npm required)

* scripts to run process
\
=>For Mac: run script run_mac.sh or On your terminal run: npm i && pm2 start vaccineNotifier.js
\
=>For Windows: run batch file run_win.bat or On your cmd run: npm i && pm2 start vaccineNotifier.js

* scripts to stop the process:
\
=>For Mac: run stop.sh or On your terminal run: pm2 stop vaccineNotifier.js && pm2 delete vaccineNotifier.js
\
=>For Windows: run stop.bat or On your cmd run: pm2 stop vaccineNotifier.js && pm2 delete vaccineNotifier.js
\
\
##############################################################################################
<font size="6"> Main Thread: https://github.com/kartikey54/VaccineAvailabilityNotifier </font>
\
\
Upgrades & Fixes:
* option to add multiple pincodes
* pm2 in-app support to close the daemon if slot found
* click to run script files
* FIX: install pm2 globally (required)
* FIX: error in object parsing for email body
