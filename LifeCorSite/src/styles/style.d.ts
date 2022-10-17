import "styled-components";

import theme from "../theme/theme";

import { ITheme } from "../types/types";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
