# 🔹 TestComplete-JavaScript-Automation

SmartBear TestComplete automation using JavaScript for UI testing.

---

## 🧪 Technologies

- JavaScript (TestComplete scripting)
- SmartBear TestComplete
- GitHub Actions (self-hosted only)

---

## 📁 Folder Structure


Scripts/ → JavaScript test cases
.github/workflows/ → Placeholder GitHub Actions file




---

## 📄 Sample Test Script

```javascript
function Test_Login_ValidCredentials() {
  var app = TestedApps.YourApp;
  app.Run();
  // ...
}



Use Name Mapping in TestComplete for alias references like Aliases.YourApp.



---

## 🔁 CI/CD Integration

CI/CD for TestComplete requires:

  A Windows self-hosted GitHub runner
  A valid TestComplete license
  Test project file (.pjs)



If you're using Azure DevOps or Jenkins, integration is also supported there.


---

## 📦 Local Execution

  1. Open YourProject.pjs in TestComplete
  2. Run Test_Login_ValidCredentials manually or via CLI:


    "C:\Program Files (x86)\SmartBear\TestComplete 15\bin\TestComplete.exe" ^
    "Tests\YourProject.pjs" /r /e /project:YourProject /test:Test_Login_ValidCredentials



---

## 🔐 License Note
TestComplete is a commercial tool. This project assumes you already have:
A licensed installation
Proper object mapping in place






---

## 📄 `.gitignore`

```gitignore
# Windows system files
Thumbs.db
Desktop.ini

# Logs
*.log

# TestComplete backup and temp files
*.tcTst
*.bak
*.tmp

# IDE or editor configs
.vscode/
.idea/
.DS_Store

