import create from "zustand/react";
import {persist} from "zustand/middleware";
import axios from "axios";

const authStore = (set:any) => ({
    userProfile:null,
    addUser: (user:any) => set({ userProfile:user})
})