import axios from "axios"
import React, { useEffect, useState } from "react"
import { category, menuText } from "../assets/data"
import Carousel from "../containers/carousel/Carousel"
import Coverdiv from "../containers/cover/Coverdiv"
import Footer from "../containers/footer/Footer"
import Menubar from "../containers/menubar/Menubar"
import Navbar from "../containers/navbar/Navbar"
import Sidebar from "../containers/sidebar/Sidebar"
import "./Homepage.css"
const Homepage = () => {
  const [side, setSide] = useState(false)
  const [totalData, setTotalData] = useState([])
  const [loading, setLoading] = useState(true)
  const [properties, setProperties] = useState([])
  useEffect(() => {
    fetchdata()
  }, [])
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://api.xentice.com/api/postadSelect"
      )
      const items = response.data
      console.log("response=", response.data)
      setTotalData(items)
      const propName = items.map((item) => JSON.parse(item.propertyType))
      setProperties([
        ...new Set(propName.map((propertyType) => propertyType.name)),
      ])
      // console.log("data=", [
      //   ...new Set(propName.map((propertyType) => propertyType.name)),
      // ])
    } catch (error) {
      console.log("async err", error)
    }
    setLoading(false)
  }
  return (
    <>
      {!loading && (
        <div className="homepageContainer">
          <Navbar onOpen={() => setSide(true)} />
          {side && <Sidebar onClose={() => setSide(false)} />}
          <Menubar bgwhite={false} menuData={menuText} />
          <Coverdiv />
          <Menubar bgwhite={true} menuData={category} />
          <div className="container1">
            <div className="homecardContainer">
              {properties.map((item) => {
                return <Carousel propertyType={item} data={totalData} />
              })}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default Homepage
