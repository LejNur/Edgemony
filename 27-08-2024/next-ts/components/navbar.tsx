"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-zinc-200">
      <ul className="flex gap-4 justify-center py-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/article"}>Write an article</Link>
      </ul>
    </nav>
  );
}
