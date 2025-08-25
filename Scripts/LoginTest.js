function Test_Login_ValidCredentials() {
  var app = TestedApps.YourApp;
  app.Run();

  var loginWindow = Aliases.YourApp.Login;
  loginWindow.Username.SetText("testuser");
  loginWindow.Password.SetText("testpass");
  loginWindow.LoginButton.ClickButton();

  var dashboard = Aliases.YourApp.Dashboard;
  aqObject.CheckProperty(dashboard.WelcomeMessage, "contentText", cmpEqual, "Welcome, testuser");
}

