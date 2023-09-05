import { ReactNode, useState } from "react";
import { createContext } from "use-context-selector";

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
    setPostData: (data: PostData[]) => void;
    userData: UserData | null;
    setUserData: (data: UserData | null) => void;
}

export const PostContext = createContext({} as PostProviderProps);

export function PostProvider({ children }: ContextProps) {
    const [postData, setPostData] = useState<PostData[]>([]);
    const [userData, setUserData] = useState<UserData | null>(null);
    return (
        <PostContext.Provider
            value={{ postData, setPostData, userData, setUserData }}
        >
            {children}
        </PostContext.Provider>
    );
}
