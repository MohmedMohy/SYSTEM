const TOKEN_KEY = "hr_token";

export const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
};

export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};