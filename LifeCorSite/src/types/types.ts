type IUser = {
  id: string;
  name: string;
  email: string;
};

type ITheme = {
  bg: string;
  font_color: string;
  transparent_black: string;

  procedure: {
    font_color: string;
  };
};

type IImgList = {
  src: string;
};

export type { IUser, ITheme, IImgList };
