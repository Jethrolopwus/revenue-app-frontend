import React from "react";
import { appTop, productIcon2, productIcon3, productIcon4, Info, dropDown, arrowDown, call1, call2,  } from "../icons";
import Charts from "./Charts"



const Home = () =>{
    return(
        <section>    
            <div>
                <div className="mx-16 my-8 max-w-lg"> 
                        <h2 className="mx-8  text-gray-400">Available Balance</h2>
                        <div className="flex px-2 items-center justify-around">
                            <h1 className="text-3xl font-bold">USD 120,500:00</h1>
                            <button className=" rounded-full mx-2 items-center  bg-[#131316] text-white p-2 px-10 ">Withdraw</button>
                        </div>
                </div>
            </div>
            <div>
                <div className=" h-24 ml-[68rem]  ">
                    <div className=" flex justify-between items-center text-[#56616B] font-[Degular]" >
                        Ledger Balance
                        {Info}
                    </div>
                    <div className="font-bold text-[#131316] text-2xl">
                        USD 0.00
                    </div>
                    <div className=" flex justify-between items-center text-[#56616B] font-[Degular]" > 
                        Total Payout
                        {Info}
                    </div>
                    <div className="font-bold text-[#131316] text-2xl">
                        USD 55,080.00
                    </div>
                    <div className="flex justify-between items-center text-[#56616B] font-[Degular]" >
                        Total Revenue
                        {Info}
                    </div>
                    <div className="font-bold text-[#131316] text-2xl">
                        USD 175,580.00
                    </div>
                    <div className=" flex justify-between items-center text-[#56616B] font-[Degular]">
                        Pending Payout
                        {Info}
                    </div>
                    <div className="font-bold text-[#131316] text-2xl ">
                        USD 0.00
                    </div>
                </div>
                <div className=" max-w-sm w-14 rounded-full  mx-2 h-40 border p-4 ">
                    <div className=" py-1 ">
                    {appTop}
                    </div>
                    <div className="py-1">
                    {productIcon2}
                    </div>
                    <div className="py-1">
                    {productIcon3}
                    </div>
                    <div className="py-1">
                    {productIcon4}
                    </div>
                </div>
            </div>
            <div className=" ml-60 max-w-4xl pl-40 ">
                <Charts/>
            </div>
            <div className=" border max-w-3xl mx-auto flex justify-between">
                <h3 className="text-[#56616B]">April 1, 2022</h3>
                <h3 className="text-[#56616B]">April 30, 2022</h3>
            </div>
                   <div className=" flex justify-between mx-4 mt-8">
                        <div className="">
                            <h2 className="text-2xl font-bold">24 Transactions</h2>
                            <h3 className="text-4 text-[#56616B]">Your Transactionsfor the last 7 days</h3>
                        </div>
                            <div className="flex ml-10">
                                <button className="flex bg-[#EFF1F6] items-center gap-4 text-xl px-2 mx-4 border h-8 my-4 rounded-full">Filter 
                                {dropDown}
                                </button>
                                <button className="flex items-center bg-[#EFF1F6] gap-4 text-xl px-2 mx-4 border h-8 my-4 rounded-full">Export List 
                                {arrowDown}
                                </button>
                            </div>
                    </div> 
                <div className="flex justify-between mx-4 mt-8">
                        <div className="flex justify-between items-center gap-4">
                            <span className="rounded-full p-4 bg-[#E3FCF2]">
                            {call1}
                            </span> 
                            <div>
                            <h2 className=" text-[#131316] text-[16px] font-[Degular]">Psychology Money</h2>
                            <h3 className="text-[14px] font-[Degular] text-[#56616b] ">Roy Cash</h3>
                            </div>
                        </div>
                        <div className="">
                        <h2 className="font-bold text-[16px] text-[#131316] ">USD 600</h2>
                        <h3 className="text-[#56616B] text-[14px] font-[Degular]">April 03, 2022</h3>
                        </div>
                    </div>
                    <div className="flex justify-between mx-2 mt-8">
                        <div className="flex justify-between items-center gap-4 ">
                        <span className=" rounded-full p-4 bg-[#E3FCF2]">
                            {call1}
                        </span>
                        <div>
                            <h2 className=" text-[#131316] text-[16px] font-[Degular]">Buy Me a Coffee</h2>
                            <h3 className="text-[14px] font-[Degular] text-[#56616b] ">Jonathan Smart</h3>
                        </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[16px] text-[#131316] ">USD 600</h2>
                            <h3 className="text-[#56616B] text-[14px] font-[Degular]">April 03, 2022</h3>
                        </div>
                    </div>
                    <div className="flex justify-between mx-2 mt-8">
                        <div className="flex justify-between items-center gap-4">
                            <span className=" rounded-full p-4 bg-[#E3FCF2]">
                                {call1}
                            </span>
                            <div>
                                <h2 className=" text-[#131316] text-[16px] font-[Degular]">How to build and Online Brand</h2>
                                <h3 className="text-[14px] font-[Degular] text-[#56616b] ">Delvan Ludacris</h3>
                            </div>
                        </div>
                        <div>
                        <h2 className="font-bold text-[16px] text-[#131316] ">USD 600</h2>
                        <h3 className="text-[#56616B] text-[14px] font-[Degular]">April 03, 2022</h3>
                        </div>
                    </div>
                    <div className="flex justify-between mx-2 mt-8">
                        <div className="flex justify-between items-center gap-4">
                            <span className="rounded-full p-4 bg-[#F9E3E0]">
                                {call2}
                            </span>
                            <div>
                            <h2 className=" text-[#131316] text-[16px] font-[Degular]">Cash Withdrawal</h2>
                            <h3 className="text-[14px] font-[Degular] text-[#56616b] ">Successfull</h3>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[16px] text-[#131316]">USD 600</h2>
                            <h3 className="text-[#56616B] text-[14px] font-[Degular]">April 03, 2022</h3>
                        </div>
                    </div>
                    <div className="flex justify-between mx-2 mt-8">
                        <div className="flex justify-between items-center gap-4">
                            <span className="rounded-full p-4 bg-[#E3FCF2]">
                                {call1}
                            </span>
                            <div>
                            <h2 className=" text-[#131316] text-[16px] font-[Degular]">Support My Outreach</h2>
                            <h3 className="text-[14px] font-[Degular] text-[#56616b]">Shawn Kane</h3>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[16px] text-[#131316] ">USD 600</h2>
                            <h3 className="text-[#56616B] text-[14px] font-[Degular]">April 03, 2022</h3>
                        </div>
                    </div>
                    <div className="flex justify-between mx-2 mt-8">
                        <div className="flex justify-between items-center gap-4">
                            <span className="rounded-full p-4 bg-[#F9E3E0]">
                                {call2}
                            </span>
                            <div>
                            <h2 className=" text-[#131316] text-[16px] font-[Degular]">Cash Withdrawal</h2>
                            <h3 className="text-[14px] font-[Degular] text-[#56616b]">Pending</h3>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[16px] text-[#131316] ">USD 600</h2>
                            <h3 className="text-[#56616B] text-[14px] font-[Degular]">April 03, 2022</h3>
                        </div>
                    </div>
                    <div className="flex justify-between mx-2 mt-8">
                        <div className="flex justify-between items-center gap-4">
                            <span className="rounded-full p-4 bg-[#E3FCF2]">
                                {call1}
                            </span>
                            <div>
                            <h2 className=" text-[#131316] text-[16px] font-[Degular]">Learn how to Pitch your idea</h2>
                            <h3 className="text-[14px] font-[Degular] text-[#56616b]">Dujon Jericho</h3>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[16px] text-[#131316] ">USD 600</h2>
                            <h3 className="text-[#56616B] text-[14px] font-[Degular]">April 03, 2022</h3>
                        </div>
                    </div>
        </section>
        
    )
}
export default Home;