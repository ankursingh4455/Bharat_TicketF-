import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5521';
  console.log(backendUrl);
  export default function Table() {

    const [data, setData] = useState([{ name: '---', from: '---', to: '---', date: '---', isBooked: false }]);


    useEffect(()=>{
        axios.get(`${backendUrl}/train-tickets`).then(response => {
            const trains = response?.data?.map((train: any) => {
                return ({
                    name: train.trainName, from: train.from, to: train.to, date: train.date.split("T")[0], isBooked: train.isSold
                });
            });
            setData(trains);
        }).catch((err) => {
            window.alert("Some error occured!!");
            console.log(err);
        })
    }, []);

    return (
      <div id="table_list" className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Trains</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the listed and available trains.
            </p>
          </div>
          {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add user
            </button>
          </div> */}
        </div>
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Train Name / Number
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  From
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  To
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Date
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Call</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data?.map((train) => (
                <tr className={`${train.isBooked && "bg-red-200"}`} key={train.name}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {train.name}
                    <dl className="font-normal lg:hidden">
                      <dt className="sr-only">Train Name / Number</dt>
                      <dd className="mt-1 truncate text-gray-700">{train.from}</dd>
                      <dt className="sr-only sm:hidden">{train.from}</dt>
                      <dd className="mt-1 truncate text-gray-500 sm:hidden">{train.to}</dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{train.from}</td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{train.to}</td>
                  <td className="px-3 py-4 text-sm text-gray-500">{train.date}</td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    
                    {train.isBooked ? (
                        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        Booked
                      </span>
                    ) : (<a href="tel:6392612061" className="text-indigo-600 hover:text-indigo-900">
                    Call<span className="sr-only">, {train.name}</span>
                  </a>)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  