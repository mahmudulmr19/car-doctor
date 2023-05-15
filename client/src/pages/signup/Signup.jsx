import { Container } from "@/components/shared";
import React, { useState } from "react";
import HeroLogin from "@/assets/images/login/login.svg";
import { Input } from "@/components/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/config/Firebase";
import { MdFacebook } from "react-icons/md";
import { useTitle } from "@/hooks";
const Signup = () => {
  useTitle("Signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (UserCredential) => {
        const user = UserCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: null,
        }).then(() => {
          navigate(from);
        });
      }
    );
  };

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      navigate(from);
    });
  };

  const handleFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      navigate(from);
    });
  };

  const handleGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      navigate(from);
    });
  };

  return (
    <Container className="my-10 py-10">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="hidden lg:block w-full">
          <img src={HeroLogin} alt="HeroLogin image" />
        </div>
        <div className="border border-[#D0D0D0] shadow-sm rounded-lg px-8 py-12 w-full">
          <h2 className="text-[#444444] font-bold text-2xl text-center mb-10">
            Sign Up
          </h2>

          {/*  */}
          <form className="space-y-5" onSubmit={handleSignup}>
            <Input
              label="Name"
              placeholder="Your name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              placeholder="Your email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              placeholder="Your password"
              type="password"
              id="password"
              value={password}
              length={6}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full py-3 px-5 rounded-lg bg-[#FF3811] hover:bg-[#e6320f] transition-all text-white"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-5 space-y-2.5">
            <h5 className="text-[#444444] text-lg">Or Sign Up with</h5>
            <div className="flex items-center justify-center gap-3">
              <AiOutlineGoogle
                onClick={handleGoogle}
                className="w-10 h-10 p-2.5 bg-[#F5F5F8] rounded-full text-black cursor-pointer text-xl"
              />
              <MdFacebook
                onClick={handleFacebook}
                className="w-10 h-10 p-2.5 bg-[#F5F5F8] rounded-full text-black cursor-pointer text-xl"
              />
              <AiFillGithub
                onClick={handleGithub}
                className="w-10 h-10 p-2.5 bg-[#F5F5F8] rounded-full text-black cursor-pointer text-xl"
              />
            </div>
            <h4 className="text-[#737373] text-lg font-medium">
              Already have an account?{" "}
              <Link to="/login" className="text-[#FF3811]">
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
