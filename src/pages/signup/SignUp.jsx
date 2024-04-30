import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import "../../firebase/config";
import { useState } from "react";

export const SignUp = ({ changeRoute }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState(""); 

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const auth = getAuth();

  const onSignUpHandler = () => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayName
        })
      })
      .then(() => alert("Ro'yxatdan o'tdingiz!"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex container">
      <div className="px-[140px] pt-[90px] w-1/2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXBgjgnt3VmmEXmAH8BP7NO-YR4Ppk171b_ovya-qCw&s"
          alt="logo"
          className="mb-[55px] w-[50px]"
        />
        <h2 className="font-semibold leading-[38.73px] text-[32px] mb-[20px]">
          Yangi hisob yarating
        </h2>
        <p className="font-semibold leading-[19.36px] text-[#4B5563] mb-[45px]">
          Hisobingiz mavjudmi?{" "}
          <span className="text-[#4F46E5] cursor-pointer" onClick={changeRoute}>
            hisobingizga kiring!
          </span>
        </p>
        <div>
          <div>
            <label className="font-semibold leading-[19.36px]" htmlFor="name">
              To'liq ism
            </label>

            <div className="flex gap-[10px] mt-[10px] mb-[30px]">
              <input
                type="text"
                id="name"
                placeholder="name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="py-[23px] pl-[40px] bg-slate-100 rounded-[8px] w-1/2"
              />
              <input
                type="text"
                placeholder="last name"
                className="py-[23px] pl-[40px] bg-slate-100 rounded-[8px] w-1/2"
              />
            </div>
          </div>
          <div className="flex flex-col mb-[30px]">
            <label
              className="font-semibold leading-[19.36px] mb-[10px]"
              htmlFor="emailS"
            >
              Email
            </label>
            <input
              type="text"
              id="emailS"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-[23px] pl-[40px] bg-slate-100 rounded-[8px]"
            />
          </div>
          <div className="flex flex-col mb-[30px]">
            <label
              className="font-semibold leading-[19.36px] mb-[10px]"
              htmlFor="passS"
            >
              Parol
            </label>
            <input
              type="password"
              id="passS"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-[23px] pl-[40px] bg-slate-100 rounded-[8px]"
            />
          </div>
          <p className="mb-[30px] text-[14px] text-[#4B5563] leading-[24px] w-[400px]">
            Dengan mendaftar berarti kamu setuju dengan Terms of Service dan
            Privacy Policy dari Namanyajugabelajar.io
          </p>
          <button
            className="w-full text-center font-semibold leading-[19.36px] cursor-pointer text-[white] bg-[#4F46E5] p-6 rounded-[8px] mb-14"
            onClick={onSignUpHandler}
          >
            Ro'yxatdan o'tish
          </button>
        </div>
      </div>
      <div className="bg-[#3730A3] py-[180px] w-1/2">
        <div className="relative mb-[67px]">
          <img src="https://i.ibb.co/Qj4dvM1/register.png" alt="login" />
          <img
            src="https://i.ibb.co/N2BXmyw/user.png"
            alt="user"
            className="absolute bottom-[100px] left-[40%]"
          />
        </div>
        <span className="font-semibold leading-[28px] text-[14px] text-[rgba(255,255,255,0.5)] tracking-widest ml-[101px] mb-[10px]">
          NAMANYAJUGABELAJAR.IO
        </span>
        <p className="text-[28px] leading-[42px] w-[537px] ml-[101px] text-[white]">
          Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan
          nggak jadi beban kayak si Denis!
        </p>
      </div>
    </div>
  );
};
