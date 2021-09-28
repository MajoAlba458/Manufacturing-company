// import LeftContainerLoginForm from "./LoginComponents";
// import HeaderLoginForm from 'LoginComponents';
import LoginImage from 'media/images/login-image-02.png';
import HeaderLoginForm from './HeaderLoginForm';
import LeftContainerLoginForm from './LeftContainerLoginForm';

const LoginForm = () => {
  return (
    <div class="form-container" id="login-container">
      <LeftContainerLoginForm image={LoginImage} />
      <HeaderLoginForm />
      <RightContainerLoginForm />
    </div>
  );
};

const RightContainerLoginForm = () => {
  return (
    <div class="row form-container__right">
      <form action="../index.html" class="d-grid gap-2">
        <h2 class="text-center">Login</h2>
        <div class="input-box">
          <div class="input-box__input">
            <i class="fas fa-envelope"></i>
            <label for="email">Email</label>
            <input type="text" class="email" name="email" required="true" />
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
            <button onclick="toggleLoginSignup()" type="button" class="btn">
              Signup
            </button>
          </div>
          <div class="text-end">
            <button onclick="toggleLoginForgot()" type="button" class="btn">
              Forgot password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;