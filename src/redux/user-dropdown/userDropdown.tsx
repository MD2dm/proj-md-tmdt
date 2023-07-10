import { createSlice } from "@reduxjs/toolkit"

export const userDropdown = createSlice({
  name: "out",
  initialState: {
    clickOut: false,
  },
  reducers: {
    click: (state, { payload }) => ({
      ...state,
      showUser: payload
    })
  }
})

export const { click } = userDropdown.actions

export default userDropdown.reducer