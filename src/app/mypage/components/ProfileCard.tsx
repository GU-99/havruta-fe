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
        <div className="flex flex-col max-w-[1280px] mx-auto gap-[10px]">
            <div className="flex flex-row h-[54px] font-bold p-[12px] gap-[20px] bg-[#F7F7FA] 
                rounded-[20px] border-1 border-[#E1E1E4] text-[15px] items-center">
                <div className="bg-white rounded-md border-1 border-[#E1E1E4]">
                    <Image
                        src='/images/profile-icon.png'
                        alt="프로필 사진"
                        width={24}
                        height={24}
                        className="rounded-[20px] border"
                    />
                </div>
                나의 프로필
            </div>

            <div className="flex flex-col h-[656px] p-[12px] gap-[20px] bg-[#F7F7FA] rounded-[20px] border-1 border-[#E1E1E4]">
                {/* 프로필 사진 + 버튼 */}
                <div className="flex flex-row h-[220px] gap-[20px] bg-white
                rounded-[20px] text-[15px] items-center">
                    <div className="size-[220px] relative overflow-hidden rounded-[20px] mx-auto md:mx-0">
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
                                className="bg-[#F5F5F5] rounded-[20px] px-[22px] py-[8px]"
                                onClick={handleChangePhoto}
                            >
                                프로필 사진 변경하기
                            </button>
                            <button
                                className="bg-[#F5F5F5] rounded-[20px] px-[22px] py-[8px]"
                                onClick={handleResetPhoto}
                            >
                                프로필 초기화
                            </button>
                        </div>

                        <div className="text-[14px]">
                            <p>최소 250x250 px 권장</p>
                            <p>JPG, JPEG, PNG</p>
                        </div>
                    </div>
                </div>

                {/* 기본 정보 */}
                <div className="flex flex-col h-[196px] px-[30px] py-[20px] gap-[20px] bg-white
                rounded-[20px] text-[15px] justify-center"

                >
                    <div className="flex flex-row justify-between items-center" >
                        <h3 className="text-[20px] font-bold">기본 정보</h3>
                        <button className="bg-[#F5F5F5] rounded-[16px] px-[10px] py-[4px] text-[16px]"
                            onClick={handleEditProfile}>수정</button>
                    </div>
                    {/* 모바일: 세로 / 데스크탑: 가로 */}
                    <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
                        <div className="flex flex-col gap-[6px]">
                            <p className="text-[#A1A1A4] text-sm">이메일</p>
                            <p>havruta@naver.com</p>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <p className="text-[#A1A1A4] text-sm">닉네임</p>
                            <p>하브루타</p>
                        </div>
                    </div>
                </div>

                {/* 비밀번호 수정 */}
                <div className="flex flex-col h-[122px] px-[30px] py-[20px] gap-[20px] bg-white
                rounded-[20px] text-[15px] justify-center"

                >
                    <div className="flex flex-row justify-between items-center" >
                        <h3 className="text-[20px] font-bold">비밀번호 수정</h3>
                        <button className="bg-[#F5F5F5] rounded-[16px] px-[10px] py-[4px] text-[16px]"
                            onClick={handleChangePassword}>수정</button>
                    </div>

                </div>

            </div>


        </div>
    );
};
