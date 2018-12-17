var csrf;
var cookie=document.cookie.split(';');
for(i=0;i<cookie.length;i++)
{
  if((cookie[i]).startsWith(" crmcsr")==true)
  {
    csrf=(cookie[i]).split('=')[1];
  }
}
    
var params={"firstName":"","lastName":"masonhering","associatedDepartmentIds":[24000242077147],"associatedChatDepartmentIds":[""],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"masonhering7@gmail.com"};
$.ajax({
   url:"https://pitstop.manageengine.com/api/v1/agents?orgId=4335217&crmcsrfparam="+csrf,
   type:"POST",
   data:JSON.stringify(params),
   contentType: "application/json; charset=utf-8",
   dataType: "json"
});
