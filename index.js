
var xuLyXacNhan = function () {
    //2. Lấy thông tin ng nhập
    var tenNguoiNhap = document.getElementById('ten').value;
    var tenNguoiYeu = document.getElementById('tenNguoiYeu').value;
    var mucDoDep = document.getElementById('type').value;
    var diemDangIu = document.getElementById('dangIu');
    var diemDeThuong = document.getElementById('deThuong');
    var diemCute = document.getElementById('cute');
    var loiYeuThuong = document.getElementById('loveMessage');

    //3. Hiển thị thông tin

    document.getElementById('tenDisplay').innerHTML = tenNguoiNhap;
    document.getElementById('tenNguoiYeuDisplay').innerHTML = tenNguoiYeu;
    document.getElementById('typeDisplay').innerHTML = mucDoDep;
    document.getElementById('averagePointDisplay').innerHTML = '3000'
    if (mucDoDep === 'Xinh đẹp') {
        document.getElementById('wantToSay').innerHTML = "Em là cô gái rất rất xinh đẹp nên phải hay quay lại chọn 'Rất xinh đẹp' thì anh mới nói típ!"
    } else {
        document.getElementById('wantToSay').innerHTML = "Tôi Yêu Em Phát Điên";
        document.getElementById('wantToSay').style.color = "red";
    }

}

var checkValidation = function () {
    var valid = true;
    // Kiểm tra rỗng 
    valid = kiemTraRong('#ten', '#error_Name') & kiemTraRong ('#tenNguoiYeu','#error_husbandName') & kiemTraRong('#dangIu','#error_dangIuScore') & kiemTraRong('#deThuong', '#error_deThuongScore') & kiemTraRong('#cute', '#error_cuteScore') & kiemTraRong ('#loveMessage', '#error_loveMessage');
    // Kiem tra phai la dao ngoc anh khoi
    valid &= kiemTraPhaiLaKhoi('tenNguoiYeu', 'error_husbandName_all_letter');
    // Kiem tra diem phai la 10
    valid &= kiemTraPhaiLa10('dangIu','error_dangIuScore_10') & kiemTraPhaiLa10('deThuong','error_deThuongScore_10') & kiemTraPhaiLa10('cute','error_cuteScore_10');

    if (!valid) 
        return false;
    xuLyXacNhan();
    return true;
}


//3. Xử lý thông tin người dùng 

var kiemTraRong= function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    var errorMessage = document.querySelector(selectorError);
    if (inputText.value.trim() === '') {
        errorMessage.innerHTML = inputText.name + " không được bỏ trống";
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.innerHTML = "";
        errorMessage.style.display = 'none';
        return true;
    }

}

var kiemTraTatCaLaKiTu = function (idValue, idError) {
    var pattern = /^[A-Za-z]+$/;
    var inputText = document.getElementById(idValue);
    var errorMessage = document.getElementById(idError);
}

var kiemTraPhaiLaKhoi = function (idValue, idError) {
    // alert(123); 
    var pattern = /^Đào Ngọc Anh Khôi+$/ig;
    var inputText = document.getElementById(idValue);
    var errorMessage = document.getElementById(idError);
    if (pattern.test(inputText.value.trim())) {
        errorMessage.innerHTML = "";
        errorMessage.style.display = 'none';
        return true;
    } else {
        errorMessage.innerHTML = inputText.name + " của bạn phải là: Đào Ngọc Anh Khôi";
        errorMessage.style.display = 'block';
        return false;
    }
}

var kiemTraPhaiLa10 = function (idValue, idError) {
    // alert(123); 
    var pattern = /^10+$/g;
    var inputText = document.getElementById(idValue);
    var errorMessage = document.getElementById(idError);
    if (pattern.test(inputText.value.trim())) {
        errorMessage.innerHTML = "";
        errorMessage.style.display = 'none';
        return true;
    } else {
        errorMessage.innerHTML = inputText.name + " của bạn phải là: 10";
        errorMessage.style.display = 'block';
        return false;
    }
}
//1. Định nghĩa nút lấy dữ liệu
document.getElementById('ten').onblur = checkValidation;
document.getElementById('btnXacNhan').onclick = checkValidation;