import "assets/css/login.css";
import LoginForm from 'components/login/LoginForm';
import SignupForm from 'components/login/SignupForm';
import ForgotForm from 'components/login/ForgotForm';

// Script para el cambio entre formularios
{
  /* <script src="../assets/js/main.js"></script> */
}

function Login() {
  return (
    <div className="Login">
      <section id="login" class="form">
        <LoginForm />
        <SignupForm />
        <ForgotForm />
      </section>
    </div>
  );
}

export default Login;