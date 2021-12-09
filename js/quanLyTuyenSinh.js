/**
 * Bài-1: Quản lý tuyển sinh:
 * Sơ đồ 3 khối:
 * Khối 1: Input 
 * diemChuan
 * khuVuc
 * doiTuong
 * diemMon1
 * diemMon2
 * diemMon3
 * 
 * Khối 2:
 * B1/ Tạo bảng điểm cộng cho từng khu vực và từng đối tượng
 * B2/ Lấy các giá trị từ form
 * B3/ Tính điểm khu vực 
 * B4/ Tính điểm đối tượng
 * B5/ Tính tổng điểm
 * tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong
 * B6/ Xét trường hợp và thông báo:
 * + Nếu diemMon1 = 0 hoặc diemMon2 = 0 hoặc diemMon3 =0 => Rớt
 * + Nếu tongDiem >= diemChuan => đậu
 * + Nếu tongdiem < diemChuan => Rớt
 * Khối 3: Output
 * Thông báo kết quả thí sinh đạt được: ketQua
 */

const khuVuc0 = 0;
const khuVucA = 2;
const khuVucB = 1;
const khuVucC = 0.5;

const doiTuong0 = 0;
const doiTuong1 = 2.5;
const doiTuong2 = 1.5;
const doiTuong3 = 1;

function xetKetQua() {
    var diemChuan = Number(document.getElementById("inpdiemChuan").value);
    var diemMon1 = Number(document.getElementById("inpdiemMon1").value);
    var diemMon2 = Number(document.getElementById("inpdiemMon2").value);
    var diemMon3 = Number(document.getElementById("inpdiemMon3").value);
    var khuVuc = document.getElementById("inpKhuVuc").value;
    var doiTuong = document.getElementById("inpDoiTuong").value;

    var diemKhuVuc = tinhDiemKhuVuc(khuVuc);
    var diemDoiTuong = tinhDiemDoiTuong(doiTuong);

    var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã rớt. Do có môn điểm bằng 0"
    } else if (tongDiem >= diemChuan) {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã đậu. Tổng điểm là: " + tongDiem;
    } else {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã rớt. Tổng điểm là: " + tongDiem;
    }
}
function tinhDiemKhuVuc(khuVuc) {
    switch (khuVuc) {
        case "KV0": return khuVuc0;
        case "KVA": return khuVucA;
        case "KVB": return khuVucB;
        case "KVC": return khuVucC;
    }
}
function tinhDiemDoiTuong(doiTuong) {
    switch (doiTuong) {
        case "DT0": return doiTuong0;
        case "DT1": return doiTuong1;
        case "DT2": return doiTuong2;
        case "DT3": return doiTuong3;
    }
}
document.getElementById("btnXuatKQ").onclick = xetKetQua;