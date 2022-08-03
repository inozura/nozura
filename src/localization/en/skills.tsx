import React from "react";
import { Icon } from "@iconify/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import dartIcon from "@iconify/icons-logos/dart";
import { HighlightedTextIcon } from "components/molecules";

const Text = () => (
  <>
    I’ve spent about three years on improving my skills in{" "}
    <span className="font-bold text-gray-800">
      website, mobile and desktop development
    </span>{" "}
    using{" "}
    <HighlightedTextIcon
      className="mx-2"
      icon={<Icon icon={javascriptIcon} style={{ fontSize: "24px" }} />}
      as="a"
      href="https://www.javascript.com/"
    >
      Javascript
    </HighlightedTextIcon>
    {", "}
    <HighlightedTextIcon
      as="a"
      href="https://www.typescriptlang.org/"
      className="mx-2"
      icon={<Icon icon={typescriptIcon} style={{ fontSize: "24px" }} />}
    >
      Typescript
    </HighlightedTextIcon>{" "}
    and{" "}
    <HighlightedTextIcon
      className="mx-2"
      icon={<Icon icon={dartIcon} style={{ fontSize: "24px" }} />}
      as="a"
      href="https://dart.dev/"
    >
      Dart
    </HighlightedTextIcon>{" "}
    that I’m now pretty confident in building apps using these tools:
  </>
);

const skills = {
  text: <Text />,
};

export default skills;
