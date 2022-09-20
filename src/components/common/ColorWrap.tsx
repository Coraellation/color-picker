import React from "react";
import ColorProvider, {
  useColor,
  withColorProvider,
} from "../../context/useColor";
import { Color, ColorObject } from "../../types/colors";

type Props = {
  onSwatchHover?: (color: ColorObject, event: React.MouseEvent) => void;
  onChangeComplete?: (color: ColorObject) => void;
  color?: Color;
  defaultColor?: Color;
};

export const ColorWrap = (Picker: any) => {
  function ColorPicker({
    onSwatchHover,
    onChangeComplete,
    color,
    defaultColor,
  }: Props) {
    const { colors, changeColor } = useColor();

    return (
      <ColorProvider
        color={color}
        defaultColor={defaultColor}
        onChangeComplete={onChangeComplete}
        onSwatchHover={onSwatchHover}
      >
        <Picker {...colors} onChange={changeColor} />
      </ColorProvider>
    );
  }

  return withColorProvider(ColorPicker);
};

export default ColorWrap;
