/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack } from "@mui/material"
import { categories } from "./utils/constant"




const Sidebar = ({ selectmenu, setSelectmenu }) => {
  return (
    <Stack direction="row" sx={{ flexDirection: { md: "column" }, overflowY: "auto", height: { sx: "auto", md: "95%" } }}>
      {categories.map((category) =>
      (<button className="category-btn"
        onClick={() => setSelectmenu(category.name)}
        key={category.name}
        style={{ background: category.name === selectmenu && "#FC1503", color: "white" }}>
        <span style={{ color: category.name === selectmenu ? "white" : "red", marginRight: 15 }}>{category.icon}</span>
        <span>{category.name}</span>
      </button>)

      )}
    </Stack>
  )
}

export default Sidebar  