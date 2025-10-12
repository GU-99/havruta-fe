import { ProfileCard } from "./components/ProfileCard";
import { UserDeckSections } from "./components/UserDeckSections";

// src/app/mypage/layout.tsx
export default function Mypage({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col max-w-screen-xl mx-auto px-6">
            <div className="flex flex-col gap-8">
                <ProfileCard />
                <UserDeckSections />
            </div>
        </div>
    );
}
