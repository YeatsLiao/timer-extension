const confirmButton = document.getElementById("confirm");
confirmButton.addEventListener("click", function () {
    const content = document.getElementById('content').value;
    const time = document.getElementById('time').value;

    if (time === '') {
        $('#errorModal').modal('show');
        return;
    }

    // 显示模态对话框
    document.getElementById('modalTime').innerText = time;
    $('#successModal').modal('show');

    setTimeout(function () {
        chrome.notifications.create(
            '',
            {
                type: 'basic',
                title: '到时间啦!',
                message: content,
                iconUrl: 'timer.png',
            }
        );
    }, Number(time) * 1000);


});


// 创建一个通用的关闭按钮处理函数
function handleCloseButtonClick() {
    $('#successModal').modal('hide');
    $('#errorModal').modal('hide');
}

// 成功模态对话框的关闭按钮事件
document.getElementById('successClose').addEventListener('click', handleCloseButtonClick);

// 错误模态对话框的关闭按钮事件
document.getElementById('errorClose').addEventListener('click', handleCloseButtonClick);