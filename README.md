# node-express-winston-favicon
Using together NodeJS, ExpressJS, Winston logger and Serve-favicon boilerplate

เมื่อเราเขียนโค้ดฝั่ง Backend เราจะคุ้นเคยกับ node express และเมื่อเราต้องการสร้าง logger file เราก็จะคุ้นเคยกับ winston แต่การเขียนโค้ดฝั่ง Backend เราต้องการ favicon มั๊ย เพราะมันเป็น Backend ไม่เห็นต้องกังวลเรื่องความสวยงามเลย

แต่อย่างไรก็ตามทั้ง Google Chrome และ Firefox มันฟ้อง favicon error ครับ
## Google Chrome favicon error
![chrome favicon error](https://cdn.means-business.info/wp-content/uploads/2021/05/31093501/chrome-favicon-error-2048x1563.jpg)

## Firefox favicon error
![firefox favicon error](https://cdn.means-business.info/wp-content/uploads/2021/05/31093523/firefox-favicon-error-2048x1699.jpg)

ถ้าเรารู้สึกรำคาญกับ error แบบนี้เราก็แค่ใส่ favicon เข้าไป โดยเขียนโค้ดในไฟล์ index.js หรือ app.js แล้วแต่จะตั้งชื่อนะครับ

## ไฟล์ index.js หรือ app.js

  `const express = require('express');`
  
  `const favicon = require('serve-favicon');`
  
  `const path = require('path');`
  

  `const app = express();`
  
  `app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));`
  
  ___
  
  หลังจากเราเขียนโค้ดระบุตำแหน่ง favicon เข้าไปในไฟล์ index.js หรือ app.js แล้ว ให้เรานำไฟล์ favicon.ico วางไว้ในโฟลเดอร์ public ดังรูปประกอบ
  
  ![file tree](https://cdn.means-business.info/wp-content/uploads/2021/05/31104843/file-tree.jpg)
  
  เราก็จะไม่พบ favicon error ครับ
  
  
  ## Google Chrome no-error
  ![chrome no-error](https://cdn.means-business.info/wp-content/uploads/2021/05/31093603/chrome-favicon-no-error-2048x1507.jpg)
  
  ## Firefox no-error
  ![firefox no-error](https://cdn.means-business.info/wp-content/uploads/2021/05/31093626/firefox-favicon-no-error-2048x1151.jpg)
