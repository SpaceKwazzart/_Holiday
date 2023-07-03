import { appStore } from "app/store/appStore";
import { Provider } from "react-redux";

export const withStore = (component: () => React.ReactNode) => () => (
    <Provider store={appStore}>
      {component()}
    </Provider>
);
