import 'styles/css/login.css'

function Login() {
  return (
    <div className="Login">
      <section id="login" class="form">
        <div class="form-container" id="login-container">
          <div class="row form-container__left">
            <img src="../images/login-image-02.png" alt="" />
          </div>
          <div class="login-header">
            <img src="../images/recycle-icon-01.png" alt="login image" />
            <h1>Reok</h1>
          </div>
          <div class="row form-container__right">
            <form action="../index.html" class="d-grid gap-2">
              <h2 class="text-center">Login</h2>
              <div class="input-box">
                <div class="input-box__input">
                  <i class="fas fa-envelope"></i>
                  <label for="email">Email</label>
                  <input
                    type="text"
                    class="email"
                    name="email"
                    required="true"
                  />
                </div>
              </div>
              <input
                type="submit"
                class="btn btn-primary btn-submit"
                value="Login"
                id="input-login"
              />
              <div class="backup-links">
                <div class="text-end">
                  <button
                    onclick="toggleLoginSignup()"
                    type="button"
                    class="btn"
                  >
                    Signup
                  </button>
                </div>
                <div class="text-end">
                  <button
                    onclick="toggleLoginForgot()"
                    type="button"
                    class="btn"
                  >
                    Forgot password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="form-container" id="signup-container">
          <div class="row form-container__left">
            <img src="../images/signup-01.png" alt="" />
          </div>
          <div class="login-header">
            <img src="../images/recycle-icon-01.png" alt="signup image" />
            <h1>Reok</h1>
          </div>
          <div class="row form-container__right">
            <form class="d-grid gap-2">
              <h2 class="text-center">Signup</h2>
              <div class="input-box">
                <div class="input-box__input">
                  <i class="fas fa-signature"></i>
                  <label for="firstname">First name</label>
                  <input
                    type="text"
                    class="firstname"
                    name="First name"
                    required="true"
                  />
                </div>
              </div>
              <div class="input-box">
                <div>
                  <i class="fas fa-file-signature"></i>
                  <label for="lastname">Last name</label>
                  <input
                    type="text"
                    class="lastname"
                    name="Lastname"
                    required="true"
                  />
                </div>
              </div>
              <div class="input-box">
                <div class="input-box__input">
                  <i class="fas fa-user"></i>
                  <label for="username">Username</label>
                  <input
                    type="text"
                    class="username"
                    name="username"
                    required="true"
                  />
                </div>
              </div>
              <div class="input-box">
                <div class="input-box__input">
                  <i class="fas fa-envelope"></i>
                  <label for="mail">Email</label>
                  <input type="text" class="mail" name="mail" required="true" />
                </div>
              </div>
              <div class="input-box">
                <div class="input-box__input">
                  <i class="fas fa-lock"></i>
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="password"
                    name="password"
                    required="true"
                  />
                </div>
              </div>
              <div class="input-box">
                <div class="input-box__input">
                  <i class="fas fa-scroll"></i>
                  <label for="rol">Rol</label>
                  <input type="text" class="rol" name="rol" required="true" />
                </div>
              </div>
              <input
                type="submit"
                class="btn btn-primary btn-submit"
                value="Sign up"
              />
              <div class="backup-links">
                <div class="text-end">
                  <button
                    onclick="toggleLoginSignup()"
                    type="button"
                    class="btn"
                  >
                    Login
                  </button>
                </div>
                <div class="text-end">
                  <button
                    onclick="toggleSignupForgot()"
                    type="button"
                    class="btn"
                  >
                    Forgot password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="form-container" id="forgot-container">
          <div class="row form-container__left">
            <img src="../images/forgot-01.png" alt="" />
          </div>
          <div class="login-header">
            <img src="../images/recycle-icon-01.png" alt="signup image" />
            <h1>Reok</h1>
          </div>
          <div class="row form-container__right">
            <form class="d-grid gap-2">
              <h3>Did you forget your password?</h3>
              <p>
                There's no problem write your email and we will send
                instructions to reset your password
              </p>
              <div class="input-box">
                <div class="input-box__input">
                  <i class="fas fa-envelope"></i>
                  <label for="email">Email</label>
                  <input
                    type="text"
                    class="email"
                    name="email"
                    required="true"
                  />
                </div>
              </div>
              <input
                type="submit"
                class="btn btn-primary btn-submit"
                value="Submit"
              />
            </form>
            <div class="backup-links">
              <div class="text-end">
                <button onclick="toggleLoginForgot()" type="button" class="btn">
                  Login
                </button>
              </div>
              <div class="text-end">
                <button
                  onclick="toggleSignupForgot()"
                  type="button"
                  class="btn"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
        <script src="../assets/js/main.js"></script>
    </div>
  );
}

export default Login;