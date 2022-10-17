import Lottie from "react-lottie";

type ILottieProps = {
  animation: Object;
  width: string;
  height: string;
};

function LottieAnimation({ animation, width, height }: ILottieProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width={width} height={height} />;
}

export { LottieAnimation };
