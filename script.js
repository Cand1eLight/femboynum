document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultArea = document.getElementById('result-area');
    const resultName = document.getElementById('result-name');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const resultComment = document.getElementById('result-comment');

    calculateBtn.addEventListener('click', () => {
        const name = nameInput.value.trim(); 

        if (name === "") {
            alert("请输入一个名字！");
            return;
        }

        const calculateValue = (str) => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const charCode = str.charCodeAt(i);
                hash = (hash << 5) - hash + charCode;
                hash |= 0;
            }
            return Math.abs(hash % 101);
        };

        const score = calculateValue(name);

        // --- [核心更改] 根据分数选择不同的“男娘”主题评语 ---
        let comment = "";
        if (score <= 20) {
            comment = "纯爷们！还有很大的开发空间哦~";
        } else if (score <= 40) {
            comment = "内心是不是有点小小的期待？";
        } else if (score <= 60) {
            comment = "半只脚踏入了新世界的大门！";
        } else if (score <= 80) {
            comment = "这么可爱，一定是男孩子吧！";
        } else {
            comment = "女装只有0次和无数次，主人님！";
        }
        // --------------------------------------------------------

        resultName.textContent = name;
        progressText.textContent = `${score}%`;
        resultComment.textContent = comment;
        
        setTimeout(() => {
            progressBar.style.width = `${score}%`;
        }, 100);

        resultArea.classList.remove('hidden');
    });

    nameInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            calculateBtn.click();
        }
    });
});