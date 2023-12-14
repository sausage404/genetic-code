import Swal from "sweetalert2";
import { useState } from "react";
import Convert from "./Convert";

export default function App() {
    const [req, setReq] = useState('');
    const [res, setRes] = useState([]);

    const handleConvert = (e) => {
        e.preventDefault();
        if (req === '')
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter DNA',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            });
        if (!/^[ATCG]+$/.test(req))
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter DNA only',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            });
        setRes((prevRes) => [...prevRes, new Convert(req)]);
        setReq('');
    };

    return (
        <>
            <div className="flex justify-center items-center" style={{ minHeight: "80vh" }}>
                <div className="flex justify-center items-center flex-col">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold my-4 text-zinc-800">Genetic Code Converter</h1>
                        <form onSubmit={handleConvert} className="flex mb-4">
                            <input
                                className="px-3 rounded-l-md py-1 text-md rounded-try w-full bg-gray-50 border border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-300 focus:ring-white transition duration-300 ease-in-out"
                                placeholder="DNA"
                                onChange={(e) => setReq(e.target.value.toLocaleUpperCase())}
                                value={req}
                            />
                            <button
                                type="submit"
                                className="text-white bg-green-500 py-1 px-4 rounded-r-md hover:bg-green-600 transition duration-300 ease-in-out w-auto focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-300 focus:ring-white"
                            >
                                Convert
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-wrap max-w-screen-xl justify-center">
                        {res.map((v, i) => (
                            <div key={i} className="rounded-md border border-gray-300 p-4 m-4 bg-gray-50 block break-all">
                                <button
                                    className="float-right bg-orange-500 text-white rounded-md p-2 hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-300 focus:ring-white"
                                    onClick={() => setRes((prevRes) => prevRes.filter((_, index) => index !== i))}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg>
                                </button>
                                <h4 className="text-xl font-bold mb-3">Result {i + 1}</h4>
                                <p className="text-md font-semibold"><span className="font-bold">DNA</span> ที่ป้อน</p>
                                <p className="text-md mb-3">3' {v.DNA} 5'</p>
                                <p className="text-md font-semibold"><span className="font-bold">mRNA</span> ที่แปลง จาก DNA</p>
                                <p className="text-md mb-3">5' {v.mRNA} 3'</p>
                                <p className="text-md font-semibold"><span className="font-bold">tRNA</span> ที่แปลง จาก mRNA</p>
                                <p className="text-md mb-3">3' {v.tRNA} 5'</p>
                                <p className="text-md font-semibold"><span className="font-bold">Codons</span> ที่แปลง จาก mRNA</p>
                                <p className="text-md mb-3">{v.codons}</p>
                                <p className="text-md font-semibold"><span className="font-bold">จำนวน</span> Codons</p>
                                <a className="text-md mb-3">{v.count} ตัว</a>
                                <p className="text-md font-semibold"><span className="font-bold">Amino</span> ที่แปลง จาก Codons</p>
                                <a className="text-md mb-3">{v.amino}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col py-4 text-gray-400" style={{ height: "20vh" }}>
                <p className="text-md">Made with 🧠 by Mr Maxing</p>
                <p className="text-md font-bold">Support True Money Wallet</p>
                <p className="text-md">Parinya Pantimit</p>
                <p className="text-md">062-920-5280</p>
            </div>
        </>
    );
}
