window.onload = function () {
    let table = document.getElementById("Tabel Penilaian");
    for (i = 0; i < table.rows.length; i++) {
      if (i != 0) {
        let td = document.createElement("td");
        let nilaimutu = document.createTextNode(
          gradePenilaian(table.rows[i].cells[3].innerText)
        );
        td.appendChild(nilaimutu);
        table.rows[i].append(td);
      }
    }
  };
  const gradePenilaian = (nilai) => {
    nilai = parseInt(nilai);
      if (nilai >= 80) {
        return "A";
      } else if (nilai >= 70 & nilai < 80) {
        return "AB";
      } else if (nilai >= 60 & nilai < 70) {
        return "B";
      } else if (nilai >= 50 & nilai < 60) {
        return "BC";
      } else if (nilai >= 40 & nilai < 50) {
        return "C";
      } else if (nilai >= 10 & nilai < 40) {
        return "D";
      } else if (nilai < 10) {
        return "E";
      }else {
      return "Nilai tidak valid";
      }
  };