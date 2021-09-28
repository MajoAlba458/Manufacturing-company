

const SignupForm = () => {
  return (
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
              <button onclick="toggleLoginSignup()" type="button" class="btn">
                Login
              </button>
            </div>
            <div class="text-end">
              <button onclick="toggleSignupForgot()" type="button" class="btn">
                Forgot password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;