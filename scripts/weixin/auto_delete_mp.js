// 批量删除草稿箱

async function startDelete(){
    for(var i=0;i<10;i++){
        console.log(`Deleting ${i}`);
        await autoDelete();
    }
}

function autoDelete(){
    return new Promise((resolve, reject) => {
    // 点击删除
    document.querySelector('.weui-desktop-popover__wrp.weui-desktop-link a').click();
    setTimeout(_=>{
        // 确认删除
        document.querySelector('button.weui-desktop-btn.weui-desktop-btn_primary').click();
        resolve();
    }, 500);
    });
}

startDelete();

document.querySelector('.weui-desktop-icon-checkbox').click();
document.querySelectorAll('button.weui-desktop-icon-btn.weui-desktop-icon__response-mouse')[1].click();