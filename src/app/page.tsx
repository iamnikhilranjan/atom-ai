import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'

const LandingPage = async () => {
    const { userId } = await auth()
    if (userId) {
        return redirect('/mail')
    }
    return (
        <>
        <header className="flex justify-between items-center px-8 py-0 w-full bg-white max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0">
      <div className="flex flex-col flex-1 items-start w-full border-b border-solid border-b-slate-300 max-w-[1204px]">
        <nav className="flex justify-between items-center px-0 py-5 w-full">
          <div className="flex gap-10 items-center max-sm:gap-5">
          <div>
      <svg
        width="132"
        height="32"
        viewBox="0 0 132 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        style={{ width: "131px", height: "32px" }}
      >
        <path
          d="M5.44795 27C4.22413 27 3.20758 26.791 2.39828 26.3731C1.58898 25.9552 0.986947 25.398 0.592168 24.7015C0.197389 23.9851 0 23.2189 0 22.403C0 21.408 0.256606 20.5622 0.769819 19.8657C1.28303 19.1493 2.01337 18.602 2.96084 18.2239C3.90831 17.8458 5.0433 17.6567 6.36581 17.6567H10.2445C10.2445 16.7811 10.1162 16.0547 9.8596 15.4776C9.60299 14.9005 9.21808 14.4726 8.70487 14.194C8.2114 13.8955 7.57975 13.7463 6.80993 13.7463C5.92168 13.7463 5.16173 13.9652 4.53009 14.403C3.89844 14.8209 3.50366 15.4478 3.34575 16.2836H0.384909C0.503343 15.2289 0.858644 14.3333 1.45081 13.597C2.06272 12.8408 2.84241 12.2637 3.78988 11.8657C4.73735 11.4478 5.74403 11.2388 6.80993 11.2388C8.2114 11.2388 9.38586 11.4876 10.3333 11.9851C11.2808 12.4826 11.9914 13.1891 12.4651 14.1045C12.9586 15 13.2053 16.0746 13.2053 17.3284V26.6418H10.6294L10.3926 24.1045C10.1754 24.5025 9.91882 24.8806 9.62273 25.2388C9.32665 25.597 8.97135 25.9055 8.55683 26.1642C8.16205 26.4229 7.69819 26.6219 7.16523 26.7612C6.65202 26.9204 6.07959 27 5.44795 27ZM6.01051 24.5821C6.64215 24.5821 7.21458 24.4527 7.72779 24.194C8.24101 23.9353 8.67526 23.5871 9.03056 23.1493C9.4056 22.6915 9.68195 22.1841 9.8596 21.6269C10.057 21.0498 10.1656 20.4627 10.1853 19.8657V19.7761H6.66189C5.81312 19.7761 5.12225 19.8856 4.5893 20.1045C4.07609 20.3035 3.70105 20.5821 3.46418 20.9403C3.22732 21.2985 3.10888 21.7164 3.10888 22.194C3.10888 22.6915 3.21745 23.1194 3.43458 23.4776C3.67144 23.8159 4.007 24.0846 4.44126 24.2836C4.87552 24.4826 5.3986 24.5821 6.01051 24.5821Z"
          fill="black"
        ></path>
        <path
          d="M22.8251 26.6418C21.8776 26.6418 21.0584 26.4925 20.3676 26.194C19.6767 25.8955 19.1438 25.398 18.7687 24.7015C18.3937 24.005 18.2062 23.0597 18.2062 21.8657V14.1343H15.6302V11.597H18.2062L18.5615 7.83582H21.167V11.597H25.401V14.1343H21.167V21.8955C21.167 22.7512 21.3447 23.3383 21.7 23.6567C22.0553 23.9552 22.6672 24.1045 23.5357 24.1045H25.253V26.6418H22.8251Z"
          fill="black"
        ></path>
        <path
          d="M35.0712 27C33.6697 27 32.4064 26.6716 31.2813 26.0149C30.1759 25.3582 29.2975 24.4428 28.6461 23.2687C28.0145 22.0746 27.6987 20.7015 27.6987 19.1493C27.6987 17.5572 28.0244 16.1741 28.6757 15C29.3271 13.806 30.2154 12.8806 31.3405 12.2239C32.4656 11.5672 33.7289 11.2388 35.1304 11.2388C36.5516 11.2388 37.8149 11.5672 38.9202 12.2239C40.0256 12.8806 40.8941 13.796 41.5258 14.9701C42.1772 16.1443 42.5029 17.5274 42.5029 19.1194C42.5029 20.7114 42.1772 22.0945 41.5258 23.2687C40.8941 24.4428 40.0158 25.3582 38.8906 26.0149C37.7655 26.6716 36.4924 27 35.0712 27ZM35.0712 24.4328C35.8805 24.4328 36.6108 24.2338 37.2622 23.8358C37.9333 23.4378 38.4663 22.8507 38.861 22.0746C39.2755 21.2786 39.4828 20.2935 39.4828 19.1194C39.4828 17.9453 39.2854 16.9701 38.8906 16.194C38.4959 15.398 37.9629 14.801 37.2918 14.403C36.6404 14.005 35.9199 13.806 35.1304 13.806C34.3408 13.806 33.6105 14.005 32.9393 14.403C32.2682 14.801 31.7254 15.398 31.3109 16.194C30.9161 16.9701 30.7187 17.9453 30.7187 19.1194C30.7187 20.2935 30.9161 21.2786 31.3109 22.0746C31.7254 22.8507 32.2584 23.4378 32.9097 23.8358C33.5809 24.2338 34.3013 24.4328 35.0712 24.4328Z"
          fill="black"
        ></path>
        <path
          d="M45.9858 26.6418V11.597H48.6505L48.8578 13.7164C49.3315 12.9403 49.9632 12.3333 50.7527 11.8955C51.5423 11.4577 52.4305 11.2388 53.4175 11.2388C54.1676 11.2388 54.8486 11.3483 55.4605 11.5672C56.0724 11.7662 56.6152 12.0746 57.0889 12.4925C57.5627 12.9104 57.9476 13.4279 58.2437 14.0448C58.7766 13.1692 59.4872 12.4826 60.3755 11.9851C61.2835 11.4876 62.2408 11.2388 63.2475 11.2388C64.4516 11.2388 65.4878 11.4876 66.3564 11.9851C67.2249 12.4627 67.8861 13.1891 68.3401 14.1642C68.7941 15.1194 69.0211 16.3134 69.0211 17.7463V26.6418H66.0899V18.0448C66.0899 16.6517 65.8037 15.597 65.2312 14.8806C64.6786 14.1642 63.8594 13.806 62.7738 13.806C62.0434 13.806 61.392 13.995 60.8196 14.3731C60.2472 14.7512 59.7932 15.2985 59.4576 16.0149C59.1418 16.7313 58.9839 17.607 58.9839 18.6418V26.6418H56.023V18.0448C56.023 16.6517 55.7368 15.597 55.1644 14.8806C54.6117 14.1642 53.7925 13.806 52.7069 13.806C52.016 13.806 51.3844 13.995 50.812 14.3731C50.2395 14.7512 49.7855 15.2985 49.45 16.0149C49.1144 16.7313 48.9466 17.607 48.9466 18.6418V26.6418H45.9858Z"
          fill="black"
        ></path>
        <path
          d="M77.7919 27C76.5681 27 75.5516 26.791 74.7423 26.3731C73.933 25.9552 73.3309 25.398 72.9361 24.7015C72.5414 23.9851 72.344 23.2189 72.344 22.403C72.344 21.408 72.6006 20.5622 73.1138 19.8657C73.627 19.1493 74.3573 18.602 75.3048 18.2239C76.2523 17.8458 77.3873 17.6567 78.7098 17.6567H82.5885C82.5885 16.7811 82.4602 16.0547 82.2036 15.4776C81.947 14.9005 81.562 14.4726 81.0488 14.194C80.5554 13.8955 79.9237 13.7463 79.1539 13.7463C78.2657 13.7463 77.5057 13.9652 76.8741 14.403C76.2424 14.8209 75.8476 15.4478 75.6897 16.2836H72.7289C72.8473 15.2289 73.2026 14.3333 73.7948 13.597C74.4067 12.8408 75.1864 12.2637 76.1339 11.8657C77.0813 11.4478 78.088 11.2388 79.1539 11.2388C80.5554 11.2388 81.7298 11.4876 82.6773 11.9851C83.6248 12.4826 84.3354 13.1891 84.8091 14.1045C85.3026 15 85.5493 16.0746 85.5493 17.3284V26.6418H82.9734L82.7365 24.1045C82.5194 24.5025 82.2628 24.8806 81.9667 25.2388C81.6706 25.597 81.3153 25.9055 80.9008 26.1642C80.506 26.4229 80.0422 26.6219 79.5092 26.7612C78.996 26.9204 78.4236 27 77.7919 27ZM78.3545 24.5821C78.9861 24.5821 79.5585 24.4527 80.0718 24.194C80.585 23.9353 81.0192 23.5871 81.3745 23.1493C81.7496 22.6915 82.0259 22.1841 82.2036 21.6269C82.401 21.0498 82.5095 20.4627 82.5293 19.8657V19.7761H79.0059C78.1571 19.7761 77.4662 19.8856 76.9333 20.1045C76.4201 20.3035 76.045 20.5821 75.8082 20.9403C75.5713 21.2985 75.4529 21.7164 75.4529 22.194C75.4529 22.6915 75.5614 23.1194 75.7785 23.4776C76.0154 23.8159 76.351 24.0846 76.7852 24.2836C77.2195 24.4826 77.7426 24.5821 78.3545 24.5821Z"
          fill="black"
        ></path>
        <path
          d="M89.5358 26.6418V11.597H92.4967V26.6418H89.5358ZM91.0458 8.76119C90.4734 8.76119 89.9997 8.58209 89.6246 8.22388C89.2693 7.86567 89.0917 7.40796 89.0917 6.85075C89.0917 6.31343 89.2693 5.87562 89.6246 5.53731C89.9997 5.1791 90.4734 5 91.0458 5C91.5985 5 92.0624 5.1791 92.4374 5.53731C92.8125 5.87562 93 6.31343 93 6.85075C93 7.40796 92.8125 7.86567 92.4374 8.22388C92.0624 8.58209 91.5985 8.76119 91.0458 8.76119Z"
          fill="black"
        ></path>
        <circle
          cx="116"
          cy="16"
          r="15.2809"
          stroke="black"
          strokeWidth="1.4382"
        ></circle>
        <path
          d="M118.467 18.0625C114.355 22.1817 110.047 24.557 108.846 23.3676C107.644 22.1782 110.003 17.8745 114.115 13.7552C118.227 9.63596 122.534 7.26062 123.736 8.45002C124.938 9.63942 122.579 13.9431 118.467 18.0625Z"
          fill="#5743CC"
          stroke="black"
          strokeWidth="0.719101"
        ></path>
        <path
          d="M117.884 13.76C122.003 17.8716 124.378 22.1792 123.189 23.3809C121.999 24.5826 117.696 22.2235 113.576 18.1115C109.457 13.9999 107.082 9.69231 108.271 8.49058C109.461 7.28885 113.764 9.648 117.884 13.76Z"
          stroke="black"
          strokeWidth="0.719101"
        ></path>
        <path
          d="M116.206 14.5865L116.498 15.6916C116.506 15.7192 116.52 15.7443 116.54 15.7645C116.561 15.7846 116.586 15.7991 116.613 15.8063L117.719 16.0987C117.879 16.1411 117.879 16.3682 117.719 16.4107L116.613 16.7031C116.586 16.7104 116.561 16.7249 116.54 16.7451C116.52 16.7652 116.506 16.7904 116.498 16.8179L116.206 17.9232C116.164 18.0832 115.937 18.0832 115.894 17.9232L115.602 16.8178C115.594 16.7903 115.58 16.7652 115.56 16.745C115.54 16.7249 115.515 16.7104 115.487 16.7031L114.382 16.4107C114.222 16.3683 114.222 16.1412 114.382 16.0988L115.487 15.8064C115.515 15.7991 115.54 15.7847 115.56 15.7645C115.58 15.7443 115.595 15.7192 115.602 15.6916L115.894 14.5864C115.937 14.4263 116.164 14.4264 116.206 14.5865Z"
          fill="#F5F5F5"
        ></path>
      </svg>
    </div>
            <div className="flex gap-8 items-center max-md:gap-6 max-sm:hidden">
            <div className='flex gap-8 items-center cursor-pointer text-black'> 
                <Link href='/'>Home</Link>
                <Link href='https://gofloww.co/about-us'>About us</Link>
                <Link href='https://gofloww.co/pricing'>Pricing</Link>
                <Link href='https://blog.gofloww.co/'>Blog</Link>
             </div>
            </div>
          </div>
          <div className="flex gap-5 justify-end items-center">
          <button className="px-4 py-3 text-sm font-bold leading-4 text-white bg-indigo-700 rounded-lg cursor-pointer">
      Start your free trial
    </button>
          </div>
        </nav>
      </div>
    </header>
            {/* <div className="h-screen w-full bg-white absolute inset-0">
            </div> */}

            <div className=" flex justify-center items-center absolute z-[-1] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_80%)]">
                
     <section className="flex gap-2 items-center px-3 py-2 bg-white rounded-3xl border border-fuchsia-500 shadow w-fit absolute top-32 left-auto z-10">
         <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="#387FF5"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[20px] h-[20px] fill-[#387FF5]"
    >
      <path d="M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.6583 17.0488 16.3417 17.0488 16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z" />
    </svg>
      <p className="text-base font-medium leading-6 text-gray-600">
        Revolutionize Your Inbox with AI
      </p>
       </section>
            </div>
            <div className="min-h-screen flex flex-col items-center pt-56 relative z-[10]">
                <h1 className="bg-gradient-to-r text-center from-gray-600 font-bold text-6xl to-gray-900 inline-block text-transparent bg-clip-text dark:text-white">
                    Transform Your Inbox with
                   <span className='bg-gradient-to-r text-center from-purple-500 to-pink-500 inline text-transparent bg-clip-text'> AI-Powered</span>
                    <br />
                    Efficiency
                </h1>
                <div className="h-4"></div>
                <div className="flex px-20 py-0 w-[] max-md:px-10 max-md:py-0 max-sm:p-0">
              <p className="flex-1 text-base leading-6 text-center text-gray-600 opacity-80 pb-5">
                Let AI handle your emails while you focus on what truly matters.
                Smart email composition,
                <br /> instant replies, and intelligent
                organization—all in one platform.
              </p>
            </div>
                <div className="space-x-4">
                    <Button >
                        <Link href="/mail">Get Started</Link>
                    </Button>
                    <Link href='https://start-saas.com?utm=normalhuman'>
                        <Button variant="outline" >Learn More</Button>
                    </Link>
                </div>
                <div className="mt-12 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Experience the power of:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white border rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2 text-black">AI-driven email RAG</h3>
                            <p className="text-gray-600">Automatically prioritize your emails with our advanced AI system.</p>
                        </div>
                        <div className="bg-white border rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2 text-black">Full-text search</h3>
                            <p className="text-gray-600">Quickly find any email with our powerful search functionality.</p>
                        </div>
                        <div className="bg-white border rounded-lg shadow-md p-6 ">
                            <h3 className="text-xl font-semibold mb-2 text-black">Shortcut-focused interface</h3>
                            <p className="text-gray-600">Navigate your inbox efficiently with our intuitive keyboard shortcuts.</p>
                        </div>
                    </div>
                </div>
                <Image src='/demo.jpg' alt='demo' width={1000} height={1000} className='my-12 border rounded-md transition-all hover:shadow-2xl hover:scale-[102%] shadow-xl w-[70vw] h-auto' />
                <div className="flex items-center space-x-4 mb-10">
                    <Link href="/sign-in" className="text-sm hover:underline">Sign In</Link>
                    <Link href="/sign-up" className="text-sm hover:underline">Sign Up</Link>
                    <ModeToggle />
                </div>
            </div>
        </>
    )
}

export default LandingPage