"use client"
import { useEffect, useState } from "react";
import Spreadsheet, { Matrix } from "react-spreadsheet";

import { MyResponsiveLine } from "./line";
import { MyResponsiveBar } from "./bar";
import Dropzone from "react-dropzone";


export default function Home() {

  const [showModal, setShowModal] = useState(false)
  const [processing, setProcessing] = useState(false)

  const [data, setData] = useState<Matrix<{ value: string, readOnly: boolean }>>([
    [{ value: "", readOnly: false }, { value: "Q1", readOnly: false }, { value: "Q2", readOnly: false }, { value: "Q3", readOnly: false }, { value: "Q4", readOnly: false }],
    [{ value: "Units Sold", readOnly: false }, { value: "1000", readOnly: false }, { value: "2000", readOnly: false }, { value: "4000", readOnly: false }, { value: "8000", readOnly: false }],
    [{ value: "Total Sales", readOnly: false }, { value: "12000", readOnly: false }, { value: "24000", readOnly: false }, { value: "48000", readOnly: false }, { value: "96000", readOnly: false }],
    [{ value: "Gross Margin", readOnly: false }, { value: "7000", readOnly: false }, { value: "14000", readOnly: false }, { value: "28000", readOnly: false }, { value: "56000", readOnly: false }],
    [{ value: "Gross Margin %", readOnly: false }, { value: "58.33%", readOnly: false }, { value: "58.33%", readOnly: false }, { value: "58.33%", readOnly: false }, { value: "58.33%", readOnly: false }],
    [{ value: "", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }],
    [{ value: "Total Operating Expenses", readOnly: false }, { value: "9000", readOnly: false }, { value: "9000", readOnly: false }, { value: "9000", readOnly: false }, { value: "9000", readOnly: false }],
    [{ value: "Net Income", readOnly: false }, { value: "-2000", readOnly: false }, { value: "5000", readOnly: false }, { value: "19000", readOnly: false }, { value: "47000", readOnly: false }],
    [{ value: "Net Margin %", readOnly: false }, { value: "-16.67%", readOnly: false }, { value: "-20.83%", readOnly: false }, { value: "39.58%", readOnly: false }, { value: "48.96%", readOnly: false }],
  ])

  const [assumptionsData, setAssumptionsData] = useState<Matrix<{ value: string, readOnly: boolean }>>([
    [{ value: "Cost Per Unit", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }, { value: "Total Cost Per Unit", readOnly: false }, { value: "5", readOnly: false }],
    [{ value: "Beef", readOnly: false }, { value: "2", readOnly: false }, { value: "", readOnly: false }, { value: "Price Per Unit", readOnly: false }, { value: "12", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }, { value: "3230", readOnly: false }],
    [{ value: "Chicken", readOnly: false }, { value: "1", readOnly: false }, { value: "", readOnly: false }, { value: "Warehouse Rent per Quarter", readOnly: false }, { value: "9000", readOnly: false }],
    [{ value: "Lettuce", readOnly: false }, { value: "1", readOnly: false }, { value: "", readOnly: false }, { value: "Units sold Q1", readOnly: false }, { value: "1000", readOnly: false }],
    [{ value: "Labor", readOnly: false }, { value: "1", readOnly: false }, { value: "", readOnly: false }, { value: "Quarter-over-Quarter Growth", readOnly: false }, { value: "100%", readOnly: false }]
  ])

  const newAssumptionsData = [
    [{ value: "Cost Per Unit", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }, { value: "Total Cost Per Unit", readOnly: false }, { value: "7", readOnly: false }],
    [{ value: "Beef", readOnly: false }, { value: "4", readOnly: false }, { value: "", readOnly: false }, { value: "Price Per Unit", readOnly: false }, { value: "14", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }, { value: "3230", readOnly: false }],
    [{ value: "Chicken", readOnly: false }, { value: "1", readOnly: false }, { value: "", readOnly: false }, { value: "Warehouse Rent per Quarter", readOnly: false }, { value: "9000", readOnly: false }],
    [{ value: "Lettuce", readOnly: false }, { value: "1", readOnly: false }, { value: "", readOnly: false }, { value: "Units sold Q1", readOnly: false }, { value: "1000", readOnly: false }],
    [{ value: "Labor", readOnly: false }, { value: "1", readOnly: false }, { value: "", readOnly: false }, { value: "Quarter-over-Quarter Growth", readOnly: false }, { value: "100%", readOnly: false }]
  ]
  
  const newSalesData = [
    [{ value: "", readOnly: false }, { value: "Q1", readOnly: false }, { value: "Q2", readOnly: false }, { value: "Q3", readOnly: false }, { value: "Q4", readOnly: false }],
    [{ value: "Units Sold", readOnly: false }, { value: "1000", readOnly: false }, { value: "2000", readOnly: false }, { value: "4000", readOnly: false }, { value: "8000", readOnly: false }],
    [{ value: "Total Sales", readOnly: false }, { value: "14000", readOnly: false }, { value: "28000", readOnly: false }, { value: "56000", readOnly: false }, { value: "112000", readOnly: false }],
    [{ value: "Total COGS", readOnly: false }, { value: "7000", readOnly: false }, { value: "14000", readOnly: false }, { value: "28000", readOnly: false }, { value: "56000", readOnly: false }],
    [{ value: "Gross Margin", readOnly: false }, { value: "7000", readOnly: false }, { value: "14000", readOnly: false }, { value: "28000", readOnly: false }, { value: "56000", readOnly: false }],
    [{ value: "Gross Margin %", readOnly: false }, { value: "50.00%", readOnly: false }, { value: "50.00%", readOnly: false }, { value: "50.00%", readOnly: false }, { value: "50.00%", readOnly: false }],
    [{ value: "", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }, { value: "", readOnly: false }],
    [{ value: "Total Operating Expenses", readOnly: false }, { value: "9000", readOnly: false }, { value: "9000", readOnly: false }, { value: "9000", readOnly: false }, { value: "9000", readOnly: false }],
    [{ value: "Net Income", readOnly: false }, { value: "-2000", readOnly: false }, { value: "5000", readOnly: false }, { value: "19000", readOnly: false }, { value: "47000", readOnly: false }],
    [{ value: "Net Margin %", readOnly: false }, { value: "-14.29%", readOnly: false }, { value: "17.86%", readOnly: false }, { value: "33.93%", readOnly: false }, { value: "41.96%", readOnly: false }],
  ]

  useEffect(() => {
  }, [data])

  const getTotalSalesData = () => {
    let d = []

    for (const i in data) {
      if (data[i][0].value == "Total Sales") {
        for (let j = 1; j < data[i].length; ++j) {
          d.push(
            { "x": (j - 1) * 4, "y": parseFloat(data[i][j].value.replace(/,/g, '')) }
          )
        }
      }
    }

    return d
  }

  const getBarData = () => {
    let d = []
    for (let j = 1; j < 5; ++j) {
      let z = {}
      for (let i = 0; i < 9; ++i) {
        console.log(111, i, j, data[i][j])
        if (i == 0) {
          z["Period"] = data[i][j].value
        }

        else if (i == 2) {
          z["Total Sales"] = parseFloat(data[i][j].value.replace(/,/g, ''))
        }

        else if (i == 3) {
          z["Gross Margin"] = parseFloat(data[i][j].value.replace(/,/g, ''))
        }

        else if (i == 7) {
          z["Net Income"] = parseFloat(data[i][j].value.replace(/,/g, ''))
        }
      }
      d.push(z)
    }

    return d
  }

  const lineData =
    [
      {
        "id": "Total Sales",
        "color": "hsl(43, 70%, 50%)",
        "data": getTotalSalesData()
      }
    ]

  const barData = getBarData()

  return (
    <div className="container mx-auto p-4">
      <div className={`${showModal ? 'blur-sm' : ''}`}>
        <button onClick={() => setShowModal(true)} data-modal-target="default-modal" data-modal-toggle="default-modal" class="mx-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Upload ✨
        </button>
        <div className="mt-4 grid grid-cols-2 gap-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Assumptions</h2>
            <Spreadsheet data={assumptionsData} onChange={setAssumptionsData as (data: Matrix<{ value: string; }>) => void} />
            <h2 className="my-4 text-2xl font-bold">Profit and Loss at a Glance</h2>
            <Spreadsheet data={data} onChange={setData as (data: Matrix<{ value: string; }>) => void} />
          </div>
          <div>
            <div className="">
              <h2 className="mb-4 text-2xl font-bold">Monthly Sales Forecast</h2>
              <div style={{ height: "400px" }} className="ml-[-0px] mt-[-40px]">
                <MyResponsiveLine
                  data={lineData}
                />
              </div>
              <h2 className="my-2 text-2xl font-bold">Quarterly Sales, Gross Margin, Net Profit</h2>
              <div style={{ height: "400px" }} className="ml-[-8px] mt-[-40px]">
                <MyResponsiveBar
                  data={barData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="flex items-center justify-center h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow ">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 class="text-xl font-semibold text-gray-900">
                  Upload
                </h3>
                <button onClick={() => setShowModal(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-4 md:p-5 space-y-4">
                {!processing && (
                  <Dropzone onDrop={acceptedFiles => { setProcessing(true); setTimeout(() => {setAssumptionsData(newAssumptionsData); setData(newSalesData); setShowModal(false); setProcessing(false)}, 5000) }}>
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>Drag a research report, supplier quote, etc here</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                )}
                {processing && (
                  <div className="flex flex-rows items-center">
                    <iframe src="https://giphy.com/embed/zPbnEgxsPJOJSD3qfr" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    <iframe src="https://giphy.com/embed/2bYewTk7K2No1NvcuK" width="150" height="150" frameBorder="0" class="ml-4" allowFullScreen></iframe>
                    <iframe src="https://giphy.com/embed/gIhgev1w5UVjDj25Ul" width="150" height="150" frameBorder="0" class="ml-4" allowFullScreen></iframe>
                  </div>
                )}
              </div>
              <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                <button onClick={() => setShowModal(false)} data-modal-hide="static-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
