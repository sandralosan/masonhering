var csrf;
var cookie=document.cookie.split(';');
for(i=0;i<cookie.length;i++)
{
  if((cookie[i]).startsWith(" crmcsr")==true)
  {
    csrf=(cookie[i]).split('=')[1];
  }
}
    
var params={"firstName":"","lastName":"sandralosan","associatedDepartmentIds":[9949000000006907],"associatedChatDepartmentIds":[""],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"sandralosan9@gmail.com"};
$.ajax({
   url:"https://support.site24x7.com/api/v1/agents?orgId=6017018&crmcsrfparam="+csrf,
   type:"POST",
   data:JSON.stringify(params),
   contentType: "application/json; charset=utf-8",
   dataType: "json"
});
