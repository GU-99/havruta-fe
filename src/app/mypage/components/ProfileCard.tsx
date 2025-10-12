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
        <div className="flex flex-col gap-[10px]">
            {/* 헤더 */}
            <div className="flex flex-row h-[64px] md:h-[80px] max-w-screen-xl p-[8px] md:p-[16px] gap-[20px] bg-[#F7F7FA] rounded-[20px] border border-[#E1E1E4] items-center">
                <div className="flex bg-white w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-[16px] p-[8px] border border-[#E1E1E4] items-center justify-center">
                    <Image
                        src="/images/profile-icon.png"
                        alt="프로필 사진"
                        width={24}
                        height={24}
                        className="rounded-[20px] border"
                    />
                </div>
                <span className="font-bold text-[14px] md:text-[18px]">나의 프로필</span>
            </div>

            {/* 프로필 사진 + 정보 수정 */}
            <div className="flex flex-col p-[16px] gap-[20px] bg-[#F7F7FA] rounded-[20px] border border-[#E1E1E4]">
                <div className="flex flex-row h-[220px] gap-[28px] md:bg-white rounded-[20px] items-center">
                    <div className="w-[220px] h-[220px] relative overflow-hidden rounded-[20px] mx-auto md:mx-0">
                        <Image
                            src={profileImg}
                            alt="프로필 사진"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="hidden md:flex flex-col gap-[10px]">
                        <div className="flex flex-row gap-[10px]">
                            <button
                                className="bg-[#F5F5F5] rounded-[16px] py-[8px] px-[22px] text-[14px] cursor-pointer"
                                onClick={handleChangePhoto}
                            >
                                프로필 사진 변경하기
                            </button>
                            <button
                                className="bg-[#F5F5F5] rounded-[16px] py-[8px] px-[22px] text-[14px] cursor-pointer"
                                onClick={handleResetPhoto}
                            >
                                프로필 초기화
                            </button>
                        </div>

                        <div className="text-[12px] text-[#A0A0A3]">
                            <p>최소 250x250 px 권장</p>
                            <p>JPG, JPEG, PNG</p>
                        </div>
                    </div>
                </div>

                {/* 기본 정보 */}
                <div className="flex flex-col md:h-[168px] px-[24px] py-[16px] md:px-[60px] md:py-[40px] gap-[12px] bg-white rounded-[20px] justify-center">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-[16px] md:text-[18px] font-medium">기본 정보</h3>
                        <button
                            className="bg-[#F5F5F5] rounded-[12px] px-[16px] py-[6px] md:px-[20px] md:py-[8px] md:text-[14px] text-[12px] cursor-pointer"
                            onClick={handleEditProfile}
                        >
                            수정
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[20px] md:gap-[60px] text-[12px] md:text-[14px]">
                        <div className="flex flex-col gap-[6px]">
                            <p className="text-[#A1A1A4]">이메일</p>
                            <p>havruta@naver.com</p>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <p className="text-[#A1A1A4]">닉네임</p>
                            <p>하브루타</p>
                        </div>
                    </div>
                </div>

                {/* 비밀번호 수정 */}
                <div className="flex flex-col px-[24px] py-[16px] md:px-[60px] md:py-[40px] gap-[12px] bg-white rounded-[20px] justify-center">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-[16px] md:text-[18px] font-medium">비밀번호 수정</h3>
                        <button
                            className="bg-[#F5F5F5] rounded-[12px] px-[16px] py-[6px] md:px-[20px] md:py-[8px] md:text-[14px] text-[12px] cursor-pointer"
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
