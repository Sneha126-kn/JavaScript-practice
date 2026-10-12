function convertHTML(str){
  let char="&<>\"\'"
  str= str.split("")
  for(let i=0;i<str.length;i++){
    if(str[i]==char[0]){
      str[i] = "&amp;";
    }
    if(str[i]==char[1]){
      str[i] ="&lt;"
    }
    if(str[i]==char[2]){
      str[i] ="&gt;"
    }
    if(str[i]==char[3]){
       str[i] ="&quot;"
    }
    if(str[i]==char[4]){
      str[i] ="&apos;"
    }
  }return str.join("")
}
