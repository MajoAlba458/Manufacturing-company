

const ForgotForm = () => {
  return (
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
            There's no problem write your email and we will send instructions to
            reset your password
          </p>
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
            <button onclick="toggleSignupForgot()" type="button" class="btn">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotForm;