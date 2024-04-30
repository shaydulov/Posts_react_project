import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, set, push, get, remove } from "firebase/database";
import app from "../../firebase/config";


export const AddPost = () => {
  const [user, setUser] = useState(null);
  const [sInput, setSInput] = useState("");
  const [tInput, setTInput] = useState("");
  const [aInput, setAInput] = useState("");
  const [postArray, setPostArray] = useState([]);
  const navigate = useNavigate();
  const db = getDatabase(app);
  const auth = getAuth()


  const saveData = async () => {
    const newDocRef = push(ref(db, "posts"));
    set(newDocRef, {
      postImg: sInput,
      postTitle: tInput,
      postAbout: aInput,
    })
      .then(() => {
        alert("Ma'lumotlar muvaffaqqiyatli qo'shildi")})
      .catch((error) => {
        console.log(error);
      });
  };

  const homeHandler = ()=>{
    navigate('/home')
  }

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/register");
      }
    });
  }, []);

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

     // Cleanup
     return () => unsubscribe();
   }, [auth]);

   const logoutHandler = () => {
     signOut(auth)
       .then(() => console.log("hisobingizdan chiqdingiz"))
       .catch(() => alert("Nimadir xato ketti"));
   };

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

   const deletePost = (id) => {
     const CardRef = ref(db, `posts/${id}`);
     remove(CardRef)
       .then(() => {
         alert("post o'chirildi");
         // window.location.reload();
       })
       .catch((error) => {
         console.log("Xato: ", error);
       });
   };

  return (
    <div>
      <div className="flex container justify-between items-center mb-7 py-[10px] px-[50px] bg-[#bbd54f]">
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
            <li className="text-[orange] cursor-pointer" onClick={homeHandler}>
              Home
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-red-400 p-2 rounded" onClick={logoutHandler}>
            {" "}
            LOGOUT{" "}
          </button>
        </div>
      </div>
      {user ? (
        <div className="flex flex-col gap-2 container px-2">
          <h1>Post yaratish</h1>{" "}
          <span>
            misol uchun rasm silkasi:
            https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/887/bugatti-bolide-prototype_100887187.jpg
          </span>
          <input
            className="border-[3px]"
            type="text"
            placeholder="Rasm silkasini kiriting"
            value={sInput}
            onChange={(e) => setSInput(e.target.value)}
          />
          <input
            className="border-[3px]"
            type="text"
            value={tInput}
            placeholder="Title"
            onChange={(e) => setTInput(e.target.value)}
          />
          <input
            className="border-[3px]"
            type="text"
            placeholder="About"
            value={aInput}
            onChange={(e) => setAInput(e.target.value)}
          />
          <button
            className="w-[100px] bg-[#3edb3e] text-[white] mb-4"
            onClick={saveData}
          >
            submit
          </button>
          <h2>Yaratilingan postlar:</h2>
          <div className="flex flex-col gap-2">
            {postArray.map((post, index) => (
              <div
                key={index}
                className="flex gap-2"
              >
                <h2 className="mb-1">{post.postTitle}</h2>
                <button
                className="px-2 rounded bg-[#fc4848] text-[white]"
                onClick={() => {
                  deletePost(post.cardId);
                }}
              >
                Delete
              </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
};
