import { Button, Typography } from "@/Presentation/common/styled-components";
import { Fragment } from "react";
import { LoginForm } from "./components";

const Login = () => {
  return (
    <Fragment>
      <LoginForm />
      <div className="w-full flex justify-center absolute bottom-5">
        <div>
          <Button $type="link">
            <Typography>
              Don't have an account yet?
              <span className="text-primary-100 px-1">Create Account</span>
            </Typography>
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
