import { useRef, useState } from "react";
import OtpInput from "react-otp-input";
import CountDownAnimation from "./CountDownAnimation";

const InputOTP = (props) => {
  const childRef = useRef();
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => {
    setOtp(otp);
    props.setUserOTPParent(otp);
  };

  const handleConfirmOTP = () => {
    props.handleSubmitOTP();
  };

  const handleClear = () => {
    childRef.current.resetTimer();
  };
  return (
    <div className="input-otp-container">
      <div className="title">Enter verification code</div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={"input-customize"}
      />
      <div className="timer">
        <CountDownAnimation
          setIsDisableBtn={props.setIsDisableBtn}
          ref={childRef}
        />
      </div>
      <div className="action">
        <button
          className="clear"
          onClick={() => handleClear()}
          disabled={!props.isDisableBtn}
        >
          Clear
        </button>
        <button
          className="confirm"
          onClick={() => handleConfirmOTP()}
          disabled={props.isDisableBtn}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default InputOTP;
