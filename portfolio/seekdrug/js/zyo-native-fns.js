function startApp(url){
    if(window.yaodian){
        window.yaodian.startApp(url);
    }else{
        if(url.indexOf("com.manle.phone.android.info.activity.InfoDetail") >= 0) {
            var id_str = "params={\"id\":\"";
            var type_str = "\",\"type\":\"";

            var start1 = url.indexOf(id_str);
            var start2 = url.indexOf(type_str);

            var id = url.substr((start1 + id_str.length), (start2 - (start1 + id_str.length)));
            var type = url.substr((start2 + type_str.length), 1);

            var t_url = "http://yaodian.manle.com/shixun/index.php?type=sx_content&id="+id+"&relevance="+type;

            window.location.href = t_url;
        }else
        if(url.indexOf("com.manle.phone.android.mall.activity.DrugDetailInfo") >= 0) {
            var id_str = "params={\"drug_id\":\"";
            var type_str = "\",\"drug_title\":\"";

            var start1 = url.indexOf(id_str);
            var start2 = url.indexOf(type_str);
            var end2 = url.indexOf("\"}");

            var id = url.substr((start1 + id_str.length), (start2 - (start1 + id_str.length)));
            var type = url.substr((start2 + type_str.length), (end2 - (start2 + type_str.length)));

            var t_url = "http://yaodian.manle.com/html/symptom/instruction.html?q="+id+"_"+type;

            window.location.href = t_url;
        }else
        if(url.indexOf("com.manle.phone.android.guide.activity.DeseaseDetailInfo") >= 0) {
            var id_str = "params={\"symptom_id\":\"";
            var type_str = "\",\"symptom_title\":\"";

            var start1 = url.indexOf(id_str);
            var start2 = url.indexOf(type_str);

            var id = url.substr((start1 + id_str.length), (start2 - start1 - id_str.length));

            var t_url = "http://yaodian.manle.com/html/classify/disease_instruction.html?q="+id;

            window.location.href = t_url;
        }else
        if(url.indexOf("com.manle.phone.android.guide.activity.SymptomDetailInfo") >= 0) {
            var id_str = "params={\"symptom_id\":\"";
            var type_str = "\",\"symptom_title\":\"";

            var start1 = url.indexOf(id_str);
            var start2 = url.indexOf(type_str);
            var end2 = url.indexOf("\"}");

            var id = url.substr((start1 + id_str.length), (start2 - (start1 + id_str.length)));
            var type = url.substr((start2 + type_str.length), (end2 - (start2 + type_str.length)));

            var t_url = "http://yaodian.manle.com/html/symptom/instruction.html?q="+id+"_"+type;

            window.location.href = t_url;
        }else
        if(url.indexOf("com.manle.phone.android.mall.activity.MallDetailInfo") >= 0) {
            var id_str = "params={\"store_id_i\":\"";
            var type_str = "\",\"store_name_s\":\"";

            var start1 = url.indexOf(id_str);
            var start2 = url.indexOf(type_str);

            var id = url.substr((start1 + id_str.length), (start2 - (start1 + id_str.length)));

            var t_url = "http://yaodian.manle.com/html/around/detail.html?q="+id;

            window.location.href = t_url;
        }else
        if(url.indexOf("yaodian://type=url?url=") >= 0) {
            var id_str = "yaodian://type=url?url=";

            var start = url.indexOf(id_str);

            var t_url = url.substr((start + id_str.length));

            window.location.href = t_url;
        }else{
            console.log('startApp:'+url);
        }
    }
    console.log('startApp:'+url);
}
function startDownloadApk(url){
    if(window.yaodian){
      window.yaodian.startDownloadApk(url);
    }else{
      window.location.href = url;
    }
}
//拨打电话
function startTel(url){
    if(window.yaodian){
      window.yaodian.startTel(url);
    }else{
      window.location.href = 'tel:' + url;
    }
}