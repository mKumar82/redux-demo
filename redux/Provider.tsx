// redux/provider.tsx
"use client"; // Enable client components

import { Provider } from "react-redux";
import store from "./store";

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;