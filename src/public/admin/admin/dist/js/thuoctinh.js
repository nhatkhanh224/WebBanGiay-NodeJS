$(document).ready(function(){
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var fieldHTML = '<div><input type="text" name="ma_sanpham[]" id="ma_sanpham" placeholder="Nhập mã sản phẩm"/><input type="text" name="cannang[]" id="cannang" placeholder="Nhập cân nặng"/><input type="text" name="size[]" id="size" placeholder="Nhập size"/><input type="text" name="giatien[]" id="giatien" placeholder="Nhập giá tiền"/><input type="text" name="soluong[]" id="soluong" placeholder="Nhập số lượng"/> <label for="exampleInputFile">Thêm ảnh minh họa sản phẩm</label><div class="input-group"><div class="custom-file"> <input type="file" class="custom-file-input" id="anh" name="anh"> <label class="custom-file-label" for="exampleInputFile">Choose file</label></div> <div class="input-group-append"><span class="input-group-text" id="">Upload</span></div></div>    <a href="javascript:void(0);" class="remove_button">Xóa</a></div>' ; //New input field html 
    var x = 1; //Initial field counter is 1
    
    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});