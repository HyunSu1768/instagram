document.addEventListener("DOMContentLoaded",function(e){
  let configID = document.querySelector("#id i")
  let idText = document.querySelector("#id span")
  let profileEditBtn = document.querySelector("#profileInfo_Button")
  let newtextid
  let profile_pic = document.querySelector("#profile_Pic")

  let userInfo = document.querySelector("#userInfo")
  let summary = document.querySelector("#summary")
  let profileDetail = document.querySelector("#profileDetail")
  let changing = false;
  configID.addEventListener("click", function(e){
    newtextid = prompt("새로운 아이디를 입력하세요.")
    console.log(newtextid)
    if(newtextid === ""){
      idText.textContent = idText.textContent
    }
    else{
      idText.textContent = newtextid
    }
  })
  profileEditBtn.addEventListener("click",function(e){
    if(changing){
      let _userInfo = userInfo.querySelector("input").value
      let _summary = summary.querySelector("input").value
      let _profileDetail = profileDetail.querySelector("input").value

    userInfo.innerHTML = _userInfo
    summary.innerHTML = _summary
    if(_profileDetail.startsWith("http")){
      _profileDetail = "<a href="+_profileDetail+">"+ _profileDetail+"</a>"

      profileDetail.innerHTML = _profileDetail

      e.target.textContent = "프로필 편집"
      changing = false;
    }
  }
  else{
      let _userInfo = userInfo.textContent
      let _summary = summary.textContent
      let _profileDetail = profileDetail.textContent

      userInfo.innerHTML = "<input value="+ _userInfo + "></input>"

      profileDetail.innerHTML = "<input value="+_profileDetail + "></input>"

      summary.innerHTML = "<input value=" + _summary +"></input>"

        e.target.textContent ="프로필 편집 완료"
      changing = true
        }
  })
  profile_pic.addEventListener("click",function(e){
    profile_pic.setAttribute("src", prompt("url을 입력하세요!"))
  })
  profile_pic.addEventListener("mouseover",function(e){
    e.target.style.filter = "grayscale(70%)"
    e.target.style.textContent ="프로필 편집"
  })
  profile_pic.addEventListener("mouseleave",function(e){
    e.target.style.filter = "grayscale(-0%)"
  })
})