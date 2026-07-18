function convert() {

    const score = parseFloat(document.getElementById("score").value);
    const group = document.getElementById("group").value;

    if (isNaN(score)) {
        alert("Vui lòng nhập điểm SP2E!");
        return;
    }

    const table = SCORE_TABLES[2026][group];

    if (!table) {
        alert("Không tìm thấy dữ liệu tổ hợp.");
        return;
    }

    let result = null;

    for (const row of table) {

        if (score >= row.sp2eMin && score <= row.sp2eMax) {

            result =
                row.thptMin +
                ((score - row.sp2eMin) *
                    (row.thptMax - row.thptMin)) /
                (row.sp2eMax - row.sp2eMin);

            break;
        }

    }

    const resultDiv = document.getElementById("result");

    if (result === null) {

        resultDiv.innerHTML =
            "<span style='color:red'>Điểm nằm ngoài khoảng quy đổi.</span>";

        return;
    }

    resultDiv.innerHTML = `
        <h2>Kết quả</h2>

        <p>
            Điểm SP2E:
            <b>${score.toFixed(2)}</b>
        </p>

        <p>
            Tổ hợp:
            <b>${group}</b>
        </p>

        <p>
            Điểm THPT tương đương:
            <b style="color:#c8102e;font-size:30px;">
                ${result.toFixed(2)}
            </b>
        </p>
    `;

}
