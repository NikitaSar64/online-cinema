import { useRouter, redirect } from "next/navigation";
import { useAuth } from "./useAuth"
import { useEffect } from "react";

export const useAuthRedirect = () => {
    const {user} = useAuth();

    const {push} = useRouter();

    useEffect(() => {
        if(user){
            push(String(redirect) || '/')
        }
    }, [user, push])
}