import { combineReducers } from "@reduxjs/toolkit";

import loading from "@/utils/redux/slice/loading";
import inventaris from "@/utils/redux/slice/inventaris";
import kategori from "@/utils/redux/slice/kategori";
import lab from "@/utils/redux/slice/lab";
import user from "@/utils/redux/slice/user";
import alert from "@/utils/redux/slice/alert";

const rootReducer = combineReducers({
  alert,
  loading,
  inventaris,
  kategori,
  lab,
  user,
});

export default rootReducer;
