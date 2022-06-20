function DropFile(dropAreaId, fileListId) {
    let dropArea = document.getElementById(dropAreaId);
    let fileList = document.getElementById(fileListId);
  
    function preventDefaults(e) {
      e.preventDefault(); //크롬 새탭에서 이미지 열리지 않게
      e.stopPropagation(); //상위 요소들에게 전파하는 거 중단
    }
  
    function highlight(e) {
      preventDefaults(e);
      dropArea.classList.add("highlight"); //클래스 추가
    }
  
    function unhighlight(e) {
      preventDefaults(e);
      dropArea.classList.remove("highlight"); //클래스
    }
  
    //파일 업로드
    function handleDrop(e) {
      unhighlight(e);
      let dt = e.dataTransfer;
      let files = dt.files;
  
      handleFiles(files);
  
      const fileList = document.getElementById(fileListId);
      if (fileList) {
        fileList.scrollTo({ top: fileList.scrollHeight });
      }
    }
  
    function handleFiles(files) {
      files = [...files];
      // files.forEach(uploadFile);
      files.forEach(previewFile);
    }
  
    function previewFile(file) {
      console.log(file);
      renderFile(file);
    }
  
    //이미지 미리보기
    function renderFile(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        let img = dropArea.getElementsByClassName("preview")[0];
        img.src = reader.result;
        img.style.display = "block";
      };
    }
  
    dropArea.addEventListener("dragenter", highlight, false);
    dropArea.addEventListener("dragover", highlight, false);
    dropArea.addEventListener("dragleave", unhighlight, false);
    dropArea.addEventListener("drop", handleDrop, false);
    //https://developer.mozilla.org/ko/docs/Web/API/HTML_Drag_and_Drop_API
  
    return {
      handleFiles
    };
  }
  
  const dropFile = new DropFile("drop-file", "files");
