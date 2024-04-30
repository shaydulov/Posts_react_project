import React from "react";

export const Reset = () => {
  return (
    <div className="flex font-sans hover:font-serif">
      <div className="px-[140px] pt-[90px] w-1/2">
        <img src="public/Logo.svg" alt="logo" className="mb-[55px]" />
        <h2 className="font-semibold leading-[38.73px] text-[32px] mb-[10px]">
          Atur ulang kata sandi
        </h2>
        <p className="leading-[28px] mb-[45px] w-[440px]">
          Jangan pake kata sandi yang susah-susah makannya, ngerepotin mulu jadi
          orang.
        </p>
        <div>
          <div className="flex flex-col mb-[30px]">
            <label
              className="font-semibold leading-[19.36px] mb-[10px]"
              htmlFor="passR"
            >
              Kata Sandi Baru
            </label>
            <input
              type="password"
              id="passR"
              placeholder="new password"
              className="py-[23px] pl-[40px] bg-slate-100 rounded-[8px]"
            />
          </div>
          <div className="flex flex-col mb-[30px]">
            <label
              className="font-semibold leading-[19.36px] mb-[10px]"
              htmlFor="passR2"
            >
              Konfirmasi Kata Sandi
            </label>
            <input
              type="password"
              id="passR2"
              placeholder="confirm password"
              className="py-[23px] pl-[40px] bg-slate-100 rounded-[8px]"
            />
          </div>
          <button className="w-full text-center font-semibold leading-[19.36px] cursor-pointer text-[white] bg-[#4F46E5] p-6 rounded-[8px] mb-14">
            Atur Ulang
          </button>
        </div>
      </div>
      <div className="bg-[#3730A3] py-[180px] w-1/2">
        <img src="public/reset.png" alt="reset" className="mb-[67px]" />
        <span className="font-semibold leading-[28px] text-[14px] text-[rgba(255,255,255,0.5)] tracking-widest ml-[101px] mb-[10px]">
          NAMANYAJUGABELAJAR.IO
        </span>
        <p className="text-[28px] leading-[42px] w-[500px] ml-[101px] text-[white]">
          Biar nanti nggak lupa lagi sama kata sandinya, disimpen di password
          manager ya, bang!
        </p>
      </div>
    </div>
  );
};
