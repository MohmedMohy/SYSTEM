"use client";

import { useState } from "react";
import { authService } from "../../services/auth.service";
import { setToken } from "../../utils/token";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await authService.login({
                email,
                password,
            });

            setToken(data.token);

            // redirect to dashboard
            window.location.href = "/jops";
        } catch (err: any) {
            setError(err?.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "120px auto" }}>
            <h2>HR System Login</h2>

            <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={onSubmit} disabled={loading}>
                {loading ? "Loading..." : "Login"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}