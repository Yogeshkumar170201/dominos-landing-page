
const MenuList = [
  "Menu", "Veg Pizza", "Chicken Pizza", "Pasta", "Pizza Crust", "Beverages", "Pizza Mania", 
  "Burger Pizza", "Farm House pizza", "Veg Margherita Pizza", "Cheese Corn Pizza", "Double Cheese Margherita Pizza", "Paneer Makhani Pizza",
  "Choco Lava Cake", "Roasted Chicken Wings Peri Peri", "Garlic Bread", "Stuffed Garlic Bread", "Paneer Zingy Parcel", "Fresh Pan Pizza",
  "New Hand Tossed Pizza", "Classic Hand Tossed Pizza", "Golden Corn Pizza", "Extra Cheese Pizza", "Wednesday Offer - Pizza Buy 1 Get 1"
];

const ButtonDiv = () => {
  return (
    <div className="flex flex-row flex-wrap space-x-[1rem] mt-[2rem] mb-[2rem] p-[1rem]">
      {
        MenuList.map((item, index)=>{
          return <button key={index} className="bg-[#F3ECEC] p-[0.1rem] rounded-sm text-[0.7rem] border-[0.1rem] h-[2rem] mt-[1rem] shadow-sm shadow-black">{item}</button>
        })
      }
    </div>
  )
}

export default ButtonDiv