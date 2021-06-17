import { combineReducers } from "@reduxjs/toolkit";

import loading from "@/utils/redux/slice/loading";
import inventaris from "@/utils/redux/slice/inventaris";
import kategori from "@/utils/redux/slice/kategori";
import lab from "@/utils/redux/slice/lab";
import user from "@/utils/redux/slice/user";
import alert from "@/utils/redux/slice/alert";
import peminjaman from "@/utils/redux/slice/peminjaman";
import submisi from "@/utils/redux/slice/submisiPeminjaman";

const rootReducer = combineReducers({
  alert,
  loading,
  kategori,
  lab,
  inventaris,
  peminjaman,
  submisi,
  user,
});

export default rootReducer;
