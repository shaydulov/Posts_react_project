import app from "../../firebase/config";
import { getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref, set, push, get } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  // const [sInput, setSInput] = useState("");
  // const [tInput, setTInput] = useState("");
  // const [aInput, setAInput] = useState("")
  const [postArray, setPostArray] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  const db = getDatabase(app);

useEffect(() => {
  const readData = () => {
    const DBRef = ref(db, "posts");
    get(DBRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const myData = snapshot.val();
          const temporaryArray = Object.keys(myData).map((myFireId) => {
            return {
              ...myData[myFireId],
              cardId: myFireId,
            };
          });

          setPostArray(temporaryArray);
        } else "xato";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  readData();
}, [db]);

  console.log(postArray);

  /////////////////////////////////////////////////////////////////

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => console.log("hisobingizdan chiqdingiz"))
      .catch(() => alert("Nimadir xato ketti"));
  };
  /////////////////////////////////////////////////////////////////

 const addPostHandler = () => {
   navigate("/home/add")
 };

  /////////////////////////////////////////////////////////////////
  
  return (
    // <div className="flex container flex-col bg-[#ae9c9c] p-[50px]">
    //   <div>
    //     {user ? (
    //       <div>
    //         <h1>Xush kelibsiz, {user.displayName}!</h1>
    //       </div>
    //     ) : (
    //       <div>
    //         <h1>Xush kelibsiz, mehmon!</h1>
    //         <p>Saytdan foydalanish uchun ro'yxatdan o'ting yoki kiring.</p>
    //       </div>
    //     )}
    //   </div>
    //   <div className="flex justify-between mb-7">
    //     <div className="flex flex-col gap-2">
    //       <input
    //         className="border-[3px]"
    //         type="text"
    //         placeholder="Rasm silkasini kiriting"
    //         value={sInput}
    //         onChange={(e) => setSInput(e.target.value)}
    //       />
    //       <input
    //         className="border-[3px]"
    //         type="text"
    //         value={tInput}
    //         placeholder="Title"
    //         onChange={(e) => setTInput(e.target.value)}
    //       />
    //       <input
    //         className="border-[3px]"
    //         type="text"
    //         placeholder="About"
    //         value={aInput}
    //         onChange={(e) => setAInput(e.target.value)}
    //       />
    //       <button className="border-[2px] w-[100px]" onClick={saveData}>
    //         submit
    //       </button>
    //     </div>
    //     <div>
    //       <button
    //         className="bg-red-400 p-2 rounded mt-[100px]"
    //         onClick={logoutHandler}
    //       >
    //         {" "}
    //         LOGOUT{" "}
    //       </button>
    //     </div>
    //   </div>
    //   {/* <div>
    //     <ul className="flex gap-8">
    //       {fruitArray.map((fruit, index) => (
    //         <li key={index}>
    //           {fruit.fruitName}: {fruit.fruitWeight}
    //           {fruit.fruitImg}
    //         </li>
    //       ))}
    //     </ul>
    //   </div> */}
    //   <div className="flex flex-wrap justify-between gap-12">
    //     {postArray.map((post, index) => (
    //       <div
    //         key={index}
    //         className="border-2 w-max rounded-md p-4 bg-[white] cursor-pointer"
    //       >
    //         <img
    //           src={post.postImg}
    //           alt={post.postTitle}
    //           className="w-[400px] mb-3"
    //         />
    //         <h2 className="text-[28px]">{post.postTitle}</h2>
    //         <p className="w-[390px]">{post.postAbout}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="flex flex-col bg-[#ae9c9c]">
      <div className="flex container justify-between items-center mb-7 py-[10px] px-[50px] bg-white">
        <div className="flex items-center gap-3">
          {user ? (
            <div>
              <h1 className="text-[24px]">Xush kelibsiz {user.displayName}!</h1>
            </div>
          ) : (
            <div>
              <h1>Xush kelibsiz, mehmon!</h1>
            </div>
          )}
          <ul>
            <li className="text-[orange] cursor-pointer" onClick={addPostHandler}>Admin panel</li>
          </ul>
        </div>
        <div>
          <button className="bg-red-400 p-2 rounded" onClick={logoutHandler}>
            {" "}
            LOGOUT{" "}
          </button>
        </div>
      </div>
      <div className="container px-[50px] pb-[50px]">
        <h2 className="text-[32px] font-semibold text-[white] mb-3">Posts:</h2>
        <div className="flex flex-wrap gap-12 ">
          {postArray.map((post, index) => (
            <div
              key={index}
              className="border-2 w-max rounded-md p-4 bg-[white]"
            >
              <img
                src={post.postImg}
                alt={post.postTitle}
                className="w-[400px] mb-3 h-[230px]"
              />
              <h2 className="text-[28px] mb-1">{post.postTitle}</h2>
              <p className="w-[390px] mb-4 h-[120px] overflow-y-scroll">
                {post.postAbout}
              </p>
              {/* <button
                className="px-4 py-1 rounded bg-[#fc4848] text-[white]"
                onClick={() => {
                  deletePost(post.cardId);
                }}
              >
                Delete
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
