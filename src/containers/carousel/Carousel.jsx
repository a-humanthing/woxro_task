import {
  FavoriteBorder,
  FavoriteOutlined,
  PlaceOutlined,
} from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import { menuText } from "../../assets/data"
import "./Carousel.css"
const Carousel = ({ propertyType, data }) => {
  const [cards, setCards] = useState([])
  const [propertyImage, setPropertyImage] = useState("")
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("")
  useEffect(() => {
    const categoryitem = menuText.find((item) => item.text === propertyType)
    setCategory(categoryitem)
    console.log("property", categoryitem)
    // console.log("propertytype", propertyType)
    setLoading(false)
  }, [])
  let carsouselItem
  let imgurl
  useEffect(() => {
    carsouselItem = data.filter(
      (item) => JSON.parse(item.propertyType).name === propertyType
    )
    setCards(carsouselItem)
    imgurl = JSON.parse(carsouselItem[0].images)
    // console.log("itm-", JSON.parse(carsouselItem[0].images))
    // console.log("url", imgurl[0])
    setPropertyImage(imgurl[0])
  }, [])
  // console.log("data", data)
  console.log("cards=", cards)
  return (
    <>
      {loading && <h1>loading</h1>}
      {!loading && (
        <div className="carouselContainer mx-3">
          <div className="carouselHead ms-2">
            <div className="carouselLeftHead">
              <img
                src={
                  category
                    ? category.icon
                    : "https://www.xentice.com/static/media/engineer.877f1aa6.png"
                }
                alt=""
                className="categoryIcon"
              />
              <span className="carouselHeadTitle">{propertyType}</span>
            </div>
            <div className="carouselRightHead">
              <span className="carouselText text-primary">Explore More</span>
            </div>
          </div>
          <div className="carouselCardContainer">
            {cards.map((item) => {
              return (
                <div className="carouselCard">
                  <img
                    src={JSON.parse(item.images)}
                    className="cardImage"
                    alt=""
                  />
                  <div className="cardBody">
                    <div className="cardName">
                      <span className="cardHeading">
                        {JSON.parse(item.details).title}
                      </span>
                      <FavoriteBorder />
                    </div>
                    <div className="cardLocation">
                      <PlaceOutlined />
                      <span className="locationText">
                        {JSON.parse(item.location).city}
                      </span>
                    </div>
                    <div className="cardRate">
                      <span className="rateText">
                        {JSON.parse(item.details).price
                          ? JSON.parse(item.details).price.rate
                          : "7600"}

                        {JSON.parse(item.details).price
                          ? JSON.parse(item.details).price.type
                          : "Month"}
                      </span>
                    </div>
                    <div className="exploreDiv">
                      <span className="exploreText text-primary h6">
                        Explore Now
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Carousel
