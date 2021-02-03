function displayFile( e ) { 

    const obj = e.files[0];
    let reader = new FileReader();
    reader.readAsText(obj);

    reader.onload = function() {
        const fileContent = reader.result;
        
        let d = fileContent.replaceAll("\n","<br />");
        document.getElementById("content").innerHTML = d;
        console.log(d);
    };
    reader.onerror = function() {
        alert(reader.error);
    };

}
