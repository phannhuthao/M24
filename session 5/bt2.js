// Khai báo mảng chứa các câu hỏi và câu trả lời
const questions = [
    {
        question: "Ngày giải phóng miền nam là ngày bao nhiêu?",
        options: ["27/4", "28/4", "29/4", "30/4"],
        answer: "30/4"
    },

    {
        question: "Có bao nhiêu mùa trong một năm?",
        options: ["1", "2", "3", "4"],
        answer: "4"
    },

    {
        question: "Giấy được làm từ đâu?",
        options: ["Cao su", "Nước", "Gỗ", "Mía"],
        answer: "Gỗ"
    },

    {
        question: "Con gì mà kêu mèo méo meo mèo mèo",
        options: ["Con mèo", "Con chó", "Con bò", "Trần Đức Bo"],
        answer: "Trần Đức Bo"
    },

    {
        question: "Ai là người bán chả cá",
        options: ["Tâm Anh", "Huỳnh Giáo Chủ", "Anh Bán Chả Cá", "Trâm anh"],
        answer: "Tâm Anh"
    },
    // Thêm các câu hỏi khác vào đây
];

// Lấy các phần tử DOM cần thiết
const questionElement = document.getElementById('question');
const optionsElements = document.querySelectorAll('.option');
const answerBtn = document.getElementById('answerBtn');
const timeLeftElement = document.getElementById('timeLeft');

let currentQuestionIndex = 0;
let timeLeft = 15; // Thời gian đếm ngược cho mỗi câu hỏi, đơn vị là giây

// Hàm để hiển thị câu hỏi và các lựa chọn tương ứng
function displayQuestion(question) {
    questionElement.textContent = question.question;
    optionsElements.forEach((option, index) => {
        option.textContent = question.options[index];
    });
}

// Hàm để kiểm tra câu trả lời
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return; // Nếu không chọn gì thì không làm gì cả

    const selectedAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        // Xử lý khi trả lời đúng
        console.log("Đúng!");
    } else {
        // Xử lý khi trả lời sai
        console.log("Sai!");
    }

    // Chuyển sang câu hỏi tiếp theo
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
        resetTimer();
    } else {
        // Nếu hết câu hỏi, hiển thị kết quả và nút chơi lại
        alert("Kết thúc trò chơi!");
        // Hiển thị nút chơi lại và xử lý khi nhấn
        // Ví dụ:
        const playAgainBtn = document.createElement('button');
        playAgainBtn.textContent = "Chơi lại";
        playAgainBtn.addEventListener('click', resetGame);
        document.body.appendChild(playAgainBtn);
    }
}

// Hàm đếm ngược thời gian
function countdown() {
    timeLeft--;
    timeLeftElement.textContent = `Thời gian: ${timeLeft} giây`;

    if (timeLeft <= 0) {
        // Nếu hết thời gian, tự động chuyển sang câu hỏi tiếp theo
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(questions[currentQuestionIndex]);
            resetTimer();
        } else {
            // Nếu hết câu hỏi, hiển thị kết quả và nút chơi lại
            alert("Kết thúc!");
            // Hiển thị nút chơi lại và xử lý khi nhấn
            // Ví dụ:
            // const playAgainBtn = document.createElement('button');
            // playAgainBtn.textContent = "Chơi lại";
            // playAgainBtn.addEventListener('click', resetGame);
            // document.body.appendChild(playAgainBtn);
        }
    }
}

// Hàm reset thời gian
function resetTimer() {
    timeLeft = 15;
}


answerBtn.addEventListener('click', checkAnswer);


displayQuestion(questions[currentQuestionIndex]);


setInterval(countdown, 1000); // Cứ mỗi giây sẽ gọi hàm countdown một lần
