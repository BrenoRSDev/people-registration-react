import { default as ButtonMui } from "@mui/material/Button";
import { CustomButtonProps } from "../../../interfaces/CustomButtonProps";
import { BaseButtonConfig } from "../../../utils/BaseButtonConfig";

function Button(props: CustomButtonProps) {
  return (
    <ButtonMui {...BaseButtonConfig} {...props}>
      {props.children}
    </ButtonMui>
  );
}

export default Button;
