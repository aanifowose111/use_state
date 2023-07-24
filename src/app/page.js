// Code University
// By Abiodun Anifowose

"use client";
import Plus from "@/components/Plus";
import Minus from "@/components/Minus";
import Close from "@/components/Close";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState(""); // string
  const [cartItems, setCartItems] = useState(0); // interger
  const [subjects, setSubjects] = useState([]); // array

  const [subInput, setSubInput] = useState("");

  const handleUsername = (e) => setUsername(e.target.value);

  const handleCartNumIncrease = (e) => {
    setCartItems((e) => e + 1);
  };
  const handleCartNumDecrease = (e) => {
    cartItems >= 1 ? setCartItems((e) => e - 1) : setCartItems(0);
  };

  const handleSubChange = (e) => setSubInput(e.target.value);

  const handleAddSubject = (e) => {
    e.preventDefault();
    let subjectArray = !subjects?.length ? [] : subjects;
    const allSubject = subInput ? subjectArray.push(subInput) : null;
    setSubInput("");
    setSubjects(subjectArray);
    console.log(subjects);
  };

  const handleRemoveSubject = (del) => {
    const newSubjectArray = subjects.filter((e) => e !== del);
    setSubjects(newSubjectArray);
  };

  return (
    <div className="main-container">
      <div className="nav-bar">
        <div className="nav-bar__logo">CODING UNIVERSITY</div>
        <div className="nav-bar__icon">
          <img src="/CU_.png" alt="" />
        </div>
      </div>
      <div className="container-body">
        <div className="container-body__text">
          <div className="cu-title">REACT HOOKS - useState</div>
          <div className="cu--box">
            <div className="cu-example">
              Example 1: <span>Updating username</span>
            </div>
            <div className="username--text">
              Your username is {username != "" ? username : "not set"}
            </div>
            <div>
              <form action="">
                <div className="cu-example__one-form">
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsername}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="cu--box">
            <div className="cu-example">
              Example 2: <span>Updating cart items</span>
            </div>
            <div>
              <div className="cu-example__two num">
                {cartItems !== 0 ? (
                  cartItems
                ) : (
                  <div className="empty--cart">Your cart is empty</div>
                )}
              </div>
              <div className="cu-example__two">
                <button onClick={handleCartNumIncrease}>
                  <Plus />
                </button>
                <button onClick={handleCartNumDecrease}>
                  <Minus />
                </button>
              </div>
            </div>
          </div>
          <div className="cu--box">
            <div className="cu-example">
              Example 3: <span>Updating Subject List</span>
            </div>
            <div>
              <form onSubmit={handleAddSubject}>
                <div className="cu-three-main">
                  <div className="cu-example__three">
                    <input
                      type="text"
                      value={subInput}
                      onChange={handleSubChange}
                    />
                  </div>
                  <div className="cu-example__three">
                    <button>Add Subject</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="cu--sub__box">
              {subjects.map((e, i) => (
                <div className="cu--sub__item" key={i}>
                  <div>{e}</div>
                  <div
                    className="cu--svg"
                    onClick={() => handleRemoveSubject(e)}
                  >
                    <Close />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
