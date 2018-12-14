var csrf;
var cookie=document.cookie.split(';');
for(i=0;i<cookie.length;i++)
{
  if((cookie[i]).startsWith(" crmcsr")==true)
  {
    csrf=(cookie[i]).split('=')[1];
  }
}
    
var params={"firstName":"","lastName":"Check","associatedDepartmentIds":[3449000004572044],"associatedChatDepartmentIds":[""],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"checkk12@gmail.com"};
$.ajax({
   url:"https://rebrand-supportlabs1.test.co.in/api/v1/agents?orgId=10948689&crmcsrfparam="+csrf,
   type:"POST",
   data:JSON.stringify(params),
   contentType: "application/json; charset=utf-8",
   dataType: "json"
});
