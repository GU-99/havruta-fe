'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex items-center justify-between w-full max-w-6xl mx-auto px-6 h-14">
            {/* 왼쪽 로고 & 햄버거 버튼 */}
            <div className="flex items-center">
                {/* 로고: md 이상에서 보임 */}
                <Link href="/" className="hidden md:block text-lg font-bold">
                    HAVRUTA
                </Link>

                {/* 햄버거 버튼: 모바일에서만 보임 */}
                <button
                    className="block md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="메뉴 열기"
                >
                    ☰
                </button>
            </div>

            {/* 데스크탑 네비게이션 */}
            <nav className="hidden md:flex gap-12">
                <Link href="/">홈</Link>
                <Link href="/">내 덱</Link>
                <Link href="/">공유 덱</Link>
                <Link href="/">학습하기</Link>
                <Link href="/">대시보드</Link>
            </nav>

            {/* 오른쪽 프로필 */}
            <Link href="/">
                <Image
                    src="/images/profile-icon.png"
                    alt="프로필"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
            </Link>

            {/* 모바일/태블릿 슬라이드 메뉴 */}
            {isOpen && (
                <div className="fixed top-0 left-0 h-full w-4/5 bg-[#1C1C1F] p-6 z-50 md:hidden flex flex-col justify-between">
                    {/* 상단 영역 */}
                    <div>
                        <div className="flex justify-between items-center text-white mt-8">
                            <Link href="/" className="text-lg font-bold">
                                HAVRUTA
                            </Link>
                            <button onClick={() => setIsOpen(false)}>
                                <div className="flex items-center justify-center rounded-full bg-[#2A2A2D] w-8 h-8">
                                    <Image
                                        src="/images/left-arrow.png"
                                        alt="닫기"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </button>
                        </div>

                        {/* 메뉴 부분 */}
                        <nav className="flex flex-col gap-6 text-white text-sm mt-20">
                            <Link href="/" onClick={() => setIsOpen(false)}>홈</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>내 덱</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>공유 덱</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>학습하기</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>대시보드</Link>
                        </nav>
                    </div>

                    {/* 하단 프로필 */}
                    <div className="flex items-center gap-3 text-white mb-6">
                        <Link href="/">
                            <Image
                                src="/images/profile-icon-white.png"
                                alt="프로필"
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </Link>
                        <span>마이페이지</span>
                    </div>
                </div>
            )}
        </header>
    );
};