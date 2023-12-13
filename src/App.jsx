import { useState } from "react";
import Convert from "./Convert";

export default function App() {
    const [req, setReq] = useState('');
    const [res, setRes] = useState([]);

    const handleConvert = () => {
        setRes((prevRes) => [...prevRes, new Convert(req)]);
        setReq('');
    };

    return (
        <>
            <div className="flex justify-center items-center" style={{ minHeight: "80vh" }}>
                <div className="flex justify-center items-center flex-col">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold my-4 text-zinc-800">Genetic Code Converter</h1>
                        <div className="flex mb-4">
                            <input
                                className="px-3 rounded-l-md py-1 text-md rounded-try w-full bg-gray-50 border border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-300 focus:ring-white transition duration-300 ease-in-out"
                                placeholder="DNA"
                                onChange={(e) => setReq(e.target.value.toLocaleUpperCase())}
                                value={req}
                            />
                            <button
                                className="text-white bg-orange-500 py-1 px-4 rounded-r-md hover:bg-orange-600 transition duration-300 ease-in-out w-auto"
                                onClick={handleConvert}
                            >
                                Convert
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {res.map((v, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="rounded-md border border-gray-300 p-4 mb-4 bg-gray-50">
                                    <p className="text-md font-bold">DNA ที่ป้อน</p>
                                    <p className="text-md mb-3">3' {v.DNA} 5'</p>
                                    <p className="text-md font-bold">mRNA ที่แปลง จาก DNA</p>
                                    <p className="text-md mb-3">5' {v.mRNA} 3'</p>
                                    <p className="text-md font-bold">tRNA ที่แปลง จาก mRNA</p>
                                    <p className="text-md mb-3">3' {v.tRNA} 5'</p>
                                    <p className="text-md font-bold">Codons ที่แบ่ง จาก mRNA</p>
                                    <p className="text-md mb-3">{v.codons}</p>
                                    <p className="text-md font-bold">จำนวน Codons</p>
                                    <p className="text-md mb-3">{v.count}</p>
                                    <p className="text-md font-bold">Amino Acids ที่แปลง จาก Codons</p>
                                    <p className="text-md mb-3">{v.amino}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col py-4 text-gray-400" style={{height: "20vh"}}>
                <p className="text-md">Made with 🧠 by Mr Maxing</p>
                <p className="text-md font-bold">Support True Money Wallet</p>
                <p className="text-md">Parinya Pantimit</p>
                <p className="text-md">062-920-5280</p>
            </div>
        </>
    );
}
