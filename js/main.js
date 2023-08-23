// tìm sinh viên có điểm cao nhất 

document.querySelector('#btnSVCaoDiemNhat').onclick = function(){
    // tìm lấy danh sách tên 
    // input : chứa tên : arrTen , chứa điểm : arrDiem
    // arrTagTen : chỉ lấy tới thẻ td 
    var arrTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
    console.log('arrTagTen',arrTagTen);
    var arrTen = [];
    for(var index = 0; index < arrTagTen.length; index++){
        // lấy ra tên tại vị trí index
        var ten = arrTagTen[index].innerHTML;

        // thêm tên vừa lấy tại vị trí index  phía trên vào mảng arrTen
        arrTen.push(ten);
    }
    console.log('arrTen',arrTen);


    // lấy ra mảng điểm 
    var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
    var arrDiem = [];
    for( var index = 0; index < arrTagDiem.length; index++ ){
        // lấy ra điểm tại vị trí index 
        var diem = arrTagDiem[index].innerHTML;

        // thêm điểm vừa lấy tại vị trí index phí trên vào mảng arrDiem
        arrDiem.push(diem);

    }
    console.log('arrDiem',arrDiem);

    // // tìm ra điểm cao nhất 
    // Cách 1 

    // var max = arrDiem[0];
    // // lấy vị trí lớn nhất trong mảng điểm để lấy được tên tại vị trí điểm lốn nhất
    // var indexMax = 0;
    // for(var index = 0; index < arrDiem.length;index++){
    //     if(arrDiem[index] > max){
    //         max = arrDiem[index];
    //         indexMax = index;
    //     }
    // }
    // // kiểm tra 
    // console.log('max',max);
    // console.log('indexMax',indexMax);   

    // cách 2 : sử dụng cmt code 
    var indexMax = findIndexMax(arrDiem);
    console.log('indexMax',indexMax);

    // output : Đen thị giàu 9.8

    var output = `Sinh viên có điểm cao nhất :${arrTen[indexMax]} - ${arrDiem[indexMax]}`;
    document.querySelector('#svGioiNhat').innerHTML = output;
}


// tìm sinh viên có điểm thấp nhất 
document.querySelector('#btnSVThapDiemNhat').onclick = function(){
     // tìm lấy danh sách tên 
    // input : chứa tên : arrTen , chứa điểm : arrDiem
    // arrTagTen : chỉ lấy tới thẻ td 
    var arrTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
    console.log('arrTagTen',arrTagTen);
    var arrTen = [];
    for(var index = 0; index < arrTagTen.length; index++){
        // lấy ra tên tại vị trí index
        var ten = arrTagTen[index].innerHTML;

        // thêm tên vừa lấy tại vị trí index  phía trên vào mảng arrTen
        arrTen.push(ten);
    }
    console.log('arrTen',arrTen);


    // lấy ra mảng điểm 
    var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
    var arrDiem = [];
    for( var index = 0; index < arrTagDiem.length; index++ ){
        // lấy ra điểm tại vị trí index 
        var diem = arrTagDiem[index].innerHTML;

        // thêm điểm vừa lấy tại vị trí index phí trên vào mảng arrDiem
        arrDiem.push(diem);

    }
    console.log('arrDiem',arrDiem);

    // tìm ra điểm thấp nhất 
    // cách 1 :

    // var min = arrDiem[0];
    // indexMin = 0;
    // for(var index = 0; index <arrDiem.length;index++ ){
    //     if(arrDiem[index] < min){
    //         min = arrDiem[index];
    //         indexMin = index;
    //     }
    // }

     // cách 2 : sử dụng cmt code 
     var indexMin = findIndexMin(arrDiem);
     console.log('indexMin',indexMin);

    // in kết quả 
    var output = `Sinh viên có điểm thấp nhất :${arrTen[indexMin]} - ${arrDiem[indexMin]}`;
    document.querySelector('#svYeuNhat').innerHTML = output;
}


// đếm số sinh viên giỏi ( điểm > 5)
document.querySelector('#btnSoSVGioi').onclick = function(){
    var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
    var arrDiem = [];
    for( var index = 0; index < arrTagDiem.length; index++ ){
        // lấy ra điểm tại vị trí index 
        var diem = arrTagDiem[index].innerHTML;

        // thêm điểm vừa lấy tại vị trí index phí trên vào mảng arrDiem
        arrDiem.push(diem);

    }
    
    var count = demSoSVGioi(arrDiem,5);
    document.querySelector('#soSVGioi').innerHTML = count;
}

// danh sách sinh viên có điểm TB lớn hơn 5 
document.querySelector('#btnSVDiemHon5').onclick = function(){
    var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
    var arrDiem = [];
    for( var index = 0; index < arrTagDiem.length; index++ ){
        // lấy ra điểm tại vị trí index 
        var diem = arrTagDiem[index].innerHTML;

        // thêm điểm vừa lấy tại vị trí index phí trên vào mảng arrDiem
        arrDiem.push(diem);

    }
    
    // tìm lấy danh sách tên 
    // input : chứa tên : arrTen , chứa điểm : arrDiem
    // arrTagTen : chỉ lấy tới thẻ td 
    var arrTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
    console.log('arrTagTen',arrTagTen);
    var arrTen = [];
    for(var index = 0; index < arrTagTen.length; index++){
        // lấy ra tên tại vị trí index
        var ten = arrTagTen[index].innerHTML;

        // thêm tên vừa lấy tại vị trí index  phía trên vào mảng arrTen
        arrTen.push(ten);
    }

    // biến để chứa tên 

    // cách 1 :
    // var output1 = '';

    // for ( var index = 0; index < arrDiem.length;index++){
    //     if(arrDiem[index] > 5){
    //        output1 += arrTen[index] + '<br>';
    //     }
    // }
    // document.querySelector('#dsDiemHon5').innerHTML = output1;

    // cách 2 : 

    var output1 = listScoreBigFive(arrDiem,5,arrTen);
    document.querySelector('#dsDiemHon5').innerHTML = output1;
}

// sắp xếp điểm tăng dần 
document.querySelector('#btnSapXepTang').onclick = function(){
    var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
    var arrDiem = [];
    for( var index = 0; index < arrTagDiem.length; index++ ){
        // lấy ra điểm tại vị trí index 
        var diem = arrTagDiem[index].innerHTML;

        // thêm điểm vừa lấy tại vị trí index phí trên vào mảng arrDiem
        arrDiem.push(diem);

    }

   var result = arrDiem.sort(function(pt2, pt1){
        // cách 1 :
        // return về số dương thì giữ nguyên , còn về số âm thì nó hoán đổi vị trí cho nhau (xét trong arrDiem)
        if(pt2 < pt1){
            return -1;
        }
        return 1;
        

        // // cách 2 
        // return pt2 - pt1;

    });
    document.querySelector('#dtbTang').innerHTML = result;
};