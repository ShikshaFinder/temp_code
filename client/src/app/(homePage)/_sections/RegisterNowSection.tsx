import React from "react";
import Link from "next/link";

function Testimonial() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://plus.unsplash.com/premium_photo-1710962184944-71cab934b562?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">What Are You Waiting For ??</h1>
            <p className="py-6">
              Get Registerd Right Now and be a part of the Innovator Club LDCE
            </p>
            <button className="btn btn-primary">
              <Link href="/register">Register Now !</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
