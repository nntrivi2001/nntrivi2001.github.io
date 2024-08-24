const images = {
    "Optimizing Traffic Lights Using Traffic Density": "assets\\img\\TrafficLightControl-5.gif",
    "Nozzle Quality Inspection": "assets/img/NozzleQualityInspection.gif",
    "Face Verification using Siamese Neural Network": "assets\img\SecureMemo.jpg", // nếu cần
    "Incomplete product detection using YOLOv8": "", // nếu cần
    // Thêm các dự án khác khi cần thiết
};

// Xử lý cho bảng dự án hiện tại
(async () => {
    let cr_table = document.querySelector(".current_projects_table");
    let workbook = XLSX.read(await (await fetch("./assets/data/currentprojects.xlsx")).arrayBuffer());
    console.log(workbook);
    let worksheet = workbook.SheetNames;

    worksheet.forEach(name => {
        let html = XLSX.utils.sheet_to_html(workbook.Sheets[name]);
        let domParser = new DOMParser();
        let doc = domParser.parseFromString(html, "text/html");

        let rows = doc.querySelectorAll("tr");
        rows.forEach((row, index) => {
            if (index === 0 || row.cells.length < 4) return; // Bỏ qua hàng tiêu đề và hàng không đủ 4 cột
            let projectName = row.cells[1].textContent.trim();
            let notesCell = row.cells[3]; // Notes là cột thứ 4

            if (notesCell.textContent.trim() === "" && images[projectName]) {
                notesCell.innerHTML = `<img src="${images[projectName]}" alt="${projectName}">`;
            }
        });

        cr_table.innerHTML += doc.body.innerHTML;
    });
})();

// Xử lý cho bảng dự án đã hoàn thành
(async () => {
    let fn_table = document.querySelector(".finished_projects_table");
    let workbook = XLSX.read(await (await fetch("./assets/data/finishedprojects.xlsx")).arrayBuffer());
    console.log(workbook);
    let worksheet = workbook.SheetNames;

    worksheet.forEach(name => {
        let html = XLSX.utils.sheet_to_html(workbook.Sheets[name]);
        let domParser = new DOMParser();
        let doc = domParser.parseFromString(html, "text/html");

        let rows = doc.querySelectorAll("tr");
        rows.forEach((row, index) => {
            if (index === 0 || row.cells.length < 4) return; // Bỏ qua hàng tiêu đề và hàng không đủ 4 cột
            let projectName = row.cells[1].textContent.trim();
            let notesCell = row.cells[3]; // Notes là cột thứ 4

            if (notesCell.textContent.trim() === "" && images[projectName]) {
                notesCell.innerHTML = `<img src="${images[projectName]}" alt="${projectName}">`;
            }
        });

        fn_table.innerHTML += doc.body.innerHTML;
    });
})();

// Xử lý bảng publications
let pp_table = document.querySelector(".publications_table");
(
    async() => {
        let workbook = XLSX.read(await (await fetch("./assets/data/publications.xlsx")).arrayBuffer());
        console.log(workbook);
        let worksheet = workbook.SheetNames;
        worksheet.forEach(name => {
            let html = XLSX.utils.sheet_to_html(workbook.Sheets[name]);
            pp_table.innerHTML += `${html}`;
        })
    }
)()