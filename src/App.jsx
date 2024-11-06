import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <nav class="bg-blue-950 ">
        <div class="max-w-[1320px] mx-auto flex justify-between items-center flex-wrap">
            <ul class="flex gap-[14px] items-center p-[15px]">
                <li
                    class=" text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">Home</a></li>
                <li
                    class="text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">About Us</a></li>
                <li
                    class="text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">Contact </a></li>
                <li
                    class="text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">Solution</a></li>
                <li
                    class="text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">Email</a></li>
            </ul>
            <div class="gap-[10px] invisible md:visible text-white">
                <button class="border-2 border-solid border-black px-5 py-2 rounded-[5px] hover:text-blue-600 duration-[0.2s] hover:bg-white shadow-md bg-orange-400 ">Register</button>
                <button class="border-2 border-solid border-black px-5 py-2 rounded-[5px] hover:text-blue-600 duration-[0.2s] hover:bg-white shadow-md bg-orange-400 ">Login</button>
            </div>
        </div>
    </nav>
    <section class="bg-blue-400 md:py-[80px] sm:py-[50px] py-[30px]">
        <div class="max-w-[1320px] mx-auto">
            <div class="flex md:flex-row flex-col ">
                <div class="basis-[55%]  md:order-1 order-2">
                    <h3 class="md:text-[50px] text-[15px] font-bold">Empowering Futures: Cutting-Edge Technology and Innovation at Kalam Institute Technology</h3>
                    <h1 class="lg:text-[35px] sm:text-[25px] text-[15px] font-semibold md:py-[30px] py-[20px]">Fuiling
                        Skills, Igniting Careers</h1>
                    <p class="text-[20px] ">Master industry-relevant skills with our vernacular online courses. Choose
                        your program, get certificate, and open doors to lucrative career opportunities. </p>

                    <div class="flex gap-[20px] py-[30px]">
                        <button
                            class="text-[20px] border-2 border-black border-solid rounded-[5px] bg-slate-900 text-white md:p-[15px] p-[8px] hover:bg-white hover:text-black hover:shadow-lg duration-[0.5s]">Explore
                            Courses</button>
                        <button
                            class="text-[20px] border-2 border-black border-solid rounded-[5px] bg-slate-900 text-white md:p-[15px] p-[8px]  hover:bg-white hover:text-black hover:shadow-lg duration-[0.5s]">Book
                            Demo Class</button>

                    </div>

                </div>
                <div class="basis-[45%] md:order-2 ordr-1">
                    <img class="w-[60%] h-[60%] rounded-md md:w-[60%] md:h-[60%] mx-auto overflow-y-hidden  md:rounded-full border-[5px] border-solid border-black"
                        src="https://media.gettyimages.com/id/73101369/photo/indian-president-dr-apj-abdul-kalam-addressed-the-nation-on-the-eve-of-indias-republic-day-25.jpg?s=612x612&w=0&k=20&c=Uwa57CwLwJI33P2qvHsNHskaq-pGTHXehv_v0UjlCzo="
                        alt="image"/>
                </div>
            </div>
        </div>

        <div class="max-w-[1320px] mx-auto m-[5px]">
            <div class="flex gap-[30px]  md:flex-row flex-col">
                <div class="grow border-2 border-solid border-black flex items-center gap-[20px] p-[20px]">
                    <img class="w-[30px]" src="https://cdn-icons-png.flaticon.com/128/483/483141.png" alt=""/>
                    <div>
                        <h1>Profile-centric resume creation</h1>
                        <p>Craft minimalist & appealing resume</p>
                    </div>
                </div>
                <div class="grow border-2 border-solid border-black flex items-center gap-[20px] p-[20px]">
                    <img class="w-[30px]" src="https://cdn-icons-png.flaticon.com/128/483/483141.png" alt=""/>
                    <div>
                        <h1>Profile-centric resume creation</h1>
                        <p>Craft minimalist & appealing resume</p>
                    </div>
                </div>
                <div class="grow border-2 border-[solid] border-[black] flex items-center gap-[20px] p-[20px]">
                    <img class="w-[30px]" src="https://cdn-icons-png.flaticon.com/128/483/483141.png" alt=""/>
                    <div>
                        <h1>Profile-centric resume creation</h1>
                        <p>Craft minimalist & appealing resume</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-[1320px] mx-auto">
            <div class="flex flex-wrap">
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="bg-red-100">
        <div class="max-w-[1170px] mx-auto">
            <h1 class="text-[30px] md:text-[40px] font-bold text-center">Our Services</h1>

            <div class="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] ">
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">1. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>

                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">2. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">2. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">2. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">2. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">2. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">2. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">2. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">2. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">3. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">4. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">5. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">6. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">7. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section class="bg-slate-300 py-10 ">
        <h1 class="text-[30px] md:text-[40px] font-bold text-center">About Us</h1>
        <div class="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-[40%_auto] gap-[30px] py-[20px]">
            <div>
                <img src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
            </div>
            <div>
                <h3 class="text-2xl font-semibold text-center">Welcome to my college website</h3>
                <p class="leading-6"> We provide classes in online and offline mode .In offlline mode,Teachers will
                    easily instract to each other. And in online mode,we provide live class and record video of live
                    class in which any doubt of any student, those student repeat the recorded class. During the live
                    classes we will provide all facilities of students.In live class we will to teach web
                    development,app development,and so more... If students wants only web development class then we
                    provide only web development class for thats students.</p>
                <p lass="leading-6">Garaunty of placement ...Amazon, Google, Microsoft, Flipcard, Paytm and more
                    company
                    come for placement drive. So I hope this College best for your child. </p>
            </div>

        </div>
    </section>


