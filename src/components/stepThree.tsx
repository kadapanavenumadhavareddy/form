import { FC, ReactElement } from "react";
import {
  Button,
  Card,
  Elevation,
  Switch,
  Alignment,
  CheckboxCard,
} from "@blueprintjs/core";

const StepThree: FC = (): ReactElement => {
  return (
    <>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
      <CheckboxCard>
        Online Service
        <span>Access to multiplayer games +$1/mo</span>
      </CheckboxCard>
      <CheckboxCard>
        Larger storage
        <span>Extra 1TB of cloud save +$2/mo</span>
      </CheckboxCard>
      <CheckboxCard>
        Customizable profile
        <span>Custom theme on your profile +$2/mo</span>
      </CheckboxCard>
      <Button>Go Back</Button>
      <Button>Next Step</Button>
    </>
  );
};

export default StepThree;
