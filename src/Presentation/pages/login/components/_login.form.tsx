import { ROUTE_CONSTANTS } from "@/Core/router/routes";
import { Loader } from "@/Presentation/common/shared";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Container,
  Input,
  InputWrapper,
  Label,
  Typography,
  ErrorContainer,
} from "@/Presentation/common/styled-components";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export const LoginForm = () => {
  const { error, status, merchantLoginAsync } = useLogin();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex h-full items-center justify-center">
      <Container $size="small">
        <div className="flex flex-col h-full space-y-4 justify-center">
          <div>
            <Typography $size="subtitle">Merchant Login</Typography>
            <Typography>Enter Email & Password to continue</Typography>
          </div>
          <Form onSubmit={handleSubmit(merchantLoginAsync)} noValidate>
            {error && <ErrorContainer>{error}</ErrorContainer>}
            <InputWrapper>
              <Label>Email</Label>
              <Input
                placeholder="john@doe.com"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              <Typography $color="danger">
                {formState.errors.email?.message}
              </Typography>
            </InputWrapper>
            <InputWrapper>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="********"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
              <Typography $color="danger">
                {formState.errors.password?.message}
              </Typography>
            </InputWrapper>
            <div className="flex justify-end">
              <div>
                <Link to={ROUTE_CONSTANTS.ROOT}>
                  <Typography $size="small" className="font-bold">
                    Forgot Password?
                  </Typography>
                </Link>
              </div>
            </div>
            <Button
              $type="primary"
              disabled={status == "loading"}
              type="submit"
            >
              {status == "loading" ? <Loader /> : "Login"}
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};
