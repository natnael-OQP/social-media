import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen mx-auto bg-gray-200 px-4   " >
      <div className="  px-8 py-12      " >
        <div className=" bg-white shadow-md rounded-md  h-60 relative " >
          <Image className="" src="/image/Shoes-2.png" layout="fill" objectFit="contain" />
        </div>
        <h1 className="mt-6 text-2xl foot-bold " >you can work anywhere <span className="text-indigo-500" >Take the advantage of it.</span> </h1>
        <p className="text-gray-400 mt-2 " > Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus, tempore nobis ipsum sed quae repellat culpa aperiam fuga cupiditate ducimus vero odit! Aperiam vel in labore repudiandae maiores voluptas.</p>
        <div className="mt-4" >
            <a href="#"> Buy Now </a>
        </div>
      </div>  
    </main>
  )
}