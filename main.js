var images = ["family.jpg","IMG_0067.JPG","hi.jpg" ,"user-icon_318-33903.jpg","user-icon_318-33903.jpg","user-icon_318-33903.jpg"];

var names = ["Fmaily Book","soumil sharma", "aayush Sharma", "Richa Sharma", "Anju Sharma", "Sudhir Sharma"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
