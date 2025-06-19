"use client";

import React from "react";
import Button from "./Button";

export default function ModelShowcase() {
  return (
    <section className="relative ">
      <div className="text-white space-y-5">
        <h2 className=" text-4xl md:text-6xl font-bold uppercase ">MetalBox</h2>
        <p className="">Store and share your team's 3D assets from one safe organized place. Control access, connect to ERPs, manage distribution, and more.</p>

        <Button variant="primary" onClick={() => {}}>
          Learn more
        </Button>
      </div>
    </section>
  );
}
