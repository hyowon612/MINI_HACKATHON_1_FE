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

  const showImage = (image) => {
    if (image === "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png") {
      return "https://www.haceonline.org/wp-content/uploads/2017/08/light-gray-solid-color-background.jpg";
    } else {
      return image;
    }
  };

  return (
    <StaffSection>
      <StaffTitle>인물 정보</StaffTitle>
      <StaffProfileSection>
        {staff.map((staff, idx) => (
          <StaffProfile key={idx}>
            <StaffImage src={showImage(staff.image_url)} alt={""}/>
            <StaffRole>{staff.role}</StaffRole>
            <StaffName>{staff.name}</StaffName>
          </StaffProfile>
        ))}
      </StaffProfileSection>
    </StaffSection>
  )
}

export default Staff;