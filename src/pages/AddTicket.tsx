import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5521";

export default function AddTicket() {

    const [data, setData] = useState({
        trainName: "",
        trainNumber: "",
        from: "",
        to: "",
        date: "",
        time: "",
        currentStatus: "",
        confirmChance: 100,
        pnrNumber: "",
        isSold: false
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function submitHandler(){
        setIsLoading(true);
        axios.post(`${backendUrl}/train-tickets`, data)
        .then(res => {
            console.log("DATA >> ", res);
            message.success("Ticket added!");
        }).catch(err => {
            console.log(err);
            message.error("You are not logged in! Please login first...");
            setTimeout(()=>{navigate("/auth");}, 2000);
            })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    return (
        <div className="p-8 md:p-16">

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Ticket Details</h3>
                            <p className="mt-1 text-sm text-gray-600">This information is to add a new ticket</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Train Name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                value={data.trainName}
                                                onChange={(e) => {
                                                    setData(prev => {
                                                        return ({
                                                            ...prev,
                                                            trainName: e.target.value
                                                        });
                                                    });
                                                }}
                                                placeholder="Garib Rath"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Train Number
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                placeholder="12187"
                                                value={data.trainNumber}
                                                onChange={(e) => {
                                                    setData(prev => {
                                                        return ({
                                                            ...prev,
                                                            trainNumber: e.target.value
                                                        });
                                                    });
                                                }}
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                From
                                            </label>
                                            <input
                                                type="text"
                                                name="email-address"
                                                placeholder="NDLS"
                                                value={data.from}
                                                onChange={(e) => {
                                                    setData(prev => {
                                                        return ({
                                                            ...prev,
                                                            from: e.target.value
                                                        });
                                                    });
                                                }}
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                To
                                            </label>
                                            <input
                                                type="text"
                                                name="email-address"
                                                placeholder="Chandigarh"
                                                value={data.to}
                                                onChange={(e) => {
                                                    setData(prev => {
                                                        return ({
                                                            ...prev,
                                                            to: e.target.value
                                                        });
                                                    });
                                                }}
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                PNR Number
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                placeholder="XXXXXXXXXX"
                                                value={data.pnrNumber}
                                                onChange={(e) => {
                                                    setData(prev => {
                                                        return ({
                                                            ...prev,
                                                            pnrNumber: e.target.value
                                                        });
                                                    });
                                                }}
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Date
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                placeholder="YYYY-MM-DD"
                                                value={data.date}
                                                onChange={(e) => {
                                                    setData(prev => {
                                                        return ({
                                                            ...prev,
                                                            date: e.target.value
                                                        });
                                                    });
                                                }}
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                Time
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                placeholder="00:00"
                                                value={data.time}
                                                onChange={(e) => {
                                                    setData(prev => {
                                                        return ({
                                                            ...prev,
                                                            time: e.target.value
                                                        });
                                                    });
                                                }}
                                                id="city"
                                                autoComplete="address-level2"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                Current Status
                                            </label>
                                            <input
                                                type="text"
                                                name="region"
                                                placeholder="WL/01"
                                                value={data.currentStatus}
                                                onChange={(e) => {
                                                    setData(prev => {
                                                        return ({
                                                            ...prev,
                                                            currentStatus: e.target.value
                                                        });
                                                    });
                                                }}
                                                id="region"
                                                autoComplete="address-level1"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                Confirm Chance
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                placeholder="0 - 100"
                                                value={data.confirmChance || 0}
                                                onChange={(e) => {
                                                    setData(prev => {
                                                        return ({
                                                            ...prev,
                                                            confirmChance: parseInt(e.target.value)
                                                        });
                                                    });
                                                }}
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <div className="mt-4 flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="comments"
                                                        name="comments"
                                                        checked={data.isSold}
                                                        onChange={(e) => {
                                                            setData(prev => {
                                                                return ({
                                                                    ...prev,
                                                                    isSold: e.target.checked
                                                                });
                                                            });
                                                        }}
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700">
                                                        is Sold?
                                                    </label>
                                                    <p className="text-gray-500">Is this ticket sold?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        onClick={submitHandler}
                                        type="button"
                                        className="inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        disabled={isLoading}
                                    >
                                        {
                                        isLoading && <span className="animate-spin"><ImSpinner9 /></span>
                                      }
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}