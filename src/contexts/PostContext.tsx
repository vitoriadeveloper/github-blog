import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

interface ContextProps {
    children: ReactNode;
}
interface PostData {
    id: number;
    number: number;
    title: string;
    updated_at: string;
    body: string;
    user: {
        login: string;
    };
    comments: number;
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
    fetchUserData: () => void;
    SearchPublications: (query?: string) => void;
    handleGetPosts: (postId: string) => void;
}
const username = import.meta.env.VITE_USERNAME_GITHUB;
const repoName = import.meta.env.VITE_REPO_NAME_GITHUB;
export const PostContext = createContext({} as PostProviderProps);

export function PostProvider({ children }: ContextProps) {
    const [postData, setPostData] = useState<PostData[]>([]);
    const [userData, setUserData] = useState<UserData | null>(null);
    const navigate = useNavigate();
    async function fetchUserData() {
        const response = await api.get(`/users/${username}`);
        setUserData(response.data);
    }

    async function fetchPostData() {
        const response = await api.get(
            `repos/${username}/github-blog/issues`,
            {},
        );
        setPostData(response.data);
    }

    async function SearchPublications(query?: string) {
        const response = await api.get(
            `/search/issues?q=${query}%20repo:${username}/${repoName}`,
            {
                params: {
                    q: query,
                },
            },
        );
        const filteredIssues = response.data.items.filter((issue: PostData) => {
            return issue.user.login === `${username}`;
        });

        setPostData(filteredIssues);
    }

    async function handleGetPosts(postId: string) {
        await api.get(`/repos/${username}/${repoName}/issues/${postId}`);

        navigate(`${postId}`);
    }

    useEffect(() => {
        fetchUserData();
        fetchPostData();
    }, []);

    return (
        <PostContext.Provider
            value={{
                postData,
                fetchPostData,
                userData,
                fetchUserData,
                SearchPublications,
                handleGetPosts,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}
