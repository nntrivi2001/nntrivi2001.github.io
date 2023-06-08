let cr_table = document.querySelector(".current_projects_table");
(
    async() => {
        let workbook = XLSX.read(await (await fetch("./assets/data/currentprojects.xlsx")).arrayBuffer());
        console.log(workbook);
        let worksheet = workbook.SheetNames;
        worksheet.forEach(name => {
            let html = XLSX.utils.sheet_to_html(workbook.Sheets[name]);
            cr_table.innerHTML += `${html}`;
        })
    }
)()

let fn_table = document.querySelector(".finished_projects_table");
(
    async() => {
        let workbook = XLSX.read(await (await fetch("./assets/data/finishedprojects.xlsx")).arrayBuffer());
        console.log(workbook);
        let worksheet = workbook.SheetNames;
        worksheet.forEach(name => {
            let html = XLSX.utils.sheet_to_html(workbook.Sheets[name]);
            fn_table.innerHTML += `${html}`;
        })
    }
)()

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