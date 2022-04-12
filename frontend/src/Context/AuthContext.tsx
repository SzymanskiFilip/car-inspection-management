import {createContext} from "react";
import { AuthContextInterface } from "../Interfaces/AuthContextInterface";


export const AuthContext = createContext<AuthContextInterface | null>(null);