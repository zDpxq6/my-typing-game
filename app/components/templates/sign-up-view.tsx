import { FormEvent, ChangeEvent, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { initializeApp } from "firebase/app";

export const SignUpView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(`API_KEY:${import.meta.env.REACT_APP_API_TEST}`);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const firebaseConfig = {
      apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
      appId: import.meta.env.REACT_APP_FIREBASE_SENDER_ID,
    };
    const app = initializeApp(firebaseConfig);
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <label>
          メールアドレス:
          <input type="email" value={email} onChange={handleChangeEmail} />
        </label>
        <br />
        <label>
          パスワード:
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <br />
        <button type="submit">登録</button>
      </form>
    </div>
  );
};
export default SignUpView;
