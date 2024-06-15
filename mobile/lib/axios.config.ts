import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "axios";


export const axios = _.create({
    baseURL: "http://10.5.222.106:8000",
});

export default axios;