import { ProfileCard } from "./components/ProfileCard";

// src/app/mypage/layout.tsx
export default function Mypage({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <main className="flex-1 p-6">
                <ProfileCard />
            </main>
        </div>
    );
}
