

export default function Home() {
  return (
    <div className="flex flex-col tracking-[0.2px] items-center ">

      <header className="flex h-[91px] relative items-center w-[1322px] justify-evenly">
        <h3 className="font-bold tracking-[0.1px] w-[152px] absolute left-[136px] text-2xl ">BrandName</h3>
        <div className="flex absolute left-[364px] justify-between w-[815px] ">
          <div className="flex list-none font-bold text-[14px] items-center w-[275px] gap-5">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </div>
          <div className="flex w-[189px] h-[52px] gap-11 font-bold items-center ">
            <button className="w-10 h-6">Login</button>
            <button className="bg-[#23A6F0] w-[214px] rounded-s-[5px] h-[52px] text-sm">JOIN US</button>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center text-center m-3 py-20 px-0 gap-20 w-[1,046px] h-[1028]">

        <div className="w-[699px] h-[496px] py-10 flex flex-col gap-10 items-center">

          <h5 className="font-bold text-[#23A6F0] tracking-[0.1] text-[16px]">Welcome</h5>

          <div className="font-bold text-[55px] tracking-[0.2px] leading-[80px] w-[542px] h-40">
            Selling on the internet like a pro
          </div>

          <div className="w-[536px] h-[60] font-normal text-xl leading-[30px] ">
            We know how large objects will act, but things on a
            small scale just do not act that way.
          </div>

          <div className="w-[365px] h-14 flex text-[14px] font-bold gap-[10]">

            <div className="w-48 h-[52px] rounded-[5px] py-[15] px-9 bg-[#23A6F0]">Get Quote Now</div>

            <div className="w-[162px] h-[52px] py-[15] px-9 border-[1px] border-[#23A6F0] text-[#23A6F0] rounded-[5px] "> Learn More</div>

          </div>
        </div>
        <div className="flex  w-[1046px] text-left h-[292px] gap-[30px] ">
          <div className="w-[328px] h-[292] flex flex-col shadow-inner py-[35px] bg-white px-10 gap-5">
            <div className="w-[70] h-[76] bg-[#FFDCD1] rounded-[10px] "> </div>

            <h5 className="font-bold text-base text-[#252B42]">training Courses</h5>

            <div className="h-[2px] w-[50px] bg-[#E74040] "></div>

            <p className="font-normal text-sm w-[222px] h-[60] text-[#737373]">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>
          </div>
          <div className="w-[328px] h-[292] flex flex-col shadow-inner py-[35px] bg-white px-10 gap-5">
            <div className="w-[70] h-[76] bg-[#B9EAA8] rounded-[10px] "> </div>

            <h5 className="font-bold text-base text-[#252B42]">2,769 online courses</h5>

            <div className="h-[2px] w-[50px] bg-[#E74040] "></div>

            <p className="font-normal text-sm w-[222px] h-[60] text-[#737373]">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>

          </div>
          <div className="w-[328px] h-[292] flex flex-col shadow-inner py-[35px] bg-[#23A6F0] px-10 gap-5">

            <div className="w-[70] h-[76] bg-[#ffffff] rounded-[10px] "> </div>

            <h5 className="font-bold text-base ]">training Courses</h5>

            <div className="h-[2px] w-[50px] bg-[#ffffff] "></div>

            <p className="font-normal text-sm w-[222px] h-[60] ">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}
