import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ShowResearch = () => {
  const checkToken = localStorage.getItem('token');
  if (!checkToken) {
    window.location.href = '/login';
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            หัวข้องานวิจัย : การจำแนกพื้นผิวของชิ้นงานสำหรับขั้นตอนการชุบแข็งในกระบวนการผลิตด้วยเทคโนโลยีการประมวลผลภาพโดยการเรียนรู้เชิงลึก
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ความคืบหน้างานวิจัย :  In Process
          </Typography>
          <Typography variant="body2" color="text.secondary">
            รายละเอียดงานวิจัย : <br/>
            ในยุคอุตสาหกรรม4.0มีการนำเทคโนโลยีแมชชีนเลิร์นนิ่งมาใช้ในภาคอุตสาหกรรมการผลิตเพิ่มมากขึ้นเพื่อเพิ่มประสิทธิภาพการตรวจสอบพื้นผิวของชิ้นงานสำหรับขั้นตอนการชุบแข็ง	เป็นพื้นฐานสำหรับการตรวจสอบชิ้นงานในการะบวนการผลิตงานวิจัยนี้ได้นำเทคโนโลยีการประมวลผลภาพโดยการเรียนรู้เชิงลึกมาตรวจสอบพื้นผิวของชิ้นงานสำหรับขั้นตอนการชุบแข็งในกระบวนการผลิตโดยได้นำชุดข้อมูลภาพการชุบแข็งมาฝึกฝนผ่านโมเดลที่ปรับแต่งให้มีความแม่นยำ 80% ถึง 90% ของภาพที่แบ่งแยกตามพื้นผิวของชิ้นงานสำหรับการชุบแข็ง ผลการทดลองนี้แสดงให้เห็นว่ามีส่วนช่วยในการตัดสินใจการตรวจสอบพื้นผิวของชิ้นงานสำหรับขั้นตอนการชุบแข็งในกระบวนการผลิต
  </Typography>
        </CardContent>
        <a href="/">Home</a>
      </Card>
    </div>
  );
};

export default ShowResearch;
