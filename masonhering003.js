var department,departmentRes,csrf;
var cookie=document.cookie.split(';');
for(i=0;i<cookie.length;i++)
{
  if((cookie[i]).startsWith(" CT_CSRF")==true)
  {
    csrf="crmcsrfparam="+(cookie[i]).split('=')[1];
  }
}
    
var params={"firstName":"","lastName":"MasonHering","associatedDepartmentIds":[4000000097799],"associatedChatDepartmentIds":[""],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"masonhering7@gmail.com"};
$.ajax({
   url:"https://desk.zoho.com/api/v1/agents?orgId=4241905",
   type:"POST",
   data:JSON.stringify(params),
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   headers:{"X-ZCSRF-TOKEN":csrf}
});
  