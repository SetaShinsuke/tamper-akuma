// VIP 下载链接
let vipUrl = 'https://vip4.mxomo.com/daaf44c81704215197/1001/23324/%5Bepub%5D%5BMox.moe%5D%5BBerserk%5DVol_001.epub';
// 两个 unicode 加一个时间戳
let code = 'daaf' + '44c8' + '1704215197';



///--- Captcha ---///
    function captcha_callback( res ) {
        if ( res.ret === 0 ) {
            if ( res.ticket.substr(0, 7) == "terror_" ) { // Retry
                captcha_show( res.bizState );
                return(0);
            } // if
            cap_ticket  = res.ticket;
            cap_randstr = res.randstr;
            cap_time    = Date.now();
            cap_used    = 0;

            if ( res.bizState == 'PackDown' ) {
                var obj_checkbox = document.getElementsByName("checkbox_vol");
                for ( i=0; i<obj_checkbox.length; i++ ) {
                    obj_checkbox[i].checked = false;
                } // for
                document.form_downpack.k.value = res.ticket;
                document.form_downpack.r.value = res.randstr;
                document.form_downpack.submit();

            } else if ( res.bizState == 'BatchDown-0' ) { // BatchDown Line 0
                do_down_batch( 0 );
            } else if ( res.bizState == 'BatchDown-1' ) { // BatchDown Line 1
                do_down_batch( 1 );

            } else {
                window.iframe_download.location.href = res.bizState + res.ticket + '/' + res.randstr + '/';
            } // if
        } else {
            //tips_alert_info( '驗證錯誤或系統錯誤。' );
        } // if
    } // captcha_callback()

    function captcha_show(dlurl, captype) {
    var cap_appid = '';
    try {
        var captcha;
        if (captype == undefined) captype = 0; // Auto
        if (parseInt(captype) == 2) { // PackDown
            captcha = new TencentCaptcha('199213107', captcha_callback, {
                'bizState': 'PackDown',
                'needFeedBack': false
            });
            captcha.show();
        } else if (parseInt(captype) == 1) { // BatchDown
            captcha = new TencentCaptcha('199213107', captcha_callback, {
                'bizState': 'BatchDown-' + dlurl,
                'needFeedBack': false
            });
            captcha.show();
        } else if (cap_ticket.length > 0 &&
            cap_randstr.length > 0 &&
            cap_used <= 20 &&
            (Date.now() - cap_time) <= 600000 &&
            parseInt(captype) == 0) {
            cap_used++;
            window.iframe_download.location.href = dlurl + cap_ticket + '/' + cap_randstr + '/';
        } else if (cap_appid.length <= 0) {
            cap_ticket = 't03xOc5hTwLlCjDq20vjMd2T8pFjvy258TKM8cXIrb2hsWEmlusgA';
            cap_randstr = 'TF3J';
            window.iframe_download.location.href = dlurl + cap_ticket + '/' + cap_randstr + '/';
        } else {
            captcha = new TencentCaptcha(cap_appid, captcha_callback, {
                'bizState': dlurl,
                'needFeedBack': false
            });
            captcha.show();
        } // if
    } catch (error) {
        captcha_errorback();
    } // try-catch