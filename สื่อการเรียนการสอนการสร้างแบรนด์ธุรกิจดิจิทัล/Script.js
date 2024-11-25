// กำหนดคำตอบที่ถูกต้อง
const correctAnswers = {
    q1: "ความจำง่าย",  // คำตอบที่ถูกต้องของคำถามที่ 1
    q2: "Facebook"      // คำตอบที่ถูกต้องของคำถามที่ 2
};

// การจับเหตุการณ์การส่งฟอร์ม
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();  // ป้องกันไม่ให้ฟอร์มส่งข้อมูลโดยตรง

    // ดึงคำตอบจากฟอร์ม
    const q1Answer = document.getElementById('q1').value.trim();
    const q2Answer = document.getElementById('q2').value.trim();

    // ตรวจสอบคำตอบ
    let resultMessage = "<h3>ผลการตอบคำถาม</h3>";
    let correctCount = 0;

    if (q1Answer.toLowerCase() === correctAnswers.q1.toLowerCase()) {
        resultMessage += "<p>คำถามที่ 1: ตอบถูก!</p>";
        correctCount++;
    } else {
        resultMessage += "<p>คำถามที่ 1: ตอบผิด! คำตอบที่ถูกต้องคือ " + correctAnswers.q1 + ".</p>";
    }

    if (q2Answer.toLowerCase() === correctAnswers.q2.toLowerCase()) {
        resultMessage += "<p>คำถามที่ 2: ตอบถูก!</p>";
        correctCount++;
    } else {
        resultMessage += "<p>คำถามที่ 2: ตอบผิด! คำตอบที่ถูกต้องคือ " + correctAnswers.q2 + ".</p>";
    }

    // แสดงผลลัพธ์
    if (correctCount === 2) {
        resultMessage += "<p>คุณตอบถูกทั้งหมด! ยอดเยี่ยม!</p>";
    } else {
        resultMessage += "<p>คุณตอบถูก " + correctCount + " ข้อจากทั้งหมด 2 ข้อ</p>";
    }

    // แสดงผลลัพธ์บนหน้าเว็บ
    document.getElementById('result').innerHTML = resultMessage;
});
