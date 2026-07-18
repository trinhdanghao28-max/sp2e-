function convert() {

    const mode = document.getElementById("mode").value;
    const year = document.getElementById("year").value;
    const major = document.getElementById("major").value;
    const score = parseFloat(document.getElementById("score").value);

    const result = document.getElementById("result");
    const resultText = document.getElementById("resultText");
    const formula = document.getElementById("formula");

    if (isNaN(score)) {
        alert("Vui lòng nhập điểm.");
        return;
    }

    const table = DATA[year][major];

    let found = null;

    for (let row of table) {

        if (mode === "sp2eToThpt") {

            if (score >= row.sp2e[0] && score <= row.sp2e[1]) {
                found = row;
                break;
            }

        } else {

            if (score >= row.thpt[0] && score <= row.thpt[1]) {
                found = row;
                break;
            }

        }

    }

    if (!found) {

        result.innerHTML = "--";

        resultText.innerHTML =
            "Điểm nằm ngoài phạm vi quy đổi.";

        formula.innerHTML =
            "Không có dữ liệu.";

        return;

    }

    let a, b, c, d;

    if (mode === "sp2eToThpt") {

        a = found.sp2e[0];
        b = found.sp2e[1];

        c = found.thpt[0];
        d = found.thpt[1];

    } else {

        a = found.thpt[0];
        b = found.thpt[1];

        c = found.sp2e[0];
        d = found.sp2e[1];

    }

    const y =
        ((d - c) / (b - a)) *
        (score - a) +
        c;

    result.innerHTML =
        y.toFixed(2);

    resultText.innerHTML =
        mode === "sp2eToThpt"
            ? "Điểm THPT tương đương"
            : "Điểm SP2E tương đương";

    formula.innerHTML = `
        Công thức nội suy của HPU2:
        <br><br>

        y =
        ((${d} − ${c}) / (${b} − ${a}))
        ×
        (${score} − ${a})
        +
        ${c}

        <br><br>

        <b>= ${y.toFixed(2)}</b>

        <hr>

        Khoảng quy đổi:

        <br>

        ${mode === "sp2eToThpt"
            ? `SP2E: ${a} → ${b}<br>THPT: ${c} → ${d}`
            : `THPT: ${a} → ${b}<br>SP2E: ${c} → ${d}`
        }
    `;

}
