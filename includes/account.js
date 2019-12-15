// для инклюдов в каждую страницу, чтобы не повторять код по 20 раз
document.write(`
  <div id="form_area">
    <div id="login_block">
      <img src="../images/smile.svg" id="image_status">
      <form method="post" name="login" id="login_form">
        <p style="height: 1.5em;">please be patient I have autism</p>
        <div style="height: 250px;">
          <input placeholder="Username" name="username" type="text" autocomplete="off" autofocus>
          <input placeholder="Password" name="password" type="password" autocomplete="off">
        </div>
        <button type="submit">Login</button>
        <a onclick="showRegister()">Register</a>
      </form>
    </div>
    <div id="register_block">
      <img src="../images/smile.svg" id="image_status">
      <form method="post" name="register" id="register_form">
        <p style="height: 1.5em;">please be patient I have autism</p>
        <div style="height: 250px;">
          <input placeholder="Username" name="username" type="text" autocomplete="off" autofocus>
          <input placeholder="Password" name="password" type="password" autocomplete="off">
          <input placeholder="Confirm Password" name="password_confirm" type="password" autocomplete="off">
          <input placeholder="E-Mail Address" name="email" type="text" autocomplete="off">
        </div>
        <button type="submit">Register</button>
        <a onclick="showLogin()">Login</a>
      </form>
    </div>
  </div>
  <div id="form_back" onclick="hideAll();"></div>
`)
