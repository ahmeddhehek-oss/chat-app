import { initializeApp } from "firebase/app";
import {checkActionCode, getAuth} from "firebase/auth";
import {addDoc, collection, doc, getDoc, getFirestore, onSnapshot, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAuxiDfD6Jm5W5Wd5yF_HqeBc7UmvwgfXw",
  authDomain: "chat-app-d5e90.firebaseapp.com",
  projectId: "chat-app-d5e90",
  storageBucket: "chat-app-d5e90.firebasestorage.app",
  messagingSenderId: "647216109525",
  appId: "1:647216109525:web:81c88f07f5a62d660fcf5c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const listenForChats = (setChats) => {
  const chatsRef = collection(db, "chats");
  const unsubscribe = onSnapshot(chatsRef, (snapshot) => {
    const chatList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),

    }));

    const filteredChats = chatList.filter((chat)  => chat.users?.some((user) => user.email === auth.currentUser.email));

    setChats(filteredChats);

  });

  return unsubscribe;

};


export const sendMessage = async (messageText, chatId, user1, user2) => {
    if (!messageText || !chatId || !user1 || !user2) {
    console.error("sendMessage missing parameters:", { messageText, chatId, user1, user2 });
    return;
  }
  const chatRef = doc(db, "chats", chatId)

  const user1Doc = await getDoc(doc(db, "user", user1))
  const user2Doc = await getDoc(doc(db, "user", user2))

  console.log(user1Doc);
  console.log(user2Doc);

const user1Data = user1Doc.data();
const user2Data = user2Doc.data();



  const chatDoc = await getDoc(chatRef);
  if (!chatDoc.exists()){
    await setDoc(chatRef, {
      users: [user1Data, user2Data],
      lastMessage: messageText,
      lastMessageTimestamp: serverTimestamp(),
    });
  } else {
      await updateDoc(chatRef, {
      lastMessage: messageText,
      lastMessageTimestamp: serverTimestamp(),
    });

  }

  const messageRef = collection(db, "chats", chatId, "messages");

  await addDoc(messageRef, {
    text: messageText,
    sender: auth.currentUser.email,
    timestamp: serverTimestamp(),
  });
  
  

};


export const listenForMessages = (chatId, setMessages) => {
    const chatRef = collection(db, "chats", chatId, "messages");
    onSnapshot(chatRef, (snapshot) => {
        const messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
    });
};



export { auth, db };