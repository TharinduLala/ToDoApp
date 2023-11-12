const inputBox = $("#input_field");
const listContainer = $("#list_container");

function addTask() {
    if (inputBox.val() === '') {
        alert("You must write something!")
    } else {
        let li = `<li><input type="checkbox" onclick="checkBoxChange(this)">${inputBox.val()}<span onclick="removeTask(this)">\u00d7</span></li>`
        listContainer.append(li);
        inputBox.val('');
    }
}

function checkBoxChange(e){
    if ($(e).prop('checked')==true){
        $( e ).parents("LI").addClass("checked");
    }else {
        $( e ).parents("LI").removeClass("checked");
    }
}

function removeTask(e){
    $( e ).parents("LI").remove();
}
