'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative top-10 flex items-center justify-between w-full max-w-screen-xl mx-auto px-6 h-11.5">
            {/* 왼쪽 로고 & 햄버거 버튼 */}
            <div className="flex items-center">
                {/* 로고: md 이상에서 보임 */}
                <Link href="/" className="hidden md:block font-bold text-sm">
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
            <div className="hidden md:flex w-157.5 h-10.5 p-2.5 text-sm">
                <nav className="flex items-center h-5.5 gap-15 mx-auto">
                    <Link href="/">홈</Link>
                    <Link href="/">내 덱</Link>
                    <Link href="/">공유 덱</Link>
                    <Link href="/">학습하기</Link>
                    <Link href="/">대시보드</Link>
                </nav>
            </div>


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
                <div className="fixed top-0 left-0 h-full w-84 bg-[#1C1C1F] p-6 z-50 md:hidden flex flex-col justify-between">
                    {/* 상단 영역 */}
                    <div>
                        <div className="flex justify-between items-center text-white mt-12.5 mb-18.5">
                            <Link href="/" className="text-sm font-bold">
                                HAVRUTA
                            </Link>
                            <button onClick={() => setIsOpen(false)}>
                                <div className="flex items-center justify-center rounded-full bg-[#2A2A2D] w-8 h-8">
                                    <Image
                                        src="/images/left-arrow.png"
                                        alt="닫기"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </button>
                        </div>

                        {/* 메뉴 부분 */}
                        <nav className="flex flex-col gap-6 text-white text-[12px] mt-20">
                            <Link href="/" onClick={() => setIsOpen(false)}>홈</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>내 덱</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>공유 덱</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>학습하기</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>대시보드</Link>
                        </nav>
                    </div>

                    {/* 하단 프로필 */}
                    <div className="flex items-center gap-2.5 text-white mb-12.5">
                        <Link href="/">
                            <Image
                                src="/images/profile-icon-white.png"
                                alt="프로필"
                                width={16}
                                height={16}
                                className="cursor-pointer"
                            />
                        </Link>
                        <span className="text-[12px]">마이페이지</span>
                    </div>
                </div>
            )}
        </header>
    );
};