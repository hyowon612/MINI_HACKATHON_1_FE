import React from "react";
import { TemplateSection } from "./styled";

const Template = ({ children }) => {
  return (
    <TemplateSection>
      {children}
    </TemplateSection>   
  )
}

export default Template;