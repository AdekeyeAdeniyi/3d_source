"use client";

import React from "react";
import Image from "next/image";

import Button from "./Button";

import ChairImage from "../../public/images/chair.jpg";
import Link from "next/link";

type ModelShowcaseProps = {
  title: string;
  description: string;
  order?: string;
};

export default function ModelShowcase({ title, description, order }: ModelShowcaseProps) {
  return (
    <div className={`relative flex gap-14 flex-col lg:flex-row lg:gap-20 w-full basis-auto justify-between lg:items-center ${order}`}>
      <div className="text-white space-y-5">
        <h2 className="text-4xl xl:text-6xl font-bold uppercase max-w-[10ch]">{title}</h2>
        <p className="max-w-[40ch]">{description}</p>

        <Button variant="primary" onClick={() => {}}>
          Learn more
        </Button>
      </div>

      <Link
        href="https://share.streampixel.io/67944b8a3f323be4b89a2272"
        target="__blank"
        rel="noreferrer"
        className=" h-[250px] lg:basis-[500px] xl:basis-[600px] sm:h-[400px] xl:h-[60vh] overflow-hidden">
        <Image src={ChairImage} alt="Metal box chair" className="inline-block w-full h-full object-cover rounded-md hover:scale-105 transition-all" />
      </Link>
    </div>
  );
}
