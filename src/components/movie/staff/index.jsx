import React from "react";
import {
  StaffSection,
  StaffTitle,
  StaffProfileSection,
  StaffProfile,
  StaffImage,
  StaffRole,
  StaffName
} from "./styled";

const Staff = ({ staff }) => {
  return (
    <StaffSection>
      <StaffTitle>인물 정보</StaffTitle>
      <StaffProfileSection>
        {staff.map((staff) => (
          <StaffProfile>
            <StaffImage src={staff.image_url}/>
            <StaffRole>{staff.role}</StaffRole>
            <StaffName>{staff.name}</StaffName>
          </StaffProfile>
        ))}
      </StaffProfileSection>
    </StaffSection>
  )
}

export default Staff;