import { ThemeConfig } from "antd";

export const antdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#39CDCC",
  },
  components: {
    Input: {
      controlHeight: 50,
      colorBorder: "#545F7D26",
      colorTextPlaceholder: "#545F7D",
      fontFamily: "avenir-next-thin",
    },
    Button: {
        colorBgContainerDisabled: "#39cdcc20",
        borderColorDisabled: "#39cdcc20",
        colorTextDisabled: "white"
    }
  },
};
