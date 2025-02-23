import Svg, { Path } from "react-native-svg";

const Caret = ({ color }: { color: string }) => {
  return (
    <Svg width="24" height="24" fill={color} viewBox="0 0 16 16">
      <Path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </Svg>
  );
};

export default Caret;