<footer
  class="bg-zinc-50 text-center text-surface/75 dark:bg-black dark:text-white/75 lg:text-left">
  <div
    class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
    <div class="me-12 hidden lg:block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div class="flex justify-center">
      <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 320 512">
         
          <path
            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </a>
      <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512">
          
          <path
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </a>
      <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 488 512">
          
          <path
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      </a>
      <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512">

          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
      <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512">
         
          <path
            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </a>
      <a href="#!" class="[&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 496 512">
        
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      </a>
    </div>
  </div>

  
  <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
     
      <div class="">
        <h6
          class="mb-4 flex  items-center justify-center font-semibold uppercase md:justify-start text-white">
          <span class="me-3 [&>svg]:h-4 [&>svg]:w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
          </span>
           KALAM TECHNOLOGY
        </h6>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, blanditiis dolore expedita rerum vel mollitia perferendis at, vero explicabo quaerat sequi natus pariar impedit.
        </p>
      </div>

      <div>
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start bg-white text-black text-2xl w-[50%]">
          Products
        </h6>
        <p class="mb-4 text-yellow-400">
          <a href="#!">HTML</a>
        </p>
        <p class="mb-4 text-yellow-400">
          <a href="#!">CSS</a>
        </p>
        <p class="mb-4 text-yellow-400">
          <a href="#!">JAVASCRIPT</a>
        </p>
        <p class="mb-4 text-yellow-400" >
          <a href="#">REACT</a>
        </p>
      </div>
     
      <div>
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start bg-white text-black text-2xl w-[50%]">
          Useful links
        </h6>
        <p class="mb-4">
          <a href="#!">Pricing</a>
        </p>
        <p class="mb-4">
          <a href="#!">Settings</a>
        </p>
        <p class="mb-4">
          <a href="#!">Orders</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>
      </div>
     
      <div>
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start bg-white text-black text-2xl w-[50%]">
          Contact
        </h6>
        <p class="mb-4 flex items-center justify-center md:justify-start">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </span>
       New delhi ,laxminagar 110092
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </span>
         kalamsupport@gmail.com
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd" />
            </svg>
          </span>
          +91 926789635
        </p>
        <p class="flex items-center justify-center md:justify-start">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                clip-rule="evenodd" />
            </svg>
          </span>
          + 91 955548357
        </p>
      </div>
    </div>
  </div>


  <div class="bg-black/5 p-6 text-center">
    <span>© 2024 Copyright:</span>
    <a class="font-semibold" href="https://tw-elements.com/"
      >TW Elements</a
    >
  </div>
</footer>

<div class="bg-gray-800 font-sans min-h-[350px] relative max-w-6xl mx-auto rounded overflow-hidden w-[150%]">
      <div class="grid lg:grid-cols-2 w-full h-full absolute inset-0">
        <div class="p-4 max-lg:hidden">
          <img src="https://readymadeui.com/image-1.webp" class="object-cover w-full h-full" alt="img" />
        </div>

        <div class="flex flex-col items-end justify-center text-right px-8 relative bg-[#262464] rounded-tl-[206px] z-20 before:absolute before:inset-0 before:!left-auto before:bg-[#293587] before:w-2/3 before:rounded-bl-[206px] before:-z-10">
          <h3 class="font-bold sm:text-4xl text-2xl text-yellow-400">Unlock Your Potential</h3>
          <p class="text-sm text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.</p>

          <button type="button" class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-4 px-8 font-semibold rounded w-max mt-8">
            Get Started
          </button>
        </div>
      </div>
    </div>
   
 


  <body class="flex font-poppins items-center justify-center">
    <div class="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
    <div class="grid gap-8">
      <div
        id="back-div"
        class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
      >
        <div
          class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
        >
          <h1 class="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
            Log in
          </h1>
          <form action="#" method="post" class="space-y-4">
            <div>
              <label for="email" class="mb-2  dark:text-gray-400 text-lg">Email</label>
              <input
                id="email"
                class="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label for="password" class="mb-2 dark:text-gray-400 text-lg">Password</label>
              <input
                id="password"
                class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <a
              class="group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span
                class="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              >
                Forget your password?
              </span>
            </a>
            <button
              class="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
          </form>
          <div class="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 class="dark:text-gray-300">
              Don't have an account?
              <a
                class="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  class="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Sign Up
                </span>
              </a>
            </h3>
          </div>

          <div
            id="third-party-auth"
            class="flex items-center justify-center mt-5 flex-wrap"
          >
            <button
              href="#"
              class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                class="max-w-[25px]"
                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                alt="Google"
              />
            </button>
            <button
              href="#"
              class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                class="max-w-[25px]"
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                alt="Linkedin"
              />
            </button>
            <button
              href="#"
              class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                class="max-w-[25px] filter dark:invert"
                src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                alt="Github"
              />
            </button>
            <button
              href="#"
              class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                class="max-w-[25px]"
                src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                alt="Facebook"
              />
            </button>
            <button
              href="#"
              class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                class="max-w-[25px] dark:gray-100"
                src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                alt="twitter"
              />
            </button>

            <button
              href="#"
              class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                class="max-w-[25px]"
                src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                alt="apple"
              />
            </button>
          </div>

          <div
            class="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
          >
            <p class="cursor-default">
              By signing in, you agree to our
              <a
                class="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Terms
                </span>
              </a>
              and
              <a
                class="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Privacy Policy
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </body>


    
    </>
  )
}

export default App
