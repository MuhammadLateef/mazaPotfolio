import React from 'react'
import Image from 'next/image';
import work1 from "../../public/Assets/images/Home/work/work1.svg";
import work2 from "../../public/Assets/images/Home/work/work2.svg";
import work3 from "../../public/Assets/images/Home/work/work3.svg";
import work4 from "../../public/Assets/images/Home/work/readmore.svg";
const page = () => {
    return (
        <div>
            <div className='bg-dark' id='work'>
                <div className="max-w-[85rem] mx-auto">
                    <h1 className="mt-4 mb-4 text-contentc text-[14px] font-medium rounded-full py-[4px] px-[20px] bg-[#374151] text-center lg:w-[8%] md:md:w-[20%] w-[40%] mx-auto">Work</h1>
                    <div className="w-[90%] mx-auto text-center">
                        <p className=' my-4 text-contentc text-[20px]'>Some of the noteworthy projects I have built:</p>
                    </div>
                    <div className="">
                        <div className="w-[100%] my-[50px] mx-auto flex lg:flex-row flex-col justify-between items-center" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <div className="lg:w-[45%] w-full p-[32px] rounded-[12px] bg-[#1F2937] md:mt-0 mt-4">
                                <a href="https://deploy-billioner.vercel.app/" target="_blank">
                                    <Image width={1000} height={100} className='w-full' src={work3} alt='img' />
                                </a>
                            </div>
                            <div className="lg:w-[45%] w-[90%] lg:mt-0 mt-8">
                                <h2 className='text-[20px] font-semibold text-contentc'>Billioners </h2>
                                <p className='text-contentc text-[16px] mt-[24px]'>Rupani Billioners is an innovative web3 project that aims to revolutionize the concept of digital ownership and wealth management through blockchain technology. As the lead developer, I spearheaded the development of the frontend infrastructure for this decentralized application (dApp).
                                </p>
                                <div className="flex flex-wrap mt-[24px] items-start justify-start">
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>React</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Next.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Javascript</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Nest.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Material UI</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Tailwind css</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Bootstrapt</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Git</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Solidity</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Smart Contracts</a>
                                </div>
                                <Image width={100} height={100} className='h-10 w-10 mt-[24px]' src={work4} alt='img' />
                            </div>
                        </div>
                        <div className="w-[100%] my-[50px] mx-auto flex lg:flex-row-reverse flex-col justify-between items-center" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <div className="lg:w-[45%] w-full p-[32px] rounded-[12px] bg-[#1F2937] lg:mt-0 mt-4">
                                <a href="https://trivial-game.vercel.app/" target='_blank'>
                                    <Image width={1000} height={100} className='w-full border-4 border-gray-950' src={work2} alt='img' />
                                </a>
                            </div>
                            <div className="lg:w-[45%] w-[90%] lg:mt-0 mt-8">
                                <h2 className='text-[20px] font-semibold text-contentc'>TRIVIAL GAME</h2>
                                <p className='text-contentc text-[16px] mt-[24px]'>TRIVIAL GAME is an innovative NFT-based gaming platform that offers users the opportunity to participate in trivia games using tokens as entry fees. As the frontend developer, I was responsible for designing and implementing the user interface for this engaging gaming experience.</p>
                                <h2 className='text-contentc text-[18px] mt-[24px]'>Feactures</h2>
                                <p className='text-contentc text-[16px] mt-[24px]'>
                                    <span className='font-bold'>Frontend: </span>  Next.js, React.js, Web3.js <br />
                                    <span className='font-bold'> NFT Integration: </span>  OpenZeppelin <br />
                                    <span className='font-bold'>
                                        Blockchain: </span> Ethereum <br />
                                    <span className='font-bold'>
                                        Token Standard: </span> ERC-20
                                </p>

                                <div className="flex flex-wrap mt-[24px] items-start justify-start">
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>React</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Next.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Javascript</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Nest.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Material UI</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Tailwind css</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Bootstrapt</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Git</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Solidity</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Smart Contracts</a>
                                </div>
                                <Image width={100} height={100} className='h-10 w-10 mt-[24px]' src={work4} alt='img' />
                            </div>
                        </div>
                        <div className="w-[100%] my-[50px] mx-auto flex lg:flex-row flex-col justify-between items-center" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <div className="lg:w-[45%] w-full p-[32px] rounded-[12px] bg-[#1F2937] lg:mt-0 mt-4">
                                <a href="https://65f172d92102febd8f288244--inspiring-gelato-6696cb.netlify.app/" target='_blank'>
                                    <Image width={1000} height={100} className='w-full' src={work1} alt='img' />
                                </a>
                            </div>
                            <div className="lg:w-[45%] w-[90%] lg:mt-0 mt-8">
                                <h2 className='text-[20px] font-semibold text-contentc'>VAPEMEUP</h2>
                                <p className='text-contentc text-[16px] mt-[24px]'>VAPEMEUP is an e-commerce platform dedicated to providing a wide range of vaping products and accessories to enthusiasts and beginners alike. As the lead developer and project manager, I spearheaded the creation of this dynamic online store from inception to completion.
                                    User-friendly Interface: Designed a sleek and intuitive user interface to enhance the shopping experience for customers.
                                    Product Catalog: Curated a diverse catalog of high-quality vaping products, including e-liquids, vaping devices, coils, and accessories.
                                    Secure Checkout: Implemented a secure and seamless checkout process, incorporating payment gateways to ensure smooth transactions.
                                    Responsive Design: Developed a responsive design that adapts seamlessly to various devices and screen sizes, optimizing accessibility for users.
                                    Search Functionality: Integrated robust search functionality to allow users to easily find their desired products.
                                    </p>
                                <div className="flex flex-wrap mt-[24px] items-start justify-start">
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>React</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Next.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Javascript</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Nest.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Material UI</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Tailwind css</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Bootstrapt</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Git</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Solidity</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Smart Contracts</a>
                                </div>
                                <Image width={100} height={100} className='h-10 w-10 mt-[24px]' src={work4} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;