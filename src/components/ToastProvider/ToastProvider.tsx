"use client";

import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ToastProviderProps {
  children: React.ReactNode;
}
const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      {children}
      <ToastContainer autoClose={1800} closeOnClick/>
    </>
  );
};

export default ToastProvider;
