import { useDispatch } from "react-redux";
import { LOGIN } from "../../store/action-types";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Forgot } from "../forgot/Forgot";

export const Login = ({ changeRoute }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgot, setforgot] = useState("login");

  const changeForgot = () => {
    forgot === "login" ? setforgot("forgot") : setforgot("login");
  };

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const onLoginHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("kirdi"))
      .catch(() => alert("Email yoki parol noto'g'ri"));
  };

  const forgotHandler = () => {
    navigate("/forgot");
  };

  return (
    <div>
      {forgot == "login" && (
        <div className="flex container">
          <div className="px-[140px] pt-[90px] w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXBgjgnt3VmmEXmAH8BP7NO-YR4Ppk171b_ovya-qCw&s"
              alt="logo"
              className="mb-[55px] w-[50px]"
            />
            <h2 className="font-semibold leading-[38.73px] text-[32px] mb-[10px]">
              Hisobingizga kiring
            </h2>
            <p className="leading-[28px] mb-[45px] w-[440px]">
              lajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu
              cita-citata sejak dalam embrio!Be
            </p>
            <div>
              <div className="flex flex-col mb-[30px]">
                <label
                  className="font-semibold leading-[19.36px] mb-[10px]"
                  htmlFor="emailL"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="emailL"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-[23px] pl-[40px] bg-slate-100 rounded-[8px]"
                />
              </div>
              <div className="flex flex-col mb-[30px]">
                <div className="flex justify-between mb-[10px]">
                  <label
                    className="font-semibold leading-[19.36px]"
                    htmlFor="passL"
                  >
                    Parol
                  </label>
                  <span
                    className="font-semibold leading-[19.36px] cursor-pointer text-[#4F46E5]"
                    onClick={changeForgot}
                  >
                    Parolni unutdingizmi?
                  </span>
                </div>
                <input
                  type="password"
                  id="passL"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-[23px] pl-[40px] bg-slate-100 rounded-[8px]"
                />
              </div>
              <div className="flex gap-[15px] items-center mb-[30px]">
                <input
                  type="checkbox"
                  id="checkL"
                  className="w-[25px] h-[25px] outline-inherit bg-slate-100"
                />
                <label
                  className="font-semibold leading-[19.36px]"
                  htmlFor="checkL"
                >
                  Eslab qol
                </label>
              </div>
              <button
                onClick={onLoginHandler}
                className="w-full text-center font-semibold leading-[19.36px] cursor-pointer text-[white] bg-[#4F46E5] p-6 rounded-[8px] mb-14"
              >
                Kirish
              </button>
            </div>
            <p className="text-center font-semibold leading-[19.36px] text-[#4B5563] mb-[100px]">
              Hisobingiz yo'qmi?{" "}
              <span
                className="text-[#4F46E5] cursor-pointer"
                onClick={changeRoute}
              >
                Ro'yxatdan o'ting!
              </span>
            </p>
          </div>
          <div className="bg-[#3730A3] py-[180px] w-1/2">
            <img
              src="https://i.ibb.co/MPV40DJ/login.png"
              alt="login"
              className="mb-[67px]"
            />
            <span className="font-semibold leading-[28px] text-[14px] text-[rgba(255,255,255,0.5)] tracking-widest ml-[101px] mb-[10px]">
              NAMANYAJUGABELAJAR.IO
            </span>
            <p className="text-[28px] leading-[42px] w-[537px] ml-[101px] text-[white]">
              Belajar secara online semakin mudah – tetep belajar walaupun pake
              kuota dari Kemendikbud hehe~
            </p>
          </div>
        </div>
      )}
      {forgot == "forgot" && <Forgot changeForgot={changeForgot} />}
    </div>
  );
};
