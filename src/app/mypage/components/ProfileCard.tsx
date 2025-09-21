'use client';

import { useState } from "react";
import Image from "next/image";

export const ProfileCard = () => {
    const [profileImg, setProfileImg] = useState("/images/basic-profile.jpg");

    const handleChangePhoto = () => alert("사진 변경");
    const handleResetPhoto = () => setProfileImg("/images/profile-icon.png");
    const handleEditProfile = () => alert("프로필 변경");
    const handleChangePassword = () => alert("비밀번호 변경");

    return (
        <div className="flex flex-col max-w-[1280px] mx-auto gap-2.5">
            {/* 헤더 */}
            <div className="flex flex-row font-bold p-4 gap-3 bg-[#F7F7FA] rounded-[20px] border border-[#E1E1E4] text-[15px] items-center">
                <div className="bg-white rounded-md p-2 border border-[#E1E1E4]">
                    <Image
                        src="/images/profile-icon.png"
                        alt="프로필 사진"
                        width={24}
                        height={24}
                        className="rounded-[20px] border"
                    />
                </div>
                나의 프로필
            </div>

            {/* 프로필 사진 + 정보 수정 */}
            <div className="flex flex-col p-4 gap-5 bg-[#F7F7FA] rounded-[20px] border border-[#E1E1E4]">
                <div className="flex flex-row h-[220px] gap-5 md:bg-white rounded-[20px] text-[15px] items-center">
                    <div className="size-[220px] relative overflow-hidden rounded-[20px] mx-auto md:mx-0">
                        <Image
                            src={profileImg}
                            alt="프로필 사진"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="hidden md:flex flex-col gap-2.5">
                        <div className="flex flex-row gap-2.5">
                            <button
                                className="bg-[#F5F5F5] rounded-[12px] px-[14px] py-[7px] text-[13px] cursor-pointer"
                                onClick={handleChangePhoto}
                            >
                                프로필 사진 변경하기
                            </button>
                            <button
                                className="bg-[#F5F5F5] rounded-[12px] px-[14px] py-[7px] text-[13px] cursor-pointer"
                                onClick={handleResetPhoto}
                            >
                                프로필 초기화
                            </button>
                        </div>

                        <div className="text-[11px]">
                            <p>최소 250x250 px 권장</p>
                            <p>JPG, JPEG, PNG</p>
                        </div>
                    </div>
                </div>

                {/* 기본 정보 */}
                <div className="flex flex-col px-6 py-4 md:px-[60px] md:py-10 gap-5 bg-white rounded-[20px] justify-center">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-base md:text-xl font-medium">기본 정보</h3>
                        <button
                            className="bg-[#F5F5F5] rounded-[12px] px-[14px] py-[7px] text-[13px] cursor-pointer"
                            onClick={handleEditProfile}
                        >
                            수정
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-[60px] text-[14px] md:text-[15px]">
                        <div className="flex flex-col gap-1.5">
                            <p className="text-[#A1A1A4] text-sm">이메일</p>
                            <p>havruta@naver.com</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-[#A1A1A4] text-sm">닉네임</p>
                            <p>하브루타</p>
                        </div>
                    </div>
                </div>

                {/* 비밀번호 수정 */}
                <div className="flex flex-col px-6 py-4 md:px-[60px] md:py-10 gap-5 bg-white rounded-[20px] text-[15px] justify-center">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-base md:text-xl font-medium">비밀번호 수정</h3>
                        <button
                            className="bg-[#F5F5F5] rounded-[12px] px-[14px] py-[7px] text-[13px] cursor-pointer"
                            onClick={handleChangePassword}
                        >
                            수정
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
