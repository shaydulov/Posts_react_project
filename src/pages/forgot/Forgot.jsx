import { useState } from "react";
import "../../firebase/config";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const Forgot = ({ changeForgot }) => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const sendVerification = () => {
    sendPasswordResetEmail(auth, email)
    .then(()=> alert("Yangi parol qo'yishingiz uchun linkni pochtangizga yubordik"))
    .catch(()=> alert("Bunday email ro'yxatdan o'tmagan"))
  };
  return (
    <div className="flex font-sans hover:font-serif">
      <div className="px-[140px] pt-[90px] w-1/2">
        <img
          width={"50px"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXBgjgnt3VmmEXmAH8BP7NO-YR4Ppk171b_ovya-qCw&s"
          alt="logo"
          className="mb-[55px]"
        />
        <h2 className="font-semibold leading-[38.73px] text-[32px] mb-[10px]">
          Parolni unutdingizmi?
        </h2>
        <p className="leading-[28px] mb-[45px] w-[440px]">
          Oldin ro'yxatdan o'tgan elektron pochta manzilingizni kiriting, keyin
          sizga elektron pochta xabari yuboriladi.
        </p>
        <div>
          <div className="flex flex-col mb-[30px]">
            <label
              className="font-semibold leading-[19.36px] mb-[10px]"
              htmlFor="emailF"
            >
              Email
            </label>
            <input
              type="email"
              id="emailF"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-[23px] pl-[40px] bg-slate-100 rounded-[8px]"
            />
          </div>
          <button
            onClick={sendVerification}
            className="w-full text-center font-semibold leading-[19.36px] cursor-pointer text-[white] bg-[#4F46E5] p-6 rounded-[8px] mb-14"
          >
            Yuborish!
          </button>
        </div>
        <p className="text-center font-semibold leading-[19.36px] text-[#4B5563] mb-[100px]">
          Xo'sh, parolni esladingizmi?{" "}
          <span
            className="text-[#4F46E5] cursor-pointer"
            onClick={changeForgot}
          >
            Login!
          </span>
        </p>
      </div>
      <div className="bg-[#3730A3] py-[180px] w-1/2">
        <img
          src="https://i.ibb.co/3hcCsD5/reset.png"
          alt="forget"
          className="mb-[67px]"
        />
        <span className="font-semibold leading-[28px] text-[14px] text-[rgba(255,255,255,0.5)] tracking-widest ml-[101px] mb-[10px]">
          NAMANYAJUGABELAJAR.IO
        </span>
        <p className="text-[28px] leading-[42px] w-[465px] ml-[101px] text-[white]">
          Nggak apa-apa lupa sama kata sandi, asalkan kita jangan sampe lupa
          sama jasa para pahlawan.
        </p>
      </div>
    </div>
  );
};
