import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/authentication/selector";

interface AuthGuardProps {
    fallback: ReactNode;
    children?: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = (props) => {
    const { fallback, children } = props;
    const isLoggedIn = useSelector(getIsLoggedIn);
    return <>{!isLoggedIn ? fallback : children}</>;
};

export default AuthGuard;
