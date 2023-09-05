import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../api";

interface ContextProps {
    children: ReactNode;
}
interface PostData {
    number: number;
    title: string;
    updated_at: string;
    body: string;
}

interface UserData {
    avatar_url: string;
    bio: string;
    followers: number;
    html_url: string;
    name: string;
    login: string;
}

interface PostProviderProps {
    postData: PostData[];
    fetchPostData: (query?: string) => void;
    userData: UserData | null;
    fetchUserData: (data: UserData | null) => void;
}
const username = import.meta.env.VITE_USERNAME_GITHUB;
export const PostContext = createContext({} as PostProviderProps);

export function PostProvider({ children }: ContextProps) {
    const [postData, setPostData] = useState<PostData[]>([]);
    const [userData, setUserData] = useState<UserData | null>(null);

    async function fetchUserData() {
        const response = await api.get(`/users/${username}`);
        setUserData(response.data);
    }

    async function fetchPostData(query?: string) {
        const response = await api.get(`repos/${username}/github-blog/issues`, {
            params: {
                q: query,
            },
        });
        setPostData(response.data);
    }

    useEffect(() => {
        fetchUserData();
        fetchPostData();
    }, []);

    return (
        <PostContext.Provider
            value={{ postData, fetchPostData, userData, fetchUserData }}
        >
            {children}
        </PostContext.Provider>
    );
}
