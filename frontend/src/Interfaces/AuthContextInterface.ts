export interface AuthContextInterface{
    authenticated: Boolean;
    setAuthenticated: (value: Boolean) => void;
    role: string;
    setRole: (value: string) => void;
    username: string,
    setUsername: (value: string) => void;
}
