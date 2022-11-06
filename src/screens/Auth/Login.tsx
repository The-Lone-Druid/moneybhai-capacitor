import React from "react";
import { BasicHeader } from "../../components/exports";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* header */}
      <BasicHeader
        title="Login"
        navigate={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};

export default Login;
