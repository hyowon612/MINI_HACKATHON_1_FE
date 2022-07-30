import styled from "styled-components";

export const StaffSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 820px;
  height: 100%;
`;

export const StaffTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #404040;
`;

export const StaffProfileSection = styled.div`
  display: flex;
  overflow: scroll;
  white-space: nowrap;
`;

export const StaffProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  margin-right: 20px;
`;

export const StaffImage = styled.img`
  width: 100px;
  height: 120px;
  margin-bottom: 8px;
  object-fit: cover;
`;

export const StaffRole = styled.div`
  font-size: 14px;
  color: #808080;
`;

export const StaffName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #404040;
`;