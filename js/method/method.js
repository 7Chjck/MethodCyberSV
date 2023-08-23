/** 1 dấu / 2 dấu * enter : cú pháp tạo cmt code
 * hàm này nhận vào 1 mảng và trả về vị trí index của số lớn nhất
 * @param {*} arr mảng dc truyền vào để tìm vị trí số lớn nhất
 * @returns trả về vị trí index của số lớn nhất
 */
function findIndexMax(arr){
    // tìm ra điểm cao nhất 
    var max = arr[0];
    // lấy vị trí lớn nhất trong mảng điểm để lấy được tên tại vị trí điểm lốn nhất
    var indexMax = 0;
    for(var index = 0; index < arr.length;index++){
        if(arr[index] > max){
            max = arr[index];
            indexMax = index;
        }
    }

    return indexMax;
}

/** 1 dấu / 2 dấu * enter : cú pháp tạo cmt code
 * hàm này nhận vào 1 mảng và trả về vị trí index của số nhỏ nhất
 * @param {*} arr mảng dc truyền vào để tìm vị trí số nhỏ nhất
 * @returns trả về vị trí index của số nhỏ nhất
 */
function findIndexMin(arr){
    // tìm ra điểm cao nhất 
    var min = arr[0];
    // lấy vị trí lớn nhất trong mảng điểm để lấy được tên tại vị trí điểm lốn nhất
    var indexMin = 0;
    for(var index = 0; index < arr.length;index++){
        if(arr[index] < min){
            min = arr[index];
            indexMin = index;
        }
    }
   

    return indexMin;
}

// đếm số sinh viên giỏi 

/**
 * hàm nhận vào 1 mảng số và 1 số điểm trung bình để xét 
 * @param {*} arrNumber mảng number dc truyền vào
 * @param {*} targetDiem số điểm để đạt được sinh viên giỏi
 * @return  số sinh viên giỏi
 */
function demSoSVGioi(arrNumber,targetDiem){
    var count = 0;
    for ( var index = 0; index < arrNumber.length;index++){
        if(arrNumber[index] > targetDiem){
            count++;
        }
    }
    return count;
}

// danh sách sinh viên có điểm TB lớn hơn 5 
/**
 * 
 * @param {*} arrNumber mảng number dc truyền vào
 * @param {*} targetDiem số điểm để đạt được sinh viên giỏi
 * @param {*} arrName tryền vào tên
 * @returns số sv điểm tb > 5
 */


function listScoreBigFive(arrNumber,targetDiem,arrName){
    var listName = '';
    for(var index = 0; index < arrNumber.length;index++){
        if(arrNumber[index] > targetDiem){
            listName += arrName[index] + '<br>';
        }
    }
    return listName;
}

