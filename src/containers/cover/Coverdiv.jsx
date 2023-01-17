import { Button } from "@mui/material"
import React from "react"
import "./Coverdiv.css"
const Coverdiv = () => {
  const serviceList = [
    "Looking For",
    "Commercial Office",
    "Commercial Land",
    "Commercial Building",
  ]
  const cityList = ["Select City", "Noida", "Hyderabad", "Cochin", "Mumbai"]
  return (
    <>
      <div className="coverImgDiv">
        <div className="bussinessCard ">
          <span className="cardHead">
            Choose from 25,00+ Spaces for your Business
          </span>
          <p className="cardText">Get inspired and find your perfect place</p>
          <select type="text" className="form-control inputs mb-2">
            {serviceList.map((item) => {
              return <option value={item}>{item}</option>
            })}
          </select>
          <select type="text" className="form-control inputs mb-2">
            {cityList.map((item) => {
              return <option value={item}>{item}</option>
            })}
          </select>
          <div className="buttonD">
            <Button
              className="searchButton w-100"
              style={{ backgroundColor: "#012b72" }}
              variant="contained"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coverdiv
