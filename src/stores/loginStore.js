import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLoggedIn: false,
  user: "Venera",
  login: (email, code) => {
    //TODO: write the logic
  },
}));

export default useLoginStore;
