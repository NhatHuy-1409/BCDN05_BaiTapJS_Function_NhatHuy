/**
 * Bài-2: Tính tiền diện:
 * Sơ đồ 3 khối:
 * Khối 1: Input 
 * tenKH
 * soKW
 * 
 * Khối 2:
 * B1/ Tạo bảng các biến lưu giá tiền
 * B1/ Tạo biến và gán giá trị từ form
 * tienDien
 * B2/ Xét trường hợp:
 * + Nếu 0<soKW <= 50 => tienDien = soKW*giaTien1;
 * + Nếu 50 < soKW <= 100 => tienDien = 50*giaTien1 + (soKW - 50)*giaTien2;
 * + Nếu 100 < soKW <= 200 => tienDien = 50*giaTien1 + 50*giaTien2 + (soKW - 100)*giaTien3  ;
 * + Nếu 200 < soKW <= 350 => tienDien = 50*giaTien1 + 50*giaTien2  + 100*giaTien3 + (soKW - 200)*giaTien4  ;
 * + Nếu 350 < soKW <= 100 => tienDien = 50*giaTien1 + 50*giaTien2  + 100*giaTien3 + 150*giaTien4 + (soKW - 350)*giaTien5  ;
 * Khối 3: Output
 * Thông báo tên và số tiền điện
 */

const giaTien1 = 500;
const giaTien2 = 650;
const giaTien3 = 850;
const giaTien4 = 1100;
const giaTien5 = 1300;


function tinhTienDien() {
    var tenKH = document.getElementById("inpTenKH").value;
    var soKW = Number(document.getElementById("inpSoKW").value);

    var tienDien = 0;

    if (0 <soKW && soKW <= 50) {
        tienDien = soKW * giaTien1;
    } else if (50 < soKW && soKW <= 100) {
        tienDien = 50 * giaTien1 + (soKW - 50) * giaTien2;
    } else if (100 < soKW && soKW <= 200) {
        tienDien = 50 * giaTien1 + 50 * giaTien2 + (soKW - 100) * giaTien3;
    } else if (200 < soKW && soKW <= 350) {
        tienDien = 50 * giaTien1 + 50 * giaTien2 + 100 * giaTien3 + (soKW - 200) * giaTien4;
    } else if (350 < soKW) {
        tienDien = 50 * giaTien1 + 50 * giaTien2 + 100 * giaTien3 + 150 * giaTien4 + (soKW - 350) * giaTien5;
    } else {
        alert("Số KW không hợp lệ. Vui lòng nhập lại");
        return;
    }
    document.getElementById("txtTinhTienDien").innerHTML = "Tên khách hàng: " + tenKH + "<br>" + " Số tiền điện: " + Intl.NumberFormat('de-DE').format(tienDien);
}

document.getElementById("btnXuatTienDien").onclick = tinhTienDien;