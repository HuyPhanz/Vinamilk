import {
    AuthProvider,
    ProtectRoute,
} from "../../configs/context";

const AuthLayout = ({ children }) => {
    return (
        <AuthProvider>
            <ProtectRoute>{children}</ProtectRoute>
        </AuthProvider>
    );
};

export default AuthLayout;