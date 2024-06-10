import "../Style/LoginStyle.css";
import GoogleLogo from "../Asset/Icon/Google.svg";
import FacebookLogo from "../Asset/Icon/Facebook.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <main id="MainLogin">
      <section className="MainLogin">
        <div className="Login">
          <div className="LoginContent">
            <div className="LoginLeft">
              <div className="LoginContainer">
                <div className="LoginContentleft">
                  <div className="HeaderLogoLogin">
                    <h1>Dotwork</h1>
                  </div>
                  <div className="HeadlineLogin">
                    <h5> Login Into Your Account</h5>
                    <p>Welcom Back! Select Method to Log in:</p>
                  </div>
                  <div className="MethodButtonLogin">
                    <button>
                      <img src={GoogleLogo}></img> Google
                    </button>
                    <button>
                      <img src={FacebookLogo}></img> Facebook
                    </button>
                  </div>

                  <div className="FormLoginWithEmail">
                    <div className="LoginWithEmail">
                      <p>Or Continue With Email</p>
                    </div>
                    <form>
                      <div className="FormLoginWithEmail-container">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" placeholder="Email Address" />
                      </div>
                      <div className="FormLoginWithEmail-container">
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" placeholder="Password" />
                      </div>

                      <div className="CheckBoxRememberMe">
                        <label>
                          <input type="checkbox" id="rememberMe"></input>
                          <p> Remember Me</p>
                        </label>
                        <a href="">Forgot Password?</a>
                      </div>
                      <div className="ButtonLogin">
                        <button>Log in</button>
                      </div>
                    </form>
                  </div>
                  <div className="CreateAccout">
                    <p>
                      Dont Have an Accout? <a>Create Accout</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="LoginRight">
              <div className="LoginContainer">
                <div className="LoginContentRight">
                  <h5>Connect With Every Application</h5>
                  <p>Copyright © 2024 Dotwork Inc. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
